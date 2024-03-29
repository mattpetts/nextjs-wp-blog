import HeadMeta from '../../../components/HeadMeta';
import Link from 'next/link'
import Tags from '../../../components/Tags';

import axios from 'axios';
import { getAuthor, getFeaturedImage, getRandom, formatdate } from '../../../lib/utils';
import { POSTS_API_URL } from '../../../lib/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Index({ post, title, image, author }) {

    const postDate = formatdate(post.modified);
    const [rand, setRand] = useState(getRandom());
    const parse = require('html-react-parser');

    return (
        <div className="pt-20 container pb-10 m-auto">
            <HeadMeta seo={{
                title: post.yoast_head_json.og_title,
                desc: post.yoast_head_json.og_description,
                schema: post.yoast_head_json.schema,
            }}/>
            <div className="w-10/12 py-8 m-auto sm:w-8/12">
                {image &&
                    <img 
                        src={image} 
                        alt={title} 
                        className="rounded-md block mx-auto mt-6 max-w-5xl w-full" 
                    />
                }
                <h5 className='mt-5 font-main text-md dark:text-white cursor-pointer'><Link href="/blog"><span className='font-bold'><FontAwesomeIcon icon={ faChevronLeft } /> Tech Blog</span></Link></h5>
                <h1 className="inline-block text-left font-main font-bold text-5xl text-left my-3 relative blog-hover text-white">
                    <span className='z-10 relative'>{title}</span>
                    <span className={`hover-underline absolute left-0 -bottom-0 w-full h-full transition-all bg-theme-${rand}`}></span>
                </h1>  
                <div className='mb-3'>
                    <Tags tags={post.tags} />
                </div>
                <div className="flex flex-row align-center border-t border-b py-4 mb-5 dark:border-gray-800">
                    <h4 className="font-main font-bold text-md mr-5 dark:text-white w-6/12 sm:w-max">Last Updated: {postDate}</h4>
                    {author && <h4 className="font-main font-bold text-md dark:text-white w-6/12 sm:w-max mr-2">By: {author}</h4>}
                </div>
                <div className="blog-content-block dark:text-white dark:code-dark">
                    {parse(post.content.rendered)}
                </div>
            </div>
        </div>
    )

}

export async function getStaticPaths() {
  
    const res = await axios.get(POSTS_API_URL);
    const posts = res.data;

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));

    // We'll pre-render only these paths at build time.
    return { paths, fallback: 'blocking' };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const res = await axios.get(`${POSTS_API_URL}?slug=${params.slug}`);
    const post = await res.data[0];
    const image = await getFeaturedImage(post.featured_media);
    const author = await getAuthor(post.author);

    return {
        props: { 
            post, 
            title: post.title.rendered,
            image,
            author
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10
    };
}

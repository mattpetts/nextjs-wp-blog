import Head from 'next/head'
import Link from 'next/link'

import axios from 'axios';
import { getAuthor, getFeaturedImage, getRandom, formatdate } from '../../../lib/utils';
import { POSTS_API_URL } from '../../../lib/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function index({ title, featuredImg, author, content, date }) {

    const postDate = formatdate(date);
    const rand = getRandom();

    return (
        <div className="pt-20 container pb-10 m-auto">
            <Head>
                <title>Test</title>
            </Head>
            <div className="w-10/12 py-8 m-auto sm:w-8/12">
                {featuredImg &&
                    <img 
                        src={featuredImg} 
                        alt={title} 
                        className="rounded-md block mx-auto mt-6 max-w-5xl w-full" 
                    />
                }
                <h5 className='mt-5 font-main text-md dark:text-white cursor-pointer'><Link href="/blog"><span className='font-bold'><FontAwesomeIcon icon={ faChevronLeft } /> Tech Blog</span></Link></h5>
                <h1 className="inline-block text-left font-main font-bold text-5xl text-left my-6 relative blog-hover text-white">
                    <span className='z-10 relative'>{title}</span>
                    <span className={`hover-underline absolute left-0 -bottom-0 w-full h-full transition-all bg-theme-${rand}`}></span>
                </h1>  
                <div className="flex flex-row align-center border-t border-b py-4 mb-5 dark:border-gray-800">
                    <h4 className="font-main font-bold text-md mr-5 dark:text-white w-6/12 sm:w-max">Last Updated: {postDate}</h4>
                    <h4 className="font-main font-bold text-md dark:text-white w-6/12 sm:w-max">By: {author}</h4>
                </div>
                <div
                    className="blog-content-block dark:text-white"
                    dangerouslySetInnerHTML={{ __html: content }}
                >
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
      params: { id: post.id.toString() },
    }));
    // We'll pre-render only these paths at build time.
    return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const res = await axios.get(`${POSTS_API_URL}/${params.id}`);
    const post = await res.data;
    const featuredImg = await getFeaturedImage(post.featured_media);
    const author = await getAuthor(post.author);
    return {
      props: { title: post.title.rendered, content: post.content.rendered, featuredImg, author, date: post.modified },
    };
}

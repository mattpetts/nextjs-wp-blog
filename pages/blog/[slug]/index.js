import React from 'react'
import Head from 'next/head'
import { getSingle } from '../../../utilities/getSingle'
import { getRandom } from '../../../utilities/getRand'

export default function index({ post }) {

     let formatDate = new Date(post.modified).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour12: false

    });

    const rand = getRandom();

    return (
        <div className="pt-20 container pb-10 m-auto">
            <Head>
                <title>{post.title.rendered}</title>
            </Head>
            <div className="w-10/12 py-8 m-auto sm:w-8/12">
                {post._embedded['wp:featuredmedia'][0].source_url &&
                    <img 
                        src={post._embedded['wp:featuredmedia'][0].source_url} 
                        alt="{post.title.rendered}" 
                        className="rounded-md block mx-auto mt-6 max-w-5xl w-full" 
                    />
                }
                <h1 className="inline-block text-left font-main font-bold text-5xl text-left my-6 relative blog-hover text-white">
                    <span className='z-10 relative'>{post.title.rendered}</span>
                    <span className={`hover-underline absolute left-0 -bottom-0 w-full h-full transition-all bg-theme-${rand}`}></span>
                </h1>  
                <div className="flex flex-row align-center border-t border-b py-4 mb-5 dark:border-gray-800">
                    <h4 className="font-main font-bold text-md mr-5 dark:text-white w-6/12 sm:w-max">Last Updated: {formatDate}</h4>
                    <h4 className="font-main font-bold text-md dark:text-white w-6/12 sm:w-max">By: {post._embedded.author[0].name}</h4>
                </div>
                <div
                    className="blog-content-block dark:text-white"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                >
                </div>
            </div>
        </div>
    )

}

export const getServerSideProps = async (context) => {

    const post = await getSingle(context.params.slug);

    return {
        props: {
            post
        }
    }
}
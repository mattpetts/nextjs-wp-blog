import { useState, useEffect } from 'react'
import Head from 'next/head'
import Post from '../../components/Post'


export default function Home() {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchPosts, setSearchPosts] = useState('');

    useEffect(() => {
        fetch(`http://localhost:6660/wp-json/wp/v2/posts?_embed&search=${searchTerm}`)
        .then(res => res.json())
        .then(
            (results) => {
                setSearchPosts(results.map((post) => (
                    <Post key={post.id} post={post} image={post._embedded['wp:featuredmedia'][0].source_url} />
                )));
            }
        )
    }, [searchTerm])

    return (
        <div className="pt-20 container min-h-screen m-auto">
            <Head>
                <title>Tech Blog</title>
            </Head>
            <div className="w-11/12 py-8 m-auto sm:w-9/12">
                <h1 className="w-100 text-left font-main font-bold text-5xl text-left my-6 dark:text-white">Tech Blog</h1>
                <form className="mb-8 w-full">
                    <input 
                        type="text" 
                        name="search" 
                        placeholder="Search Blog" 
                        className="w-full p-4 border rounded font-main text-lg outline-none dark:bg-gray-900 dark:border-gray-800 dark:text-white"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
                {searchPosts.length > 0 ? searchPosts : <h3 className='font-main text-xl text-left my-6 dark:text-white'>No Results found for '{searchTerm}'</h3>}
            </div>
        </div>
    )
}

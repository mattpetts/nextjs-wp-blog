import { useState, useEffect } from 'react'
import Head from 'next/head'
import Post from '../../components/Post'
import { getAllPostsFromServer } from '../../lib/utils';


export default function Home() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            let mounted = true;
            if (mounted) {
                const postsFromServer = await getAllPostsFromServer();
                setPosts(postsFromServer);
            }
            return () => (mounted = false);
        }
        fetchPosts();
    }, []);

    return (
        <div className="pt-20 container min-h-screen m-auto">
            <Head>
                <title>Tech Blog</title>
            </Head>
            <div className="w-11/12 py-8 m-auto sm:w-9/12">
                <h1 className="w-100 text-left font-main font-bold text-5xl text-left my-6 dark:text-white">Tech Blog</h1>
                {posts ? (
                    <>
                        {posts.map((post) => (
                            <Post key={post.id} post={post} />
                        ))}
                    </>
                ) : <h3>No Posts Right Now...</h3>}
            </div>
        </div>
    )
}

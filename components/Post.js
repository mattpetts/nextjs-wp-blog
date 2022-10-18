import Link from 'next/link'
import { useState, useEffect } from 'react';
import { getRandom, getAuthor, formatdate } from '../lib/utils'


export default function Post({ post }) {

    const [postAuthor, setPostAuthor] = useState(null);

    const returnAuthor = async () => {
        const author = await getAuthor(post.author);
        setPostAuthor(author);
    }

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            returnAuthor();
        }
    }, []);

    const postDate = formatdate(post.date)
    const rand = getRandom();

    return (
        <div className="w-full m-auto border-b border-gray-100 flex flex-row items-center justify-between py-4 px-2 dark:border-gray-800">
            <div className="flex flex-row items-center">
                <div className="mr-8 hidden md:block">
                    <h5 className="font-main text-sm text-gray-400">Last Updated</h5>
                    <h4 className="font-main font-bold text-md dark:text-white">{postDate}</h4>
                </div>
                <div>
                    <Link href={`/blog/${post.id}`}>
                        <h3 className="font-main font-bold text-2xl cursor-pointer relative mb-2 blog-hover dark:text-white">
                            <span className="z-10 relative">{post.title.rendered}</span>
                            <span className={`hover-underline absolute left-0 -bottom-0 w-full h-1 transition-all bg-theme-${rand}`}></span>
                        </h3>   
                    </Link>  
                    {postAuthor && <h4 className="font-main text-sm dark:text-white">By: {postAuthor}</h4>}
                </div>
            </div>
        </div>
    )

}

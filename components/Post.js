import Link from 'next/link'
import { getRandom } from '../utilities/helperFunctions'


export default function Post({ post, image }) {

    let formatDate = new Date(post.modified).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour12: false

    });

    const rand = getRandom();

    return (
        <div className="w-full m-auto border-b border-gray-100 flex flex-row items-center justify-between py-4 px-2 dark:border-gray-800">
            <div className="flex flex-row items-center">
                <div className="mr-8 hidden md:block">
                    <h5 className="font-main text-sm text-gray-400">Last Updated</h5>
                    <h4 className="font-main font-bold text-md dark:text-white">{formatDate}</h4>
                </div>
                <div>
                    <Link href={`/blog/${post.slug}`}>
                        <h3 className="font-main font-bold text-2xl cursor-pointer relative mb-2 blog-hover dark:text-white">
                            <span className="z-10 relative">{post.title.rendered}</span>
                            <span className={`hover-underline absolute left-0 -bottom-0 w-full h-1 transition-all bg-theme-${rand}`}></span>
                        </h3>   
                    </Link>  
                    <h4 className="font-main text-sm dark:text-white">By: {post._embedded.author[0].name}</h4>
                </div>
            </div>
        </div>
    )

}

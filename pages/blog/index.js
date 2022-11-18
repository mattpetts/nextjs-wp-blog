import { useState, useEffect } from 'react'
import HeadMeta from '../../components/HeadMeta'
import PostList from '../../components/PostList';
import { getAllPosts, getFilteredPosts } from '../../lib/utils';


export default function Home() {

    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTerm, updateSearchTerm] = useState(null);
    const [mounted, isMounted] = useState(false);

    useEffect(() => {
        if (true === mounted) {
            return;
        }
        const fetchPosts = async () => {
            const posts = await getAllPosts();
            setPosts(posts);
        }
        fetchPosts();
        isMounted(true)
    }, []);

    useEffect(() => {

        let timer = setTimeout(() => {
            if (null === searchTerm || 0 === searchTerm.length) {
                setFilteredPosts([]);
                return;
            }

            const fetchPosts = async () => {
                const posts = await getFilteredPosts(searchTerm);
                setFilteredPosts(posts);
            }

            fetchPosts();
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [searchTerm]);

    const handleSearchInput = (event) => {
        updateSearchTerm(event.target.value);
    }

    return (
        <div className="pt-20 container min-h-screen m-auto">
            <HeadMeta seo={{
                'title': 'Tech Blog - Matt\'s Website'
            }}/>
            <div className="w-11/12 py-8 m-auto sm:w-9/12">
                <h1 className="w-100 text-left font-main font-bold text-5xl text-left my-6 dark:text-white">Tech Blog</h1>
                <form className="mb-8 w-full">
                    <input 
                        type="text" 
                        name="search" 
                        placeholder="Search Blog" 
                        className="w-full p-4 border rounded font-main text-lg outline-none dark:bg-gray-900 dark:border-gray-800 dark:text-white"
                        onChange={handleSearchInput}
                    />
                </form>
                <PostList posts={filteredPosts.length > 0 ? filteredPosts : posts} />
            </div>
        </div>
    )
}

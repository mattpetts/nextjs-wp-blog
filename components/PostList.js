import React from 'react'
import Post from './Post'

const PostList = ({ posts }) => {
  return (
    <>
    {posts.length > 0 ? (
        <>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    ) : <h3 className='font-main font-bold text-2xl cursor-pointer relative mb-2 dark:text-white'>No posts to show right now...</h3>}
    </>
  )
}

export default PostList
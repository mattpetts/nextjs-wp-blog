import React from 'react'
import Post from './Post'

const PostList = ({ posts }) => {
  return (
    <>
    {posts ? (
        <>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    ) : <h3>No Posts Right Now...</h3>}
    </>
  )
}

export default PostList
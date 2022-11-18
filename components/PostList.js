import React, { Fragment } from 'react'
import Post from './Post'

const PostList = ({ posts }) => {
  return (
    <Fragment>
      {posts.map((post) => (
          <Post key={post.id} post={post} />
      ))}
    </Fragment>
  )
}

export default PostList
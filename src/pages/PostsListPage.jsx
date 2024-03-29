import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PostsList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts')
        setPosts(response.data.posts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList

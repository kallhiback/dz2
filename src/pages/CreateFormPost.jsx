import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CreatePostPage = () => {
  const navigate = useNavigate()
  const [postTitle, setPostTitle] = useState('')

  const handleCreatePost = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/posts/add', { title: postTitle, userId: 1})
      console.log('Пост создан:', response.data)
      navigate('/')
    } catch (error) {
      console.error('Ошибка при создании поста:', error)
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <input
        type="text"
        placeholder="Enter post title"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <button onClick={handleCreatePost}>Create</button>
    </div>
  );
};

export default CreatePostPage

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Loyout';
import PostsPage from './pages/PostsListPage';
import CreatePostPage from '../src/pages/CreateFormPost';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

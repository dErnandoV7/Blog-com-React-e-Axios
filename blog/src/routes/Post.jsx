import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import "./Post.css";

const Post = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState({});

  const getPost = async () => {
    try {
      const res = await blogFetch.get(`/posts/${id}`);
      const data = res.data;
      setPost(data);
    } catch (error) {
      navigate("/");
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  
  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;

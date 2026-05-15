"use client";
import React from "react";
import { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      console.log('Where am I?');
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  },[]);

  if (loading) {
    return (
      <div>
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }
  return (
    <div>
      <h1>Total post : {posts.length}</h1>
    </div>
  );
};

export default Post;

import Link from "next/link";
import React from "react";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with JavaScript",
      author: "John Doe",
      date: "2026-05-01",
      tags: ["JavaScript", "Programming", "Beginner"],
      content: "This is an introductory guide to JavaScript...",
      published: true,
    },
    {
      id: 2,
      title: "Understanding Async/Await",
      author: "Jane Smith",
      date: "2026-05-03",
      tags: ["JavaScript", "Async", "Advanced"],
      content: "Async/Await makes handling asynchronous code easier...",
      published: true,
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox",
      author: "Alex Lee",
      date: "2026-05-05",
      tags: ["CSS", "Web Design"],
      content: "Both Grid and Flexbox are powerful layout systems...",
      published: false,
    },
  ];

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl text-center">This is blog page</h2>
      <div className="py-20">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <Link href={`blogs/${blog.id}`}>Show details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

const BlogDetais = async({params}) => {

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

  const {blogId} =  await params;
  console.log('show me params', blogId)


  const targetBlog = blogs.find(blog => blog.id === parseInt(blogId));

    return (
        <div className="flex flex-col justify-center items-center text-center h-screen">
          <h1 className="text-3xl font-bold">{targetBlog.title}</h1>
          <p className=" text-xl">{targetBlog.author}</p>
      </div>
    );
};

export default BlogDetais;
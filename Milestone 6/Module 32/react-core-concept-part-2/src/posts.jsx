import { use } from "react";
export default function Posts({callPost}){
    const netPosts = use(callPost);

    return (
      <>
        {netPosts.map((todo) => (
          <div key={todo.id}>
            <h2>Id : {todo.id}</h2>
            <p>Title: {todo.title}</p>
          </div>
        ))}
      </>
    );
    
}
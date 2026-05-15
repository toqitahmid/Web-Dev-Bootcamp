import Post from '../components/Post';


const Posts = () => {

    
    return (
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold">This is Post page</h1>
        <div>
            <Post></Post>
        </div>
      </div>
    );
};

export default Posts;
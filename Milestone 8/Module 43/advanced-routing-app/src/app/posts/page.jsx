
const getPosts = async() => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if(!res.ok){
            throw new Error("Failed to fetch posts");
        }
        return res.json();
    }
    catch(err){
        throw new Error("Failed to fetch posts");
    }
}


const PostsPage = async() => {
    const data = await(getPosts());
    console.log(data);
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            This is Post page 
        </div>
    );
};

export default PostsPage;
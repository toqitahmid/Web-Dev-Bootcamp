const Todo = async() => {

    const todoRes = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    console.log("Where am I?");
    const todos = await todoRes.json();
    return (
        <div className='flex flex-col gap-5 justify-center items-center h-screen'>
            <h1 className='text-2xl font-semibold'>This is Todo page</h1>
            <p>Todos : {todos.length}</p>
        </div>
    );
};

export default Todo;
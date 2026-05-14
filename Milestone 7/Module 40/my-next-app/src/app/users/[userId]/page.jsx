
const userDetails = async({params}) => {
    const {userId} = await params;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const userInfo = await res.json();
    console.log(userInfo);
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1>{userInfo.phone}</h1>
            <h1>{userInfo.website}</h1>
        </div>
    );
};

export default userDetails;
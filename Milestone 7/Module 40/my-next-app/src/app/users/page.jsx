import Link from "next/link";

const UsersPage = async() => {

    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersInfo = await data.json();
    // console.log(usersInfo);
    return (
      <div>
        This is users page
        <div className="grid grid-cols-2 gap-5">
          {usersInfo.map((user) => (
            <div key={user.id} className="card w-96 bg-base-100 card-md shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>
                  {user.email}
                </p>
                <div className="justify-end card-actions">
                  <Link href= {`/users/${user.id}`} className="btn btn-primary">Show Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default UsersPage;
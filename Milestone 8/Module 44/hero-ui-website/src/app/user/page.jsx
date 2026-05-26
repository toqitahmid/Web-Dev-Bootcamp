import UserCardInfo from '../components/UserCard';
import { getUserInfo } from '@/lib/task';


const AboutUs = async() => {
    const users = await getUserInfo();
    console.log(users);
    return (
      <>
        
        <div className="lg:w-4/12 md:w-6/12 w-11/12 mx-auto grid grid-cols-1 gap-5 my-10">
          {users.map((user) => (
            <UserCardInfo key={user.id} user={user}></UserCardInfo>
          ))}
        </div>
      </>
    );
};

export default AboutUs;
import {SetForm} from "../components/SetForm"
import {addUser} from "@/lib/action";
const SetFormInfo = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <SetForm addUser={addUser} />
    </div>
  );
};

export default SetFormInfo;
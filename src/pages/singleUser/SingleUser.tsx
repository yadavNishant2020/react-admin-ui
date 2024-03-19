import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import "./singleUser.scss";

function SingleUser() {
    //Fetch data and sed to Single component

  return (
    <div>
      <Single {...singleUser}/>
    </div>
  )
}

export default SingleUser
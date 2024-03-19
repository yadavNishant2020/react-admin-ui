import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./singleProduct.scss";

function SingleProduct() {

  //Fetch data and sed to Single component

  return (
    <div>
      <Single {...singleProduct}/>

    </div>
  )
}

export default SingleProduct
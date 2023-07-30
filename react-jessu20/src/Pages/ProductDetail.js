import { useParams } from "react-router-dom";

const ProductDetail = () => {
   const Params = useParams();

    console.log(Params.productId);

 return(
    <section>
        <h1>Product Detail</h1>
        <p>{Params.productId}</p>
    </section>
 );
}

export default ProductDetail;
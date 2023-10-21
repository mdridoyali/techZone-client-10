import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://assignment-technology-server.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);

  const handleAddToCart = (data) => {
    if (!data) {
        console.error("Missing product data");
        return;
      }
    
      const { name, image, brandName, type, price, rating, description } = data;
    
      const productData = {
        name,
        image,
        brandName,
        type,
        price,
        rating,
        description,
      };
    fetch("https://assignment-technology-server.vercel.app/cartProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          return Swal.fire({
            icon: "success",
            title: "Product Added",
            text: "Thank you!",
          });
        }
      });
  };

  return (
    <div className=" p-3   ">
      <div className="card card-compact  md:w-9/12  lg:w-6/12 border-t mx-auto my-20  bg-slate-100 shadow-xl">
        <figure>
          <img className="w-full h-[400px]" src={data.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(data)}
              className="btn bg-slate-300"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

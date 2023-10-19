import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  // console.log('data', data);
  console.log("id", id);
  console.log("data", data);

  useEffect(() => {

    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('data', data)
        setData(data);
      });
  }, [id]);

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
            <button className="btn bg-slate-300">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

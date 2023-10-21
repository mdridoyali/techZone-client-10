// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllProducts = () => {
  // const {brand_name} = useParams()
  const products = useLoaderData();
 

  return (
    <div className="my-10">
      {products.length === 0 && (
        <h2 className="text-5xl font-bold h-[35vh] flex justify-center items-center">
          No Data Found For This Post
        </h2>
      )}

      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src={products[0]?.image} className="w-72 h-52 mx-auto " />
    <p  className="mx-auto text-left text-lg md:text-5xl font-bold w-1/3"  >Buy This {products[0]?.name}</p>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img  src={products[1]?.image} className="w-72 h-52 mx-auto " />
  <p  className="mx-auto text-left  text-lg md:text-5xl  font-bold w-1/3"  >Buy This {products[1]?.name}</p>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img  src={products[2]?.image} className="w-72 h-52 mx-auto " />
  <p  className="mx-auto text-left  text-lg md:text-5xl  font-bold w-1/3"  >Buy This {products[2]?.name}</p>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img  src={products[3]?.image} className="w-72 h-52 mx-auto " />
  <p  className="mx-auto text-left  text-lg md:text-5xl  font-bold w-1/3"  >Buy This {products[3]?.name}</p>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

      <h2 className="capitalize text-center mt-10 border-t-4 pt-5 font-semibold text-4xl">
        All Our products from {products[0].brandName}
      </h2>
      <p className="border-dashed bg-slate-200 border  border-lime-400 text-center w-3/12 mt-7 mx-auto mb-10"></p>
      <div className=" w-11/12 md:w-9/12  gap-10 mx-auto grid md:grid-cols-2">
        {products.map((product, idx) => (
          <div className="bg-slate-200 rounded-md shadow-2xl text-black hover:shadow-2xl hover:bg-slate-400  " key={idx}>
            <img className="w-full h-80 rounded-t-md " src={product.image} />
            <div className="p-1 lg:p-4 flex justify-between">
              <div className="">
                <h2 className="bg-slate-300 rounded-full my-2 px-2 ">
                  Name: {product.name}
                </h2>
                <h2 className="bg-slate-300 rounded-full my-2 px-2 ">
                  Type: {product.type}
                </h2>
                <h2 className="bg-slate-300 rounded-full my-2 px-2 ">
                  Price: {product.price}$
                </h2>
              </div>
              <div className="text-right">
                <h2 className="capitalize bg-slate-300 rounded-full my-2 px-2 ">
                  Brand: {product.brandName}
                </h2>
                <h2 className="bg-slate-300 rounded-full my-2 px-2 ">
                  Rating: {product.rating}
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-between p-3">
              <Link to={`/productDetails/${product._id}`}>
                <button className="font-semibold  bg-slate-300 hover:bg-slate-200 w-20 px-2 py-1 rounded-full ">
                  Details
                </button>
              </Link>
              <Link to={`/updateProduct/${product._id}`}>
                <button
                  // onClick={() => handleUpdate(product._id)}
                  className="font-semibold  bg-slate-300 hover:bg-slate-200 w-20 px-2 py-1 rounded-full "
                >
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

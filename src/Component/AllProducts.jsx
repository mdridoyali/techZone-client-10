import { Link, useLoaderData } from "react-router-dom";

const AllProducts = () => {
  const allProducts = useLoaderData();

  return (
    <div className="my-10">
      <div className=" w-11/12 md:w-9/12  gap-10 mx-auto grid md:grid-cols-2">
        {allProducts.map((product, idx) => (
          <div className="bg-slate-200 rounded-md" key={idx}>
            <img className="w-full h-52 rounded-t-md " src={product.image} />
            <div className="p-4 flex justify-between">
              <div className="">
                <h2>Name: {product.name}</h2>
                <h2>Type: {product.type}</h2>
                <h2>Price: {product.price}</h2>
              </div>
              <div className="text-right">
                <h2>Brand: {product.brandName}</h2>
                <h2>Rating: {product.rating}</h2>
              </div>
            </div>
            <div className="flex items-center justify-between p-3">
              <Link>
                <button className="font-semibold  bg-slate-300 hover:bg-slate-200 w-20 px-2 py-1 rounded-full ">
                  Details
                </button>
              </Link>
              <Link>
                <button className="font-semibold  bg-slate-300 hover:bg-slate-200 w-20 px-2 py-1 rounded-full ">
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

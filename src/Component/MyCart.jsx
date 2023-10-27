import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyCart = () => {
  const {user} =useContext(AuthContext)
  const products = useLoaderData();
  const [updateData, setUpdateData] = useState(products);
  // console.log( 'products', products[0]);
  // console.log( 'user', user.email);

  useEffect( () => {
       const result = products.filter(items => items.email === user.email)
       console.log(result)
       setUpdateData(result)
  }, [user, products])

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-technology-server.vercel.app/cartProducts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your cart item has been deleted.", "success");
              const remaining = updateData.filter((items) => items._id !== id);
              setUpdateData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 gap-10 md:w-9/12 mx-auto my-14">
      <h2 className="text-5xl font-bold text-center mb-10">
        Your Total Product {updateData.length}
      </h2>
      <div className=" gap-10 grid md:grid-cols-2 lg:grid-cols-3 ">
        {updateData.map((items, idx) => (
          <div key={idx} className="shadow-2xl hover:shadow-2xl hover:bg-slate-400  bg-slate-200 text-black font-semibold rounded-xl">
            <img className="w-full h-72 rounded-t-xl " src={items.image} />
            <div className="flex justify-between items-center px-2 py-5">
              <div className="space-y-2">
                <h2 className="  bg-slate-300  hover:bg-slate-200  px-2 py-1 rounded-full ">
                  {items.name}
                </h2>
                <h2 className="  bg-slate-300  hover:bg-slate-200  px-2 py-1 rounded-full w-24">
                  {items.price}$
                </h2>
              </div>
              <button
                onClick={() => handleDelete(items._id)}
                className=" bg-slate-300  hover:bg-slate-200  px-4 py-2 rounded-full "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;

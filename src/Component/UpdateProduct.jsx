import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const products = useLoaderData()
    console.log(products._id, products)
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    // console.log(name, image, brandName, type, price, rating, description);
    const product = {name, image, brandName, type, price, rating, description}
    console.log(products._id)
    fetch(`https://assignment-technology-server.vercel.app/products/${products._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
         console.log(data)
         if(data.acknowledged){
            return Swal.fire({
                icon: "success",
                title: "Product Updated",
                text: "Thank you!",
              });
         }
    })
    

  };
  return (
    <div className=" text-black">
      <h2 className="text-center text-5xl font-semibold pt-10">
        Update Your Product Here
      </h2>
      <div className=" w-11/12 md:w-9/12 lg:w-7/12 mx-auto mt-5 pb-16 ">
        <form onSubmit={handleAddProduct} className=" mx-auto text-center ">
          <div className="grid gap-x-10 gap-y-4 md:grid-cols-2 mx-auto text-center">
            <div className="">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={products.name}
                placeholder="Name"
                className="input w-full input-bordered"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                defaultValue={products.image}
                placeholder="Image"
                className="input w-full input-bordered"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brandName"
                defaultValue={products.brandName}
                placeholder="Brand Name"
                className="input w-full input-bordered"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
                type="text"
                name="type"
                defaultValue={products.type}
                placeholder="Type"
                className="input w-full input-bordered"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={products.price}
                placeholder="Price"
                className="input w-full input-bordered"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={products.rating}
                placeholder="Rating"
                className="input w-full input-bordered"
              />
            </div>
          </div>
          <div className="my-3">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              name="description"
                defaultValue={products.description}
              placeholder="Description"
              className="input w-full input-bordered"
            />
          </div>
          <div className="pt-3">
            <input
              type="submit"
              value={"Update Product"}
              className="input w-full input-bordered btn bg-slate-800 text-white hover:text-black"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;

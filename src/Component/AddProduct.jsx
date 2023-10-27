import Swal from "sweetalert2";

const AddProduct = () => {
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
    console.log(name, image, brandName, type, price, rating, description);

    const products = {name, image, brandName, type, price, rating, description}
    fetch('https://assignment-technology-server.vercel.app/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(products)
    })
    .then(res => res.json())
    .then(data => {
         console.log(data)
         if(data.acknowledged){
            return Swal.fire({
                icon: "success",
                title: "Product Added",
                text: "Thank you!",
              });
         }
    })
    

  };
  return (
    <div className="">
      <h2 className="text-center text-5xl font-semibold pt-10">
        Add Your Product
      </h2>
      <div className=" w-11/12 md:w-9/12 lg:w-7/12 mx-auto mt-5 pb-16 ">
        <form onSubmit={handleAddProduct} className=" mx-auto text-center font-semibold">
          <div className="grid gap-x-10 gap-y-4 md:grid-cols-2 mx-auto text-center">
            <div className="">
              <label className="label">
                <span className="label-text ">Name</span>
              </label>
              <input
                type="text"
                name="name"
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
              placeholder="Description"
              className="input w-full input-bordered"
            />
          </div>
          <div className="pt-3">
            <input
              type="submit"
              value={"Add Product"}
              className="input w-full input-bordered btn bg-slate-800 text-white hover:text-black"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

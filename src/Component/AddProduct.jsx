

const AddProduct = () => {
    return (
        <div>
            <div>
                <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
export default function AddCustomer() {
  return (
    <div className="bg-white rounded p-4">
      <h3 className=" font-bold text-gray-500 pb-4">Add Product</h3>
      <div className="">
        <div className="flex flex-col gap-4 border-2 p-4 rounded-md border-gray-100">
          <div className="flex flex-col text-gray-500 font-semibold">
            <span>Product Name</span>
            <input
              className="border p-2 rounded"
              type="text"
              placeholder=" name"
            />
          </div>

          <div className="flex flex-col text-gray-500 font-semibold">
            <span>Brand</span>
            <input
              className="border p-2 rounded"
              type="text"
              placeholder="enter brand name"
            />
          </div>
          <div className="flex flex-col text-gray-500 font-semibold">
            <span>Category</span>
            <input
              className="border p-2 rounded"
              type="text"
              placeholder="enter product category"
            />
          </div>
          <div className="flex flex-col text-gray-500 font-semibold">
            <span>Price</span>
            <input
              className="border p-2 rounded"
              type="text"
              placeholder="product price"
            />
          </div>
          <div className="flex flex-col text-gray-500 font-semibold">
            <span>Description</span>
            <textarea
              className="border p-2 rounded"
              type="text"
              placeholder="describe your product"
            />
          </div>
          <div className="flex flex-col text-gray-500 font-semibold">
            <span>Tags</span>
            <div className="flex gap-2 text-gray-500 font-semibold">
              <span className="bg-blue-600 px-2 w-24 text-white py-2 rounded text-center">
                Ladies
              </span>
              <span className="border px-2 w-24 text-gray-500 py-2 rounded text-center">
                Men
              </span>
              <span className="border px-2 w-24 text-gray-500 py-2 rounded text-center">
                Bags
              </span>
              <span className="border px-2 w-24 text-gray-500 py-2 rounded text-center">
                Fashion
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex justify-end">
          <button className="border px-2 w-24 text-white bg-blue-600 py-2 rounded text-center">
            {" "}
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

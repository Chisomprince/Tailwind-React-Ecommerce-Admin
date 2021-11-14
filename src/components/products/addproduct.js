import React from "react";

/* This example requires Tailwind CSS v2.0+ */
const uploads = [
  {
    title: "Regional Paradigm Technician",
    progress: "100%",
    size: "37 mb",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    title: "Regional Paradigm Technician",
    progress: "100%",
    size: "37 mb",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    title: "Regional Paradigm Technician",
    progress: "90%",
    size: "37 mb",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function Addproduct() {
  return (
    <div className="bg-white rounded p-4">
      <h3 className=" font-bold text-gray-500 pb-4">Add Product</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2 border-2 p-4 rounded-md border-gray-100">
          <label class="block text-sm font-medium ">Image</label>
          <div class="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 h-56 border-dashed rounded-md">
            <div class="space-y-1 text-center">
              <svg
                class="mx-auto h-12 w-12 "
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="flex text-sm text-gray-500 ">
                <button className="text-blue-600">Update profile image</button>

                <p class="pl-1 ">or drag and drop</p>
              </div>
              <p class="text-xs ">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          {uploads.map((item, i) => (
            <div
              key={i}
              className="flex justify-between gap-0 border-2 rounded p-2"
            >
              <div className="flex gap-2 ">
                <img src={item.image} className="w-12 rounded" alt="#" />
                <div className="">
                  <h6 className="text-gray-500 font-semibold">{item.title}</h6>
                  <p className="text-gray-500 text-sm">{item.size}</p>
                </div>
              </div>
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

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
            <select name="" id="" className="p-2 bg-gray-100 rounded">
              <option value="phone">Phone</option>
              <option value="food">Food</option>
              <option value="cloth">Cloth</option>
            </select>
            {/* <input
              className="border p-2 rounded"
              type="text"
              placeholder="enter product category"
            /> */}
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

import React from "react";
import { Link } from "react-router-dom";
import AddCustomer from "../dropdown/addCustomer";

export default function CustomersHeader(props) {
  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white rounded">
        <ul className="flex items-center gap-4 divide-x-2 text-sm font-medium w-full">
          <li>
            <span className="mx-4 text-gray-600">Category</span>
            <span className="inline-block ml-auto">
              <svg
                className="text-gray-400 w-3 h-3"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </li>
          <li>
            <span className="mx-4 text-gray-600">Status</span>
            <span className="inline-block ml-auto">
              <svg
                className="text-gray-400 w-3 h-3"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </li>
          <li>
            <span className="mx-4 text-gray-600">Price</span>
            <span className="inline-block ml-auto">
              <svg
                className="text-gray-400 w-3 h-3"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </li>
        </ul>
        <div className="flex items-center ju w-auto px-3">
          <Link
            className="inline-flex justify-center items-center py-2 px-3 mr-3 text-xs text-indigo-500 font-medium bg-indigo-50 hover:bg-indigo-100 rounded"
            to="#"
          >
            <span className="inline-block mr-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 9.33334C13.6 9.33334 13.3333 9.60001 13.3333 10V12.6667C13.3333 13.0667 13.0667 13.3333 12.6667 13.3333H3.33334C2.93334 13.3333 2.66668 13.0667 2.66668 12.6667V10C2.66668 9.60001 2.40001 9.33334 2.00001 9.33334C1.60001 9.33334 1.33334 9.60001 1.33334 10V12.6667C1.33334 13.8 2.20001 14.6667 3.33334 14.6667H12.6667C13.8 14.6667 14.6667 13.8 14.6667 12.6667V10C14.6667 9.60001 14.4 9.33334 14 9.33334ZM5.80001 5.13334L7.33334 3.60001V10C7.33334 10.4 7.60001 10.6667 8.00001 10.6667C8.40001 10.6667 8.66668 10.4 8.66668 10V3.60001L10.2 5.13334C10.4667 5.40001 10.8667 5.40001 11.1333 5.13334C11.4 4.86668 11.4 4.46668 11.1333 4.20001L8.46668 1.53334C8.20001 1.26668 7.80001 1.26668 7.53334 1.53334L4.86668 4.20001C4.60001 4.46668 4.60001 4.86668 4.86668 5.13334C5.13334 5.40001 5.53334 5.40001 5.80001 5.13334Z"
                  fill="#8880EB"
                ></path>
              </svg>
            </span>
            <span>Export</span>
          </Link>

          <AddCustomer />
        </div>
      </div>
    </div>
  );
}

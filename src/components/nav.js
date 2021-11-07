import React from "react";

export default function Nav() {
  return (
    <div>
      <section className="pt-2">
        <nav className="relative">
          <div className="flex items-center ">
            <div className="flex items-center mr-auto rounded bg-white px-4">
              <button className="mr-2 text-gray-600 bg-white hover:text-gray-300">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7 19.3L17 15.6C20.1 11.7 19.5 6 15.6 2.9C11.7 -0.2 5.99999 0.5 2.89999 4.3C-0.200006 8.2 0.499995 13.9 4.29999 17C7.59999 19.6 12.3 19.6 15.6 17L19.3 20.7C19.7 21.1 20.3 21.1 20.7 20.7C21.1 20.3 21.1 19.7 20.7 19.3ZM9.99999 17C6.09999 17 2.99999 13.9 2.99999 10C2.99999 6.1 6.09999 3 9.99999 3C13.9 3 17 6.1 17 10C17 13.9 13.9 17 9.99999 17Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <input
                className="pl-2 py-3 text-sm text-gray-600 bg-white  w-64"
                type="text"
                placeholder="Type to search..."
              />
            </div>

            <ul className="flex items-center space-x-6 mr-6  ">
              <li className="bg-white p-4 rounded">
                <a className="text-gray-800 hover:text-gray-300" href="/">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
            <div className=" ">
              <button className="flex items-center bg-white p-2 rounded">
                <div className="mr-2">
                  <img
                    className="w-10 h-10 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="mr-3">
                  <p className="text-sm">Thomas Brown</p>
                  <p className="text-sm text-gray-500">Developer</p>
                </div>
                <span>
                  <svg
                    className="text-gray-400"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.08335 0.666657C8.75002 0.333323 8.25002 0.333323 7.91669 0.666657L5.00002 3.58332L2.08335 0.666657C1.75002 0.333323 1.25002 0.333323 0.916687 0.666657C0.583354 0.99999 0.583354 1.49999 0.916687 1.83332L4.41669 5.33332C4.58335 5.49999 4.75002 5.58332 5.00002 5.58332C5.25002 5.58332 5.41669 5.49999 5.58335 5.33332L9.08335 1.83332C9.41669 1.49999 9.41669 0.99999 9.08335 0.666657Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

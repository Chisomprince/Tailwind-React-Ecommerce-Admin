import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function AddCustomer() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          className="inline-flex w-32 items-center py-2 px-3 text-xs text-white font-medium bg-indigo-500 hover:bg-indigo-600 rounded"
          onClick={openModal}
        >
          <span className="inline-block mr-1">
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66667 12.3333H3.33333C2.8029 12.3333 2.29419 12.1226 1.91912 11.7476C1.54405 11.3725 1.33333 10.8638 1.33333 10.3333V3.66668C1.33333 3.48987 1.2631 3.3203 1.13807 3.19527C1.01305 3.07025 0.843478 3.00001 0.666667 3.00001C0.489856 3.00001 0.320286 3.07025 0.195262 3.19527C0.0702379 3.3203 0 3.48987 0 3.66668V10.3333C0 11.2174 0.351189 12.0652 0.976311 12.6904C1.60143 13.3155 2.44928 13.6667 3.33333 13.6667H8.66667C8.84348 13.6667 9.01305 13.5964 9.13807 13.4714C9.2631 13.3464 9.33333 13.1768 9.33333 13C9.33333 12.8232 9.2631 12.6536 9.13807 12.5286C9.01305 12.4036 8.84348 12.3333 8.66667 12.3333ZM4.66667 7.66668C4.66667 7.84349 4.7369 8.01306 4.86193 8.13808C4.98695 8.26311 5.15652 8.33334 5.33333 8.33334H8.66667C8.84348 8.33334 9.01305 8.26311 9.13807 8.13808C9.2631 8.01306 9.33333 7.84349 9.33333 7.66668C9.33333 7.48987 9.2631 7.3203 9.13807 7.19527C9.01305 7.07025 8.84348 7.00001 8.66667 7.00001H5.33333C5.15652 7.00001 4.98695 7.07025 4.86193 7.19527C4.7369 7.3203 4.66667 7.48987 4.66667 7.66668ZM12 4.96001C11.9931 4.89877 11.9796 4.83843 11.96 4.78001V4.72001C11.9279 4.65146 11.8852 4.58845 11.8333 4.53334V4.53334L7.83333 0.533343C7.77822 0.481488 7.71521 0.438731 7.64667 0.406677C7.62677 0.40385 7.60657 0.40385 7.58667 0.406677C7.51894 0.367838 7.44415 0.342906 7.36667 0.333344H4.66667C4.13623 0.333344 3.62753 0.544057 3.25245 0.91913C2.87738 1.2942 2.66667 1.80291 2.66667 2.33334V9.00001C2.66667 9.53044 2.87738 10.0392 3.25245 10.4142C3.62753 10.7893 4.13623 11 4.66667 11H10C10.5304 11 11.0391 10.7893 11.4142 10.4142C11.7893 10.0392 12 9.53044 12 9.00001V5.00001C12 5.00001 12 5.00001 12 4.96001ZM8 2.60668L9.72667 4.33334H8.66667C8.48986 4.33334 8.32029 4.26311 8.19526 4.13808C8.07024 4.01306 8 3.84349 8 3.66668V2.60668ZM10.6667 9.00001C10.6667 9.17682 10.5964 9.34639 10.4714 9.47141C10.3464 9.59644 10.1768 9.66668 10 9.66668H4.66667C4.48986 9.66668 4.32029 9.59644 4.19526 9.47141C4.07024 9.34639 4 9.17682 4 9.00001V2.33334C4 2.15653 4.07024 1.98696 4.19526 1.86194C4.32029 1.73691 4.48986 1.66668 4.66667 1.66668H6.66667V3.66668C6.66847 3.89411 6.70905 4.11956 6.78667 4.33334H5.33333C5.15652 4.33334 4.98695 4.40358 4.86193 4.52861C4.7369 4.65363 4.66667 4.8232 4.66667 5.00001C4.66667 5.17682 4.7369 5.34639 4.86193 5.47141C4.98695 5.59644 5.15652 5.66668 5.33333 5.66668H10.6667V9.00001Z"
                fill="#8880EB"
              ></path>
            </svg>
          </span>
          <span> Add Customer</span>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Customer
                </Dialog.Title>
                <div className="bg-white rounded py-2">
                  <div className="">
                    <div className="flex flex-col gap-4 border-2 p-4 rounded-md border-gray-100">
                      <div className="flex flex-col text-gray-500 font-semibold">
                        <span>First Name</span>
                        <input
                          className="border p-2 rounded"
                          type="text"
                          placeholder="first name"
                        />
                      </div>
                      <div className="flex flex-col text-gray-500 font-semibold">
                        <span>Last Name</span>
                        <input
                          className="border p-2 rounded"
                          type="text"
                          placeholder="Last name"
                        />
                      </div>

                      <div className="flex flex-col text-gray-500 font-semibold">
                        <span>Email</span>
                        <input
                          className="border p-2 rounded"
                          type="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="flex flex-col text-gray-500 font-semibold">
                        <span>Phone Number</span>
                        <input
                          className="border p-2 rounded"
                          type="number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className="col-span-2 flex justify-end mt-2">
                      <button
                        onClick={closeModal}
                        className="border mt-2  px-2 w-24 text-white bg-blue-600 py-2 rounded text-center"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

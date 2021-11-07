import TableAction from "../dropdown/tableAction";

/* This example requires Tailwind CSS v2.0+ */
const product = [
  {
    name: "Jorden Airmax",
    category: "computer",
    price: "345",
    status: "avaliable",
    created: "5.11.2021",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jorden Airmax",
    category: "computer",
    price: "345",
    status: "avaliable",
    created: "5.11.2021",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jorden Airmax",
    category: "computer",
    price: "345",
    status: "avaliable",
    created: "5.11.2021",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jorden Airmax",
    category: "computer",
    price: "345",
    status: "avaliable",
    created: "5.11.2021",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jorden Airmax",
    category: "computer",
    price: "345",
    status: "avaliable",
    created: "5.11.2021",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function ProductTable() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto ">
        <div className="py-2 align-middle inline-block min-w-full ">
          <div className="shadow overflow-hidden border-b bg-white border-gray-200 sm:rounded-lg">
            <h3 className="p-4 font-bold text-gray-500">Products</h3>
            <table className=" w-full divide-y divide-gray-200 mx-4">
              <thead className="bg-indigo-500 text-white br ra rad br-">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Qty
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Updated
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {product.map((product, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={product.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {product.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {product.price}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      68
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.created}
                    </td>
                    <td className="flex justify-center px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <TableAction />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

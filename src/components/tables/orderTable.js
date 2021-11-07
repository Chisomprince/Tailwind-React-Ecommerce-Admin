import TableAction from "../dropdown/tableAction";

/* This example requires Tailwind CSS v2.0+ */
const order = [
  {
    id: "4734GH",
    order_date: "1.11.2021",
    customer_name: "John Micheal",
    total_spent: "656",
    price: "51",
    phone: "90967536",
    status: "paid",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: "46734IJ",
    order_date: "1.11.2021",
    customer_name: "John Philips",
    total_spent: "456",
    price: "521",
    phone: "90967536",
    status: "paid",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: "AD63416",
    order_date: "1.11.2021",
    customer_name: "John Doe",
    total_spent: "456",
    price: "521",
    phone: "90967536",
    status: "paid",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: "45634AD",
    order_date: "1.11.2021",
    customer_name: "John Doe miceal",
    total_spent: "456",
    price: "521",
    phone: "90967536",
    status: "paid",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: "45634AD",
    order_date: "1.11.2021",
    customer_name: "Jane Doe",
    total_spent: "456",
    price: "521",
    phone: "90967536",
    status: "paid",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function OrderTable() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto ">
        <div className="py-2 align-middle inline-block min-w-full ">
          <div className="shadow overflow-hidden border-b bg-white border-gray-200 sm:rounded-lg">
            <h3 className="p-4 font-bold text-gray-500">All Orders</h3>
            <table className=" w-full divide-y divide-gray-200 mx-4">
              <thead className="bg-indigo-500 text-white br ra rad br-">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Order No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Order Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Customer Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Email
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
                    status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {order.map((order, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={order.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">
                            {order.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {order.order_date}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {order.customer_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{order.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{order.price}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {order.status}
                      </span>
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

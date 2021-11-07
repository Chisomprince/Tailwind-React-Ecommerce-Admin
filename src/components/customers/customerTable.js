import TableAction from "../dropdown/tableAction";

const people = [
  {
    id: "4734GH",
    name: "John Micheal",
    total_spent: "656",
    last_order: "1.11.2021",
    phone: "90967536",
    status: "active",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: "46734IJ",
    name: "John Philips",
    total_spent: "456",
    last_order: "1.111.2021",
    phone: "90967536",
    status: "active",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: "AD63416",
    name: "John Doe",
    total_spent: "456",
    last_order: "1.111.2021",
    phone: "90967536",
    status: "active",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: "45634AD",
    name: "John Doe miceal",
    total_spent: "456",
    last_order: "1.111.2021",
    phone: "90967536",
    status: "active",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: "45634AD",
    name: "Jane Doe",
    total_spent: "456",
    last_order: "1.111.2021",
    phone: "90967536",
    status: "active",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function CustomerTable() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto ">
        <div className="py-2 align-middle inline-block min-w-full ">
          <div className="shadow overflow-hidden border-b bg-white border-gray-200 sm:rounded-lg">
            <h3 className="p-4 font-bold text-gray-500">Customers</h3>

            <table className=" w-full divide-y divide-gray-200 mx-4">
              <thead className="bg-indigo-500 text-white br ra rad br-">
                <tr>
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
                    No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Spent
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Last Order
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
                    Phone
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
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{person.id}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {person.total_spent}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {person.last_order}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {person.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {person.phone}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
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

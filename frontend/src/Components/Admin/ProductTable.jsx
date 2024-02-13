import React from "react";

const ProductTable = ({ products, deleteProduct }) => {
  return (
    <div className="relative overflow-x-auto shadow-md ">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
          <th scope="col" className="px-6 py-3">
              S.no
            </th>
            <th scope="col" className="px-6 py-3">
              Wand Name
            </th>
            <th scope="col" className="px-6 py-3 ">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,index) => (
            <tr key={product.id} className="border-b odd:bg-white even:bg-gray-50">
               <td className="px-6 py-4 font-medium whitespace-nowrap">
                {index+1}
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap">
                {product.productName}
              </td>
              <td className="">{product.description}</td>
              <td className="px-6 py-4">${product.price}</td>
              <td className="px-6 py-4">{product.quantity}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="px-5 py-2.5 me-2 mb-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default  ProductTable;

import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";

function ProductsManagement({ pro, setPro }) {
  const [editingProduct, setEditingProduct] = useState(null);

  // For Setting localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(pro));
  }, [pro]);

  // Saving and Adding new products
  const saveProduct = (productData) => {
    let updatedProducts;
    if (editingProduct && editingProduct.id) {
      updatedProducts = pro.map((product) =>
        product.id === editingProduct.id
          ? { ...product, ...productData }
          : product
      );
    } else {
      const newProduct = {
        ...productData,
        id: pro.length ? Math.max(...pro.map((p) => p.id)) + 1 : 1,
      };
      updatedProducts = [...pro, newProduct];
    }
    setPro(updatedProducts);
    setEditingProduct(null);
  };

  // Delete Products
  const deleteProduct = (productId) => {
    const updatedProducts = pro.filter((product) => product.id !== productId);
    setPro(updatedProducts);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mt-8 mb-8">
        Products Management
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pro.map((product) => (
          <div
            key={product.id}
            className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600 mb-4">Stock: {product.stock}</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setEditingProduct(product)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition ease-in-out duration-150"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() =>
            setEditingProduct({ name: "", category: "", price: 0, stock: 0 })
          }
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-150 focus:outline-none focus:shadow-outline"
        >
          Add New Product
        </button>
      </div>
      {editingProduct && (
        <div className="mt-6">
          <ProductForm
            product={editingProduct}
            onSave={saveProduct}
            onCancel={() => setEditingProduct(null)}
          />
        </div>
      )}
    </div>
  );
}

export default ProductsManagement;

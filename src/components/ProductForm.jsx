import React, { useState, useEffect } from "react";

function ProductForm({ product, onSave, onCancel }) {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
  });

  // Effect to populate form when editing an existing product
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        category: product.category || "",
        price: product.price || 0,
        stock: product.stock || 0,
      });
    }
  }, [product]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <center>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          className="form-input"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="form-input"
        />
        <input
          type="number"
          name="price"
          min="0"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="form-input"
        />
        <input
          type="number"
          min="0"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Stock Quantity"
          required
          className="form-input"
        />
        <button type="submit" className="form-btn save">
          Save Changes
        </button>
        <button type="button" onClick={onCancel} className="form-btn cancel">
          Cancel
        </button>
      </form>
    </center>
  );
}

export default ProductForm;

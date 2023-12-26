import React, { useState } from "react";

const ProductForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [image_id,setImageID]=useState(0)
  const [product, setProduct] = useState({
    ProductName: '',
    Description: '',
    Price: 0,
    units: 0,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  
  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
     formData.append('image', selectedImage);
     console.log(selectedImage)
      console.log(formData);
      const response = await fetch("http://127.0.0.1:8000/products/uploadImage", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result)
         const ImageID= result.image_id
        setImageID(ImageID)
      } else {
        console.error("Failed to upload image:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleImageUpload();
    console.log(JSON.stringify({ ...product }))

    try {
      const response = await fetch('http://127.0.0.1:8000/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "ProductName": product.ProductName,
          "Description": product.Description,
          "Price": product.Price,
          "units": product.units,
          "ImageID": image_id
        } ),
      });
  
      if (response.ok) {
        console.log('Product added successfully!');
        alert('Product added Successfully');
      } else {
        console.error('Failed to add product:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  
    // Reset the form fields after submission
    setProduct({
      ProductName: '',
      Description: '',
      Price: 0,
      units: 0,
      ImageID: '',
    });
    setSelectedImage(null);
  };
  

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto m-4 p-4 bg-white">
      <div>
      </div>
      <div className="mb-4">
        <label htmlFor="ProductName" className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          id="ProductName"
          name="ProductName"
          value={product.ProductName}
          onChange={(e) => setProduct({...product, ProductName: e.target.value})}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="Description"
          name="Description"
          value={product.Description}
          onChange={(e) => setProduct({...product, Description: e.target.value})}
          required
          rows="3"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="Price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          id="Price"
          name="Price"
          value={product.Price}
          onChange={(e) => setProduct({...product, Price: parseFloat(e.target.value)})}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="units" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="units"
          name="units"
          value={product.units}
          onChange={(e) => setProduct({...product, units: Number(e.target.value)})}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
      <label htmlFor="Image" className="block text-sm font-medium text-gray-700">
          Image Upload
        </label>
        <input
          type="file"
          id="Image"
          name="Image"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      <button onClick={handleImageUpload}>Upload Image</button>
      {selectedImage && (
        <div>
          <p>Selected Image:</p>
          <img className='h-40 w-40' src={URL.createObjectURL(selectedImage)} alt="Selected" />
        </div>
      )}
      </div>
     
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;

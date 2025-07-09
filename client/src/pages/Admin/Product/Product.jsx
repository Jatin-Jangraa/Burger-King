







// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import "./PRoduct.css";
// // import Sidebar from "../../../components/Sidebar/Sidebar";

// // export default function Product() {



  
// //   const [products, setProducts] = useState([]);
// //   const [showModal, setShowModal] = useState(false);
// //   const [editingProduct, setEditingProduct] = useState(null);

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     price: "",
// //     ingredients: "",
// //     available: true,
// //     images: [],
// //   });

// //   console.log(products);
  

// //   const handleOpenAddModal = () => {
// //     setEditingProduct(null);
// //     setFormData({
// //       name: "",
// //       price: "",
// //       ingredients: "",
// //       available: true,
// //       images: [],
// //     });
// //     setShowModal(true);
// //   };

// //   const handleEditProduct = (product) => {
// //     setEditingProduct(product);
// //     setFormData({ ...product });
// //     setShowModal(true);
// //   };

// //   const handleImageUpload = (e) => {
// //     const files = Array.from(e.target.files);
// //     const previews = files.map((file) => URL.createObjectURL(file));
// //     setFormData((prev) => ({
// //       ...prev,
// //       images: [...prev.images, ...previews],
// //     }));
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: name === "available" ? value === "true" : value,
// //     }));
// //   };

// //   const handleSubmit = () => {
// //     if (editingProduct) {
// //       setProducts((prev) =>
// //         prev.map((p) => (p.id === editingProduct.id ? formData : p))
// //       );
// //     } else {
// //       setProducts((prev) => [
// //         ...prev,
// //         { ...formData, id: Date.now() }, // Generate ID
// //       ]);
// //     }
// //     setShowModal(false);
// //     setFormData({
// //       name: "",
// //       price: "",
// //       ingredients: "",
// //       available: true,
// //       images: [],
// //     });
// //   };

// //   const handleDelete = (id) => {
// //     setProducts((prev) => prev.filter((p) => p.id !== id));
// //   };

// //   const toggleAvailability = (id) => {
// //     setProducts((prev) =>
// //       prev.map((p) =>
// //         p.id === id ? { ...p, available: !p.available } : p
// //       )
// //     );
// //   };

// //   return (
// //     <div className='adminmain'>
// //         <Sidebar/>
   
// //         <div className='adminbox'>


// // <motion.div
// //       className="admin-productcontainer"
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //     >
// //       <h2>Product Control Panel</h2>

// //       <div style={{ textAlign: "right", marginBottom: "1rem" }}>
// //         <button className="btn add-btn" onClick={handleOpenAddModal}>
// //           + Add Product
// //         </button>
// //       </div>

// //       <div className="table-wrapper">
// //         <motion.table
// //           className="product-table"
// //           initial={{ y: 20, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //         >
// //           <thead>
// //             <tr>
// //               <th>Image</th>
// //               <th>Name</th>
// //               <th>Price (₹)</th>
// //               <th>Ingredients</th>
// //               <th>Availability</th>
// //               <th>Action</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {products.map((product) => (
// //               <motion.tr key={product.id}>
// //                 <td>
// //                   <img
// //                     src={
// //                       product.images[0] ||
// //                       "https://via.placeholder.com/60x60?text=Image"
// //                     }
// //                     alt="Product"
// //                     className="product-img"
// //                   />
// //                 </td>
// //                 <td>{product.name}</td>
// //                 <td>{product.price}</td>
// //                 <td>{product.ingredients}</td>
// //                 <td>
// //                   <button
// //                     className={`btn ${
// //                       product.available ? "available" : "not-available"
// //                     }`}
// //                     onClick={() => toggleAvailability(product.id)}
// //                   >
// //                     {product.available ? "Available" : "Not Available"}
// //                   </button>
// //                 </td>
// //                 <td className="actions-col">
// //                   <button
// //                     className="btn manage-btn"
// //                     onClick={() => handleEditProduct(product)}
// //                   >
// //                     Manage
// //                   </button>
// //                   <button
// //                     className="btn delete-btn"
// //                     onClick={() => handleDelete(product.id)}
// //                   >
// //                     Delete
// //                   </button>
// //                 </td>
// //               </motion.tr>
// //             ))}
// //           </tbody>
// //         </motion.table>
// //       </div>

// //       {/* MODAL */}
// //       <AnimatePresence>
// //         {showModal && (
// //           <motion.div
// //             className="modal-backdrop"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //           >
// //             <motion.div
// //               className="modal-content"
// //               initial={{ scale: 0.8, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.8, opacity: 0 }}
// //             >
// //               <h3>{editingProduct ? "Edit Product" : "Add New Product"}</h3>

// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Product Name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //               />
// //               <input
// //                 type="number"
// //                 name="price"
// //                 placeholder="Price"
// //                 value={formData.price}
// //                 onChange={handleChange}
// //               />
// //               <input
// //                 type="text"
// //                 name="ingredients"
// //                 placeholder="Ingredients"
// //                 value={formData.ingredients}
// //                 onChange={handleChange}
// //               />
// //               <label>Availability:</label>
// //               <select
// //                 name="available"
// //                 value={formData.available}
// //                 onChange={handleChange}
// //               >
// //                 <option value="true">Available</option>
// //                 <option value="false">Not Available</option>
// //               </select>

// //               <label>Upload Images:</label>
// //               <input type="file" multiple onChange={handleImageUpload} />
// //               <div className="image-preview">
// //                 {formData.images.map((img, idx) => (
// //                   <img key={idx} src={img} alt="preview" />
// //                 ))}
// //               </div>

// //               <div className="modal-actions">
// //                 <button className="btn save-btn" onClick={handleSubmit}>
// //                   Save
// //                 </button>
// //                 <button
// //                   className="btn cancel-btn"
// //                   onClick={() => setShowModal(false)}
// //                 >
// //                   Cancel
// //                 </button>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>



// //         </div>
// //         </div>
// //   );
// // }





// import React, { useState, useEffect } from "react";
// import { productapi } from "../../../Api";
// import { motion, AnimatePresence } from "framer-motion";
// import Sidebar from "../../../components/Sidebar/Sidebar";
// import "./Product.css";





// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     ingredients: "",
//     available: true,
//     images: [],
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);


//  const fetchProducts = async () => {
//     const res = await productapi.get("/");
//     setProducts(res.data);
//   };


//  const handleOpenAddModal = () => {
//     setEditingProduct(null);
//     setFormData({
//       name: "",
//       price: "",
//       ingredients: "",
//       available: true,
//       images: [],
//     });
//     setNewImages([]);
//     setShowModal(true);
//   };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "available" ? value === "true" : value,
//     }));
//   };

 

//    const handleImageUpload = (e) => {
//     setNewImages(Array.from(e.target.files));
//   };

//   const handleDeleteImage = async (imageUrl) => {
//     if (!editingProduct) return;

//     const res = await productapi.post(`/${editingProduct._id}/remove-image`, { imageUrl });
//     setFormData((prev) => ({
//       ...prev,
//       images: res.data.images,
//     }));
//   };




//    const handleSubmit = async () => {
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("price", formData.price);
//     data.append("ingredients", formData.ingredients);
//     data.append("available", formData.available);
//     formData.images.forEach((img) => data.append("existingImages[]", img));
//     newImages.forEach((file) => data.append("images", file));

//     if (editingProduct) {
//       await productapi.put(`/${editingProduct._id}`, data);
//     } else {
//       await axios.post("/", data);
//     }

//     fetchProducts();
//     setShowModal(false);
//   };




//     const handleDelete = async (id) => {
//     await axios.delete(`/${id}`);
//     fetchProducts();
//   };

//   const toggleAvailability = async (product) => {
//     await productapi.put(`/${product._id}`, {
//       ...product,
//       available: !product.available,
//       existingImages: product.images,
//     });
//     fetchProducts();
//   };

// return (
//     <div className="adminmain">
//       <Sidebar />
//       <div className="adminbox">
//         <motion.div className="admin-productcontainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           <h2>Product Control Panel</h2>

//           <div style={{ textAlign: "right", marginBottom: "1rem" }}>
//             <button className="btn add-btn" onClick={handleOpenAddModal}>+ Add Product</button>
//           </div>

//           <div className="table-wrapper">
//             <motion.table className="product-table">
//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>Name</th>
//                   <th>Price (₹)</th>
//                   <th>Ingredients</th>
//                   <th>Availability</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product) => (
//                   <motion.tr key={product._id}>
//                     <td>
//                       <img
//                         src={product.images[0] || "https://via.placeholder.com/60x60?text=Image"}
//                         alt="Product"
//                         className="product-img"
//                       />
//                     </td>
//                     <td>{product.name}</td>
//                     <td>{product.price}</td>
//                     <td>{product.ingredients}</td>
//                     <td>
//                       <button
//                         className={`btn ${product.available ? "available" : "not-available"}`}
//                         onClick={() => toggleAvailability(product)}
//                       >
//                         {product.available ? "Available" : "Not Available"}
//                       </button>
//                     </td>
//                     <td>
//                       <button className="btn manage-btn" onClick={() => handleEditProduct(product)}>Manage</button>
//                       <button className="btn delete-btn" onClick={() => handleDelete(product._id)}>Delete</button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </motion.table>
//           </div>

//           <AnimatePresence>
//             {showModal && (
//               <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//                 <motion.div className="modal-content" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
//                   <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
//                   <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
//                   <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
//                   <input name="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange} />
//                   <select name="available" value={formData.available} onChange={handleChange}>
//                     <option value="true">Available</option>
//                     <option value="false">Not Available</option>
//                   </select>
//                   <label>Upload New Images:</label>
//                   <input type="file" multiple onChange={handleImageUpload} />
//                   <div className="image-preview">
//                     {formData.images.map((img, idx) => (
//                       <div key={idx} className="image-item">
//                         <img src={img} alt="preview" />
//                         <button className="delete-image" onClick={() => handleDeleteImage(img)}>X</button>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="modal-actions">
//                     <button className="btn save-btn" onClick={handleSubmit}>Save</button>
//                     <button className="btn cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </div>
//   );

// }


// export default Product;






































import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./Product.css";
import { productapi } from "../../../Api";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    ingredients: "",
    available: true,
    images: [],
  });

  console.log(products);
  

  console.log(formData);
  

  const [newImages,setNewImages] = useState({})

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await productapi.get("/");
    setProducts(res.data);
  };

  const handleOpenAddModal = () => {
    
    setEditingProduct(null);
    setFormData({
      name: "",
      price: "",
      ingredients: "",
      available: true,
      images: [],
    });
    setNewImages([]);
    setShowModal(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({ ...product });
    setNewImages([]);
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "available" ? value === "true" : value,
    }));
  };

  const handleImageUpload = (e) => {
    setNewImages(Array.from(e.target.files));
  };

  const handleDeleteImage = async (imageUrl) => {
    if (!editingProduct) return;

    const res = await productapi.post(`/${editingProduct._id}/remove-image`, { imageUrl });
    setFormData((prev) => ({
      ...prev,
      images: res.data.images,
    }));
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("ingredients", formData.ingredients);
    data.append("available", formData.available);
    formData.images.forEach((img) => data.append("existingImages[]", img));
    newImages.forEach((file) => data.append("images", file));

    if (editingProduct) {
      await productapi.put(`/${editingProduct._id}`, data);
    } else {
      await productapi.post("/", data);
    }

    fetchProducts();
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    await productapi.delete(`/${id}`);
    fetchProducts();
  };

  const toggleAvailability = async (product) => {
    await productapi.put(`/${product._id}`, {
      ...product,
      available: !product.available,
      existingImages: product.images,
    });
    fetchProducts();
  };

  return (
    <div className="adminmain">
      <Sidebar />
      <div className="adminbox">
        <motion.div className="admin-productcontainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Product Control Panel</h2>

          <div style={{ textAlign: "right", marginBottom: "1rem" }}>
            <button className="btn add-btn" onClick={handleOpenAddModal}>+ Add Product</button>
          </div>

          <div className="table-wrapper">
            <motion.table className="product-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price (₹)</th>
                  <th>Ingredients</th>
                  <th>Availability</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <motion.tr key={product._id}>
                    <td>
                      <img
                        src={product.images[0] || "https://via.placeholder.com/60x60?text=Image"}
                        alt="Product"
                        className="product-img"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.ingredients}</td>
                    <td>
                      <button
                        className={`btn ${product.available ? "available" : "not-available"}`}
                        onClick={() => toggleAvailability(product)}
                      >
                        {product.available ? "Available" : "Not Available"}
                      </button>
                    </td>
                    <td>
                      <button className="btn manage-btn" onClick={() => handleEditProduct(product)}>Manage</button>
                      <button className="btn delete-btn" onClick={() => handleDelete(product._id)}>Delete</button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>

          <AnimatePresence>
            {showModal && (
              <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.div className="modal-content" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                  <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
                  <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                  <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
                  <input name="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange} />
                  <select name="available" value={formData.available} onChange={handleChange}>
                    <option value="true">Available</option>
                    <option value="false">Not Available</option>
                  </select>
                  <label>Upload New Images:</label>
                  <input type="file" multiple onChange={handleImageUpload} />
                  <div className="image-preview">
                    {formData.images.map((img, idx) => (
                      <div key={idx} className="image-item">
                        <img src={img} alt="preview" />
                        <button className="delete-image" onClick={() => handleDeleteImage(img)}>X</button>
                      </div>
                    ))}
                  </div>
                  <div className="modal-actions">
                    <button className="btn save-btn" onClick={handleSubmit}>Save</button>
                    <button className="btn cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
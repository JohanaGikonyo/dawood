
'use client';
import React, { useState , useRef} from "react";
import {AddItem} from '../api/Api'
const Admin = () => {
  const password = process.env.NEXT_PUBLIC_ADMIN_PASS
  const [pass, setPass] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewPass, setViewPass] = useState(false)
  const [itemData, setItemData] = useState({
    title: '',
    img: '',
    name: '',
  });
  const [viewCateg, setViewCateg] = useState(false)
const fileInputRef=useRef(null)

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItemData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleImageChange=(e)=>{
    const file=e.target.files[0];
    if(file){
      const reader= new FileReader()
      reader.onloadend=()=>{
        setItemData(prev=>({...prev, 'img':reader.result,}))//storing base 64 string
      }
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit_Pass = (e) => {

    e.preventDefault();
    if (pass === password) {
      setViewCateg(prev => !prev)

    } else {
      alert('Incorrect password!');
    }
  };
  const handleSubmit_item = async (e) => {
    e.preventDefault();
    const payload = { ...itemData, category: selectedCategory };

     const {data, error}=await AddItem(payload)

     if(error){
      console.error("An error occured: ",error)
     }
     else{
      console.log(data)
        setItemData({ title: '', img: '', name: '' });
        if (fileInputRef.current) {
          fileInputRef.current.value = ''; // Reseting file input
        }
    }

  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-teal-100 to-teal-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to the Admin Page</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {!viewCateg ? (
          <div>
            <form onSubmit={handleSubmit_Pass} className="space-y-4">
              <input
                type={viewPass ? "text" : "password"}
                placeholder="Enter admin password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input type="checkBox" onChange={() => { setViewPass(prev => !prev) }} />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Submit Password
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select a category</option>
              <option value="Ready made Furnitures">Ready made Furnitures</option>
              <option value="New Furnitures">New Furnitures</option>
              <option value="Antics Sofas">Antics Sofas</option>
              <option value="Repair Furnitures">Repair Furnitures</option>
              <option value="Imported recliners">Imported recliners</option>
              <option value="Dinning Chairs & tables">Dinning Chairs & tables</option>
              <option value="Office Furnitures">Office Furnitures</option>
              <option value="Beds & Beddings">Beds & Beddings</option>
              <option value="Pillows">Pillows</option>
            </select>

            <form onSubmit={handleSubmit_item} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Item Title"
                value={itemData.title}
                onChange={handleItemChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="file"
                placeholder="Image URL"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="name"
                placeholder="Item Name"
                value={itemData.name}
                onChange={handleItemChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
              >
                Add Item
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
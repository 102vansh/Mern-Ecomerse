
import React, { useState } from 'react';
import './Addproduct.css';
import upload_area from '../../Ecommerce_Admin_Panel_Assets/Admin Panel Assets/upload_area.svg';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Addproduct = () => {
    const[loading,setLoading] = useState(false)
    const [image, setImage] = useState(null);
    const [productDetail, setProductDetail] = useState({
        name: '',
        old_price: '',
        new_price: '',
        category:'women',
    });
    const [feedback, setFeedback] = useState('');

    const changeHandler = (e) => {
        setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
    };

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const addProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('name', productDetail.name);
        formData.append('old_price', productDetail.old_price);
        formData.append('new_price', productDetail.new_price);
        formData.append('category', productDetail.category);
        if (image) {
            formData.append('image', image);
        }

        console.log([...formData.entries()]); // Debugging form data

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:4001/api/v1/product/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            setFeedback('Product added successfully!');
            setProductDetail({ name: '', old_price: '', new_price: '', category: '' });
            setImage(null);
            toast.success('Product added successfully!');
            console.log(category)
            setLoading(false);
        } catch (err) {
            console.error(err);
        setFeedback('Something went wrong!');
            setLoading(false);
        }
    };

    return (
        <div className='addproduct'>
            <div className='addproitem'>
                <h1>Add Product</h1>
                <input
                    onChange={changeHandler}
                    value={productDetail.name}
                    type="text"
                    placeholder='Product Name'
                    name='name'
                />
                <div className='addproprice'>
                    <div className='itemfield'>
                        <p>Product Price</p>
                        <input
                            onChange={changeHandler}
                            value={productDetail.old_price}
                            type="text"
                            name='old_price'
                            placeholder='Product Price'
                        />
                    </div>
                    <div className='itemfield'>
                        <p>Discounted Price</p>
                        <input
                            onChange={changeHandler}
                            value={productDetail.new_price}
                            type="text"
                            name='new_price'
                            placeholder='Discounted Price'
                        />
                    </div>
                </div>
                <div className='itemfield'>
                    <p>Product Category</p>
                    <select
                        onChange={changeHandler}
                        value={productDetail.category}
                        name='category'
                        className='addprocategory'
                    >
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="kid">Kid</option>
                    </select>
                </div>
                <div className='itemfield'>
                    <label htmlFor='file-input'>
                        <img src={image ? URL.createObjectURL(image) : upload_area} alt="" />
                    </label>
                    <input onChange={imageHandler} type="file" name='image' id='file-input' />
                </div>
            </div>
            <button onClick={addProduct} className='addprobtn'>{loading ? 'Loading...' : 'Add Product'}</button>
            {feedback && <p>{feedback}</p>}
            <Toaster />
        </div>
    );
};

export default Addproduct;




import React, { useContext } from 'react';
import './myorder.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Myorder = () => {
    
    
    const [data, setData] = useState([]);
    const userid = localStorage.getItem('userid');
    const token = localStorage.getItem('token');
    const fetchOrder = async () => {
      
        try {
        
            const response = await axios.post(
                `http://localhost:4001/api/v1/order/myorders`,{},
                
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                    withCredentials: true,
                }
            );
            console.log("API Response:", response.data.data);
            setData(response.data.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    useEffect(() => {
        if(token && userid){
            fetchOrder();
        }
           
        
    }, []);

    return (
        <div className='myorders'>
            <h2>My orders</h2>
            <div className='container'>
                {data.length > 0 ? (
                    data.map((order, index) => (
                        <div className='myorders-item' key={index}>
                            <img src='https://cdn3.vectorstock.com/i/1000x1000/88/02/icon-parcel-vector-1388802.jpg' alt="" />
                                  <p style={{fontWeight:"bold",marginLeft:"30px",color:"black"}}> $ {order?.items?.reduce((acc, item) =>{
                                    return acc + item.new_price
                                  },0)}.00</p>
                                  <p>{order.size}</p>
                            <p style={{color:"black"}}>
                                {order?.items?.map((item, index) => {
                                  
                                    if (index === order?.item?.length - 1) {
                                 
                                        return item?.name + "x" + item?.quantity;

                                    } else {
                                        return item?.name + "x" + item?.quantity + " , ";
                                    }
                                   
                                })}
                            </p>
                           
                            <p style={{color:"black"}}>Items: {order?.items?.length}</p>
                            
                            <p style={{ display :"flex",gap:"10px"}}>
                                <span style={{color:"black"}}>&#x25cf;</span><b style={{color:"red"}}>{order?.status}</b>
                            </p>
                            <button>Track Order</button>
                        </div>
                    ))
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </div>
    );
};

export default Myorder;

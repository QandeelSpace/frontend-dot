import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getAllItems } from '../services/itemService';

const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchingALLItems = async () => {
            const token = localStorage.getItem("token")
            try {
                const res = await getAllItems();

                console.log(res.data);
                setItems(res.data)

            } catch (err) {
                console.log(err.response);

            }
        }



        fetchingALLItems()
    }, [])

    console.log("items data", items);


    return (
        <div>
            {
                items?.map((item) => (
                    <div key={item._id}>
                        {item.name}
                    </div>
                ))

            }
        </div>
    )
}

export default Home
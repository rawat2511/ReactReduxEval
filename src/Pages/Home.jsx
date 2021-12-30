import { actionTypes, fetchData } from "../Reducers/ReudcerProducts/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import Product from "./Product";


function Home() {
    const dispatch = useDispatch();
    const proucts = useSelector(state => state);

    const fetchProducts = async () => {
        var data = await axios.get("http://localhost:8000/products");
        data = data.data;
        dispatch( fetchData(data) );
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <div>
            <h1>Products</h1>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                {
                    proucts.map((item) => <Product key={item.id} id={item.id} name={item.name} country={item.country_of_origin} img={item.image} desc={item.description} price={item.price} /> )
                }
            </div>
        </div>
    )
}

export default Home;
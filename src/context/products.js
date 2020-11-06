// products context
import React,{useState , useEffect} from 'react'
import axios from 'axios';
import url from '../utils/URL';

export const MyContext = React.createContext();

const Productprovider = (props) => {
    const [loading, setLoading] = useState(false)
    const [allProducts , setAllProducts] = useState([])
    const [featuredProducts , setFeaturedProducts] = useState([])
    useEffect(() =>{
        setLoading(true)
        axios.get(`${url}/products`)
        .then(response => {
            setAllProducts(response.data);
            let featured = response.data.filter( item => item.featured );
            setFeaturedProducts(featured);
            setLoading(false)

        })
    } , [])
    console.log(allProducts);
    return (
        
        <MyContext.Provider value={{allProducts,loading,featuredProducts}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default Productprovider

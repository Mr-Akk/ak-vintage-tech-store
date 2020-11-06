// cart context
import React,{useState , useEffect} from 'react';
import localcart from '../utils/localCart';


export const CartContext = React.createContext();

const Cart = (props) => {
    const [cart, setCart] = useState(()=>{
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    });
    const [total, setTotal] = useState(0);
    const [cartItems, setCartItems] = useState(0);
    
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart));
        let newtotal = cart.reduce ( (acc,curr)=>{
              return acc+= curr.amount * curr.price
        },0)
        newtotal = newtotal.toFixed(2);
        setTotal(newtotal);
        let newcartitems = cart.reduce ((acc,cur)=>{
            return acc+=cur.amount
        },0);
        setCartItems(newcartitems);
    },[cart])

    let removeitem = id =>{
        let newCart = cart.filter( item => item.id!== id );
        setCart(newCart)
    }
    
    let addcount = id =>{
        let newCart = [...cart].map( item => item.id == id ? 
            {...item,amount:item.amount+=1} : item);
        setCart(newCart)
    }
    
    let decreasecount = (id,amount) =>{
        if (amount == 1){
            removeitem(id);
        }
        else{
let newCart = [...cart].map( item => item.id == id ? 
            {...item,amount: item.amount-1 } : item);
        
        setCart(newCart)
        }
    }

    let addtocart = item => {
        let {id,title,price} = item;
        let image = item.image.url;
        let isthereitem = [...cart].find( item => item.id === id);
        if (isthereitem){
           
            addcount(id);
        }else{
            let newItem ={
                id :id,
                title : title,
                price : price,
                image : image,
                amount : 1
            }
            let newCart = [...cart , newItem];
            setCart(newCart);
            
        }
    }
    let clearcart = ()=>{
            setCart([]);
        }
    return (
        <CartContext.Provider value={{cart , 
        total , 
        cartItems , 
        removeitem , 
        addcount , 
        decreasecount , 
        addtocart,
        cartItems,
        clearcart
        
        }}>
                {props.children}
        </CartContext.Provider>
    )
}

export default Cart

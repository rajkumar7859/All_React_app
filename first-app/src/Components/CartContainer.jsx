import CartIteam from "./CartIteam";
import { useState } from 'react'

const initData = [
    {
        id: 1,
        product_name: "Noodles",
    price: 30,
    qty: 1,
},
    {
        id: 2,
        product_name: "Biriyani",
        price: 90,
    qty: 2,
},
    {
        id: 3,
        product_name: "Chips",
        price: 10,
        qty: 3,
    },]


    function TotalCoast(products){
        return products.reduce((acc,c)=>acc + (c.qty * c.price),0)
    }

function CartContainer () {

    const [data ,setData] = useState(initData)
    
    const handleChangqty=(id,amount)=>{
        let updata=data.map(item =>{
            if(item.id===id){
                return {
                    ...item,
                    qty:item.qty+amount
                }
            }
            else {
                return item
            }
        })
        setData(updata)
    }

    return(
<div style={{
    border: "1px solid red",
    width: "30%",
    margin: "auto",
    padding:"10px"
}}>
  {
        data.map(item =>     

    < CartIteam  
key={item.id}
id={item.id}
label={item.product_name} 
price={item.price} 
qty={item.qty}
handleChangqty={handleChangqty}
 />
 
) }
   
<Total total={TotalCoast(data)}/>

</div>
    )
}


function Total({
    total
}) {


let SubmitFunc=()=>{
    alert(`Order place successfull of amount ₹. ${total}`)
}

    return (
        <div style={{
            border:"1px solid red",
            fontSize:"20px",
            fontWeight:"bolder",
        }}>
              Total:₹. {total}
            

            <div><button style={{
            border:"none",
            borderRadius:"10px",
            fontSize:"18px",
            fontWeight:"bold",
            marginBottom:"15px",
            marginTop:"15px",
            padding:"10px 25px 10px 25px",
            backgroundColor:"skyblue"
        }} onClick={SubmitFunc}>Submit</button></div>
        </div>

    )
}
export default CartContainer

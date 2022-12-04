import LabelPrice from './LabelPrice'
import Quantity from './Quantitiy'
function CartIteam({
    label,
    price,
    qty,
    id,
    handleChangqty
}) {
    return(
        
        <div style={{
            display:"flex",
            gap:"3rem",
            padding:"1rem",
            justifyContent: "center",
            alignItems: "center",
            border:"1px solid red",
            
        }}>
            <LabelPrice label={label} price={price}/>

            <Quantity 
             qty={qty} 
             incrementCount={()=>handleChangqty(id,1)}
            decrementCount={()=>handleChangqty(id,-1)} 
            
            />

     </div>
    )

}

export default CartIteam
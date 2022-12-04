
function Quantity({
    qty,
    decrementCount,
    incrementCount,

}){


    return (

<div style={{
display:"flex",
gap:"10px",
}}>

<Button disabled={qty===0} onClick={decrementCount}>-</Button>
<div><h3>{qty}</h3></div>
<Button onClick={incrementCount}>+</Button>

</div>
    )
    
}


function Button({
    onClick,
children,
disabled
}) {
    
return (
    <button style={{
        display:"flex",
        gap:"10px",
        padding:"1rem",
        backgroundColor:"tomato",
        border:0,
        fontSize:"22px",
        justifyContent:"center",
        
    }} disabled={disabled} onClick={onClick}>
{children}
    </button>
)}


export default Quantity
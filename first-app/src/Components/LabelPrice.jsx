function LabelPrice({
    label,
    price
}) {
    return (
<div style={{
display:"flex",
gap:"10px",
fontSize:"20px",
fontWeight:"bold"

}}>

    <div>{label}</div>
    <div>₹ {price}</div>
 
</div>
    )
}
export default LabelPrice
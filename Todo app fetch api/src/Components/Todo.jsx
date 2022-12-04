import { useEffect, useState } from "react"



function Todo() {

    const [data , setData]=useState([]);
    const [page, setPages]=useState(1)
    const [load , setLoad]=useState(false)
    const getData = async (p=1)=>{
        try {
            setLoad(true)
            let res= await fetch(`https://jsonplaceholder.typicode.com/todos?&_page=${p}&_limit=10`)
            let data =await res.json();
            console.log(data);
            setData(data)
           setLoad(false)

        } catch (error) {
            console.log("errrrr");
            setLoad(false)
        }

    }
    useEffect(()=>{
        getData(page)
    },[page])

    return(
        <>
        <div>
<h1>Todo App</h1>
{/* <button onClick={getData}>Fetch</button> */}

<div style={{
    borderRadius:"15px",
    width:"50%",
    margin:"auto",
    padding:"10px",
    boxShadow:"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
}}>
    {
       
        data.map(todo=>
            <div style={{
                display:"flex",
                gap:"1rem",
                margin:"0.5rem",
            }} key={todo.id}>
                <div>{todo.id}</div>
                <div>{todo.title}</div>
                <div>{todo.status?"Done":"Not Done"}</div>
               
             
            </div>
            )
           
        }

{
    <div>
        <div style={{
            width:"20%",
            margin:"auto"
        }}>{load && <img style={{
            width:"100%"
        }} src="https://solwincdn-79e1.kxcdn.com/wp-content/uploads/2020/07/Website-Loading-gif..gif" />}</div>

        <button disabled={page === 1} onClick={() => setPages(page => page - 1)}>Prev</button>
    <span style={{
        padding:"1rem",
    }}>{page}</span>
     <button disabled={page===20} onClick={() => setPages(page => page + 1)}>Next</button>
</div>
}
          
                
</div>
        </div>
    </>
    )

}
export default Todo
import { Route, Routes } from "react-router-dom"
import HomePage from "."
import Dashboard from "./dashboard"

const AllRoute =()=>{
    return (
        <div>
<Routes>
    
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard" element={<Dashboard />} />
</Routes>
        </div>

    )
}
export default AllRoute
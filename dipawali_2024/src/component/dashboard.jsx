import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" }; // Default to "Guest" if no name is provided

  return (
    <div className=" dashboardBgContainer min-h-screen flex items-center justify-center bg">
      
    <div className=" flex items-center justify-center h-screen px-4 sm:px-8 md:px-12 lg:px-16  lg:-mt-52 sm: -mt-48 md: -mt-36  w-11/12 md:9/12 sm:3/6  font-[cursive]">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-cyan-500 rounded-2xl py-4 px-2 w-full sm:w-2/3 neon-glow-dashboard hover:neon-glow-dashboard border-double border-4  font-[cursive] text-white custom-text-shadow "> {name} की तरफ से आप सभी को दिवाली की हार्दिक शुभकामनाएँ </h1>
    </div>
    </div>
  );
};

export default Dashboard;

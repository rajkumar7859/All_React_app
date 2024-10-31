import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import creator_logo from "./Rajkumar_logo.png"

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [buttonText, setButtonText] = useState("Aage Bado Parth 👉");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      setButtonText("Pahle Upper 👆 apna naam likho Parth 🤦‍♂️");
    } else {
      navigate('/dashboard', { state: { name: inputValue } });
    }
  };

  return (
    <div className="mainContainer" >
           
    <div className="flex flex-col items-center justify-center h-screen bg">
    <div >
    <img src={creator_logo} alt="creator_logo" className="w-16 " /> 
    </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
        
          type="text"
          name="name"
          value={inputValue}
          placeholder="Apna naam likho Parth"
          onChange={(e) => {
            setInputValue(e.target.value);
            if (e.target.value.trim() !== '') {
              setButtonText("Aage Bado Parth 👉"); // Reset button text when input is filled
            }
          }}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-[cursive] neon-glow-input"
        />
        <button
          type="submit"
          className="w-2/3 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none font-[cursive] border-double border-4 font-bold neon-glow-button custom-text-shadow"
        >
          {buttonText}
        </button>
      </form>
    </div>
    </div>
  );
};

export default HomePage;

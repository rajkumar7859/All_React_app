import { useContext, useState } from "react";
import { ThemeContextProvider } from "../Context/ThemeContext";
import AllDetails from "./AllDetails";
import { Data } from "./UserData";
import "../styles.css";

function UserProfile() {
  const [followst, setFollow] = useState("Follow");

  const { isTheme, handleMode } = useContext(ThemeContextProvider);

  const handleFollow = () => {
    for (let i = 0; i < followst.length; i++) {
      if (followst === "Following") {
        setFollow("Follow");
      } else {
        setFollow("Following");
      }
    }
  };
  return (
    <div style={{overflow:"scroll" , overflowX:"hidden"}}>
      <button onClick={handleMode}>Mode {isTheme ? "Dark" : "Light"}</button>
      {Data?.map((item) => (
        <AllDetails
          key={item.id}
          handleFollow={handleFollow}
          title={item.title}
          image={item.userImage}
          name={item.userName}
          follow={item.setFollow}
          icon={item.skill}
          status={followst}
        />
      ))}
    </div>
  );
}
export default UserProfile;

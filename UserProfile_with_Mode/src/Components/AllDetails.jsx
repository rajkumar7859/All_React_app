import { useContext } from "react";
import { ThemeContextProvider } from "../Context/ThemeContext";

function AllDetails({ icon, title, image, name, handleFollow, status }) {
  const { isTheme } = useContext(ThemeContextProvider);

  return (
    <div
      className={isTheme ? "light" : "dark"}
      style={{
      
        marginBottom: "20px",
        padding: "30px 20px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "260px",
          width: "100%"
        }}
      >
        <h3>
          {name} <button onClick={handleFollow}>{status}</button>
        </h3>
        <img
          style={{
            width: "18%",
            borderRadius: "50%",
            height: "158px",
            marginTop: "-10px",
            marginLeft: "368px"
          }}
          src={image}
          alt="profile"
        />
      </div>
      <div
        style={{
          marginTop: "-221px;",
          width: "200px",
          marginTop: "-200px",
          fontSize: "18px"
        }}
      >
        <p style={{}}>{title}</p>
      </div>
      <div style={{ width: "75%" }}>
        {icon?.map((item) => (
          <div
            style={{
              display: "flex",
              fontSize: "10px",
              height: "20px",
              gap: "10px",
              alignItems: "center"
            }}
            key={item.icon}
          >
            <div
              style={{
                border: "1px solid #c5c0c0",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                width: "120%",
                height: "25px",
                padding: "10px"
              }}
            >
              <img
                style={{ width: "20px", height: "17px" }}
                src={item.icon[0]}
                alt="React icon"
              />
              <span style={{ marginTop: "3px" }}>{item.discription[0]}</span>
            </div>

            <div
              style={{
                border: "1px solid #c5c0c0",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                width: "120%",
                height: "25px",
                padding: "10px"
              }}
            >
              <img
                style={{ width: "20px", height: "17px" }}
                src={item.icon[1]}
                alt="React icon"
              />
              <span style={{ marginTop: "3px" }}>{item.discription[1]}</span>
            </div>

            <div
              style={{
                border: "1px solid #c5c0c0",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                width: "120%",
                height: "25px",
                padding: "10px"
              }}
            >
              <img
                style={{ width: "20px", height: "17px" }}
                src={item.icon[2]}
                alt="React icon"
              />
              <span>{item.discription[2]}</span>
            </div>

            <div
              style={{
                border: "1px solid #c5c0c0",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                width: "120%",
                height: "25px",
                padding: "10px"
              }}
            >
              <img
                style={{ width: "20px", height: "17px" }}
                src={item.icon[3]}
                alt="React icon"
              />
              <span style={{ marginTop: "3px" }}>{item.discription[3]}</span>
            </div>

            <div
              style={{
                border: "1px solid #c5c0c0",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                width: "120%",
                height: "25px",
                padding: "10px"
              }}
            >
              <img
                style={{ width: "20px", height: "17px" }}
                src={item.icon[4]}
                alt="React icon"
              />
              <span style={{ marginTop: "3px" }}>{item.discription[4]}</span>
            </div>

            <div
              style={{
                border: "1px solid #c5c0c0",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                width: "120%",
                height: "25px",
                padding: "10px"
              }}
            >
              <img
                style={{ width: "20px", height: "17px" }}
                src={item.icon[5]}
                alt="React icon"
              />
              <span style={{ marginTop: "3px" }}>{item.discription[5]}</span>
            </div>

            <div
              style={{
                border: "1px solid #c5c0c0",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                width: "120%",
                height: "25px",
                padding: "10px"
              }}
            >
              <img
                style={{ width: "20px", height: "17px" }}
                src={item.icon[6]}
                alt="React icon"
              />
              <span style={{ marginTop: "3px" }}>{item.discription[6]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AllDetails;

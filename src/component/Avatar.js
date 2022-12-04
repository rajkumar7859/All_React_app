import "../styles.css";
import React from "react";
import ListIteam from "./skills";

export default function Avater(props) {
  const {
    name = "Name",
    avatar_url = "https://i.pinimg.com/originals/a9/83/38/a98338cc4b7cca6027b1fffccb5dd4d2.png",
    title = "title",
    skillsets = []
  } = props;

  const [newText, setNewText] = React.useState("Follow");

  let buttonText = () => {
    setNewText("Following");
    if (newText === "Following") {
      setNewText("Follow");
    }
  };

  return (
    <div className="App">
      <div className="detailsDiv">
        <h1>
          {name}{" "}
          <button className="followButton" onClick={buttonText}>
            {newText}
          </button>
        </h1>
        <p className="titleTag">{title}</p>

        <div className="skillSet">
          {skillsets.map((list) => (
            <ListIteam newTitle={list} />
          ))}
        </div>
      </div>
      <div className="ImageDiv">
        <img src={avatar_url} />
      </div>
    </div>
  );
}

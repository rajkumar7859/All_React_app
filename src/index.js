import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Avatar from "./component/Avatar";

function App() {
  return (
    <div>
      <Avatar
        name="Bhagat Singh"
        avatar_url="https://i.pinimg.com/originals/a9/83/38/a98338cc4b7cca6027b1fffccb5dd4d2.png"
        title="Freedom Fighter"
        skillsets={[
          "writer",
          "fearless",
          "Leadership",
          "Sharp shooter",
          "strong physics",
          "co-operation nature"
        ]}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { useState } from "react";
import Presentation from "./components/body/Presentation";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/body/Menu";

export default function App() {
  const [menuShowed, setMenuShowed] = useState(false);
  const onMenuClicked = () => {
    setMenuShowed(!menuShowed);
    console.log(menuShowed);
  };
  return (
    <html>
      <head></head>
      <body>
        <Navbar onMenuClicked={onMenuClicked} onMenu={menuShowed} />
        {menuShowed ? <Presentation /> : <Menu />}
      </body>
    </html>
  );
}

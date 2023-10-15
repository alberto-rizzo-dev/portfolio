import { useState } from "react";
import Presentation from "./components/body/Presentation";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/navbar/Menu";

export default function App() {
  const [menuShowed, setMenuShowed] = useState(false);
  const onMenuClicked = () => {
    setMenuShowed(!menuShowed);
    console.log(menuShowed);
  };
  return (
    <html>
      <head></head>
      <body className="bg-slate-100 ">
        <Navbar onMenuClicked={onMenuClicked} onMenu={menuShowed} />
        {!menuShowed ? <Presentation /> : <Menu />}
      </body>
    </html>
  );
}

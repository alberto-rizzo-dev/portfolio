import Skill from "./Skill";

function Presentation() {
  return (
    <div className="h-screen">
      <div className="flex h-4/5 pt-20 justify-center items-center">
        <div className="p-16">
          <img
            className="w-96 h-96 rounded-full"
            src="./src/assets/faccia.jpg"
          />
        </div>
        <div className="group p-10 z-10 w-2/5 rounded-xl hover:shadow-xl hover:scale-110 transition duration-200">
          <h1 className="text-gray-700 font-extrabold text-4xl">
            Ciao Sono Alberto Un Pazzo Furioso
          </h1>
          <p className="text-xl text-gray-500 pt-4">
            sono pazzo matto furioso non ci sto con la testa devono rinchiudermi
            questa è la descrizione della mia vita sono troppo mattissimo...
          </p>
          <div className="items-center hidden group-hover:block">
            <p className="text-xl text-gray-500 pt-4">
              descrizione completa della mia vita completa scuola cose ciao
              ciaoefnewfbjk bqw ljkf np.std() descrizione completa della mia
            </p>
            <a href="https://github.com/alberto-rizzo-dev/">
              <img
                src="./src/assets/git.svg"
                className="h-10 pt-2 inline hover:scale-110 transition duration-500 cursor-pointer"
              />
            </a>
            <a href="https://github.com/alberto-rizzo-dev/">
              <img
                src="./src/assets/linkedin.png"
                className="h-11 pt-3 pl-4 inline hover:scale-110 transition duration-500 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-1/5 items-center justify-center">
        <p className="text-slate-700 text-xl text-center p-4"> My Skills : </p>
        <Skill source={"./src/assets/html.svg"}></Skill>
        <Skill source={"./src/assets/css.svg"}></Skill>
        <Skill source={"./src/assets/js.svg"}></Skill>
        <Skill source={"./src/assets/ts.svg"}></Skill>
        <Skill source={"./src/assets/react.svg"}></Skill>
        <p className="text-slate-700 text-xl text-center p-4"> | </p>
        <Skill source={"./src/assets/flutter.svg"}></Skill>
        <Skill source={"./src/assets/dart.svg"}></Skill>
        <p className="text-slate-700 text-xl text-center p-4"> | </p>
        <Skill source={"./src/assets/c.svg"}></Skill>
        <Skill source={"./src/assets/qt.svg"}></Skill>
        <p className="text-slate-700 text-xl text-center p-4"> | </p>
        <Skill source={"./src/assets/firebase.svg"}></Skill>
        <Skill source={"./src/assets/sql.svg"}></Skill>
      </div>
    </div>
  );
}

export default Presentation;

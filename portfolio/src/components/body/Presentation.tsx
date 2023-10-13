function Presentation() {
  return (
    <>
      <div className="flex h-96  pt-20  justify-center items-center">
        <img
          className="w-80 h-80 rounded-full hover:scale-110 transition duration-500 cursor-pointer"
          src="./src/assets/faccia.jpg"
        />
        <div className=" pl-20 w-2/5 pt-10">
          <h1 className="text-gray-700 font-extrabold text-4xl">
            Ciao Sono Alberto Un Pazzo Furioso
          </h1>
          <p className="text-xl text-gray-500 pt-4">
            sono pazzo matto furioso non ci sto con la testa devono rinchiudermi
            questa è la descrizione della mia vita sono troppo mattissimo
          </p>
          <div className="items-center">
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
    </>
  );
}

export default Presentation;

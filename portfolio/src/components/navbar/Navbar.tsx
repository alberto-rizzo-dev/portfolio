import GoToButton from "./GoToButton";

interface Props {
  onMenu: boolean;
  onMenuClicked: () => void;
}

function Navbar({ onMenuClicked, onMenu }: Props) {
  return (
    <div className="bg-white p-4 border-b  shadow-md">
      <button>
        <img src="./src/assets/logo.svg" className="inline h-10 " />
        <p className="subpixel-antialiased font-semibold inline pl-4 text-gray-800">
          Alberto-Rizzo.dev
        </p>
      </button>
      <div className="inline float-right items-center pr-4 hover:scale-110 transition duration-500 cursor-pointer">
        <GoToButton text={"Home"} href={""}></GoToButton>
        <GoToButton text={"Contact Me"} href={""}></GoToButton>
        <svg
          onClick={onMenuClicked}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10 inline sm:hidden"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d={
              onMenu
                ? "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                : "M6 18L18 6M6 6l12 12"
            }
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;

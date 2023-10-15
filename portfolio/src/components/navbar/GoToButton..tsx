export interface Props {
  text: string;
  goTo: number;
}

const goToPosition = (position: number) => {
  window.scrollTo({ top: position, behavior: "smooth" });
};

function GoToButton({ text, goTo }: Props) {
  return (
    <p
      onClick={() => {
        goToPosition(goTo);
      }}
      className="text-xl hover:text-orange-700  pb-2 pt-2 pr-20 font-semibold text-gray-700  text-center hidden lg:inline cursor-pointer" //non va bene
    >
      {text}
    </p>
  );
}

export default GoToButton;

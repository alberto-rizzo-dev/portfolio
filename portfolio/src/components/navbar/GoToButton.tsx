interface Props {
  text: string;
  href: string;
}

function GoToButton({ text, href }: Props) {
  return (
    <a href={href} className="text-bold text-xl hover:text-orange-700">
      {text}
    </a>
  );
}

export default GoToButton;

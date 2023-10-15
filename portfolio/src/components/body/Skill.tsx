interface Props {
  source: string;
}

function Skill({ source }: Props) {
  return (
    <div className="rounded-md hover:shadow-md hover:bg-slate-50 p-2 hover:scale-110 transition duration-500">
      <img src={source} className="h-10 m-2" />
    </div>
  );
}

export default Skill;

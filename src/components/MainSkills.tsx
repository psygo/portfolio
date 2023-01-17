import Image from "next/image";

const MainSkills: React.FC<{ iconName: string; legend: string }> = ({
  iconName,
  legend,
}) => {
  return (
    <div className="grid grid-rows-[90px_20px] justify-center">
      <Image src={`/${iconName}-icon.svg`} alt="Flutter" width={80} height={80} />
      <p className="text-md py-2 text-gray-800">{legend}</p>
    </div>
  );
};

export default MainSkills;

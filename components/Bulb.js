import Image from "next/image";

const Bulb = () => {
  return <div className="absolute -left-36 -bottom-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:[260px]">
    <Image
      src={'/bulb.png'}
      width={260}
      height={200}
      className="h-full w-full"
      alt="bulb"
    />
  </div>;
};

export default Bulb;

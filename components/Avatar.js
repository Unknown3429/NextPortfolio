import Image from "next/image";


const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src='/avatar6.png' width={720} height={710} alt="" className="translate-z-0 w-full" />
  </div>;
};

export default Avatar;

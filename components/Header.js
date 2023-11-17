import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials'

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between -mt-7 md:-mt-0 items-center pl-2 gap-y-6 py-8">
        {/* log  */}
        <Link href={'/'}>
          <Image src={'/logo1.png'} width={220} height={48} alt="" priority={true} />
        </Link>
        {/* Socials  */}
        <Socials />
      </div>
    </div>
  </header>
};

export default Header;

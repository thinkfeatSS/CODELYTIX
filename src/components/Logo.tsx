import Image from 'next/image';
const Logo = () => {
  return (
    <div>
      <Image src="/logo.png" alt="My Image" width={44} height={44}/>
    </div>

  );
};

export default Logo;

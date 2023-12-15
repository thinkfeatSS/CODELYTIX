import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-screen h-screen flex  flex-grow justify-between md:pl-20 bg-[#F2F6FB] z-50 shadow-inner shadow-black'>

    <div className="flex flex-col gap-16 lg:w-[45%] justify-center ">
      <h1 className="text-center md:text-left text-5xl font-bold leading-relaxed  px-4">
        <span className='bg-[#D0CBE6] rounded-full p-2'>Revolutionize</span> Your Software <span className='bg-[#D0CBE6] rounded-full p-2'>Engineering</span> Experience
      </h1>
      <h5 className="text-center md:text-left text-2xl font-medium ">
        Unlock the full potential of your software engineering teams with
        Codealytix.io
      </h5>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-center md:text-left text-3xl font-semibold leading-snug">

          Where Engineering Meets Analytics
        </h2>
        <button className="bg-[#93A4E8] mt-4 px-24 lg:px-48 py-4 text-2xl font-medium rounded-lg hover:drop-shadow-2xl">Get Started</button>
      </div>
    </div>
    <div className='hidden lg:flex items-end -z-10'>
      <Image src="/Background-image.svg" alt="My Image"  width={700} height={700} objectFit="cover"/> 
    </div>
    </div>
  );
};

export default Hero;

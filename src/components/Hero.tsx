import Image from 'next/image';

const Hero = () => {
  return (
    <div className=' flex h-[90vh] justify-between md:px-20 lg:px-0  lg:pl-20 bg-[#F2F6FB] z-50 shadow-inner shadow-black'>

    <div className="flex flex-col gap-2 xl:gap-16 lg:w-[60%] xl:w-[45%] justify-center ">
      <h1 className="px-4 text-center font-bold md:text-left text-5xl leading-relaxed">
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
        <button className="bg-[#93A4E8] mt-4 px-24 xl:px-48 py-4 text-2xl font-medium rounded-lg hover:drop-shadow-2xl">Get Started</button>
      </div>
    </div>
     <div className='hidden lg:flex items-end -z-10'> 
      <Image src="/Background-image.svg" alt="My Image"  width={600} height={600} objectFit="cover" className='w-full h-4/5'/> 
    </div>
    </div>
  );
};

export default Hero;

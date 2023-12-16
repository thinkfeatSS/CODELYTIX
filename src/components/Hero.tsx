import Image from 'next/image';

const Hero = () => {
  return (
    <div className=' flex flex-grow h-screen md:h-[90vh] justify-between md:px-20 lg:px-0  lg:pl-12 xl:pl-24 bg-[#F2F6FB] z-50 shadow-inner shadow-black'>

    <div className="flex lg:flex-1 flex-col gap-8 xl:gap-16 lg:w-[60%] xl:w-[45%] justify-center ">
      <h1 className="text-center font-bold md:text-left text-3xl leading-loose lg:text-4xl lg:leading-loose">
        <span className='bg-[#D0CBE6] rounded-full p-2'>Revolutionize</span> Your Software <span className='bg-[#D0CBE6] rounded-full p-2'>Engineering</span> Experience
      </h1>
      <h5 className="text-center md:text-left md:text-lg lg:text-xl font-medium ">
        Unlock the full potential of your software engineering teams with
        Codealytix.io
      </h5>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-center md:text-left md:text-xl md:w-80 lg:text-2xl font-semibold leading-snug">

          Where Engineering Meets Analytics
        </h2>
        <button className="bg-[#93A4E8] mt-4 px-20 md:px-32 xl:px-44 py-4 text-2xl font-medium rounded-lg hover:drop-shadow-2xl">Get Started</button>
      </div>
    </div>
     <div className='hidden lg:flex lg:flex-1 md:w-2/3 w-full items-end justify-end -z-10'> 
      <Image src="/Background-image.png" alt="My Image"  width={600} height={600} objectFit="cover" className='w-[100%] h-[80%]'/> 
    </div>
    </div>
  );
};

export default Hero;

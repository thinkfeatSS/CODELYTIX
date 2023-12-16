import Logo from "@/components/Logo";

const NavBar = () => {
  return (
    <>
    <section className="flex flex-col gap-4  justify-center md:flex-row w-screen md:h-[10vh] items-center md:justify-between z-20 md:px-8">
      <div className="flex flex-row gap-3 items-center">
        <Logo />
        <h3 className="text-2xl font-black">CODELYTIX</h3>
      </div>
      <div className="flex flex-row gap-16 text-center">
        <h3  className="text-2xl font-semibold">Help and support</h3>
        <h3 className="text-2xl font-semibold">Why Codelytix</h3>
      </div>
    </section>
    </>
  );
};

export default NavBar;

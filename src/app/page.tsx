import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <NavBar/>
      <Hero />
    </main>
  );
}

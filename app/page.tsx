import HeroSection from "@/app/sections/main_page/HeroSection";
import Image from "next/image";
import CoctailSliders from "./sections/main_page/CoctailSliders";
import AboutUsSection from "./sections/main_page/AboutUsSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <CoctailSliders />
      <AboutUsSection/>
    </>
  );
}

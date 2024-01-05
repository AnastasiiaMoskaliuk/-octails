import Image from 'next/image';
import HeroSection from '../sections/main_page/HeroSection';
import CoctailCards from '../sections/main_page/CoctailCards';

export default function Home() {
  return (
    <div >
      <HeroSection />
      <CoctailCards />
    </div>
  )
}

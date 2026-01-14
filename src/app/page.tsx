import { Navigation, Footer } from "@/components/layout";
import {
  Hero,
  About,
  WorkProducts,
  WorkExperience,
  Research,
  Skills,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <WorkProducts />
        <WorkExperience />
        <Research />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

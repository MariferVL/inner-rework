import { getDictionary } from "@/lib/get-dictionary";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


export default async function Home({ params }) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <HeroSection dictionary={dictionary} lang={lang} />
      <AboutSection dictionary={dictionary} />
      <ContactSection dictionary={dictionary} />
      <Footer dictionary={dictionary} />
    </>
  );
}

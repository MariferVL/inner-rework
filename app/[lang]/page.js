import { getDictionary } from "@/lib/get-dictionary";
import HeroSection from "@/components/HeroSection";

export default async function Home({ params }) {
  const lang = (await params).lang; 
  const dictionary = await getDictionary(lang);

  return (
    <HeroSection dictionary={dictionary} lang={lang} />
  );
}
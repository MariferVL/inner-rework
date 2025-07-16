import Image from "next/image";
import { getDictionary } from '@/lib/get-dictionary';

export default async function Home({ lang }) {
  const dictionary = await getDictionary(lang);

}
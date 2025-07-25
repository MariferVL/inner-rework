import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import NavigationMenu from "./NavigationMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default async function Header({ lang }) {
  const dictionary = await getDictionary(lang);

  return (
    <header className="fixed top-0 left-0 w-full z-30">
      <nav className="p-4 md:px-8 relative">
        <div className="container mx-auto flex items-center justify-between">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0">
            <Link href={`/${lang}`}>
              <Image
                src="/images/logo.gif"
                alt={dictionary.nav.logoAlt}
                width={80}
                height={80}
                className="rounded-full w-16 h-16 md:w-20 md:h-20"
              />
            </Link>
          </div>
          <NavigationMenu dictionary={dictionary} lang={lang} />
          <LanguageSwitcher lang={lang} />
        </div>
      </nav>
    </header>
  );
}

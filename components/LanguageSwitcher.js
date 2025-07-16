'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Este estado ahora controla de verdad la posición del interruptor
  const [isChecked, setIsChecked] = useState(false);

  // Este efecto establece la posición inicial del interruptor cuando la página carga
  useEffect(() => {
    const langFromUrl = pathname.split('/')[1];
    setIsChecked(langFromUrl === 'en');
  }, [pathname]);

  const handleLanguageChange = (e) => {
    const newCheckedState = e.target.checked;


    setIsChecked(newCheckedState);

    const newLocale = newCheckedState ? 'en' : 'es';
    const newPath = `/${newLocale}${pathname.substring(3) || '/'}`;
    router.push(newPath);
  };

  return (
    <div className="absolute top-5 right-5 z-[1000] flex items-center text-white text-sm">
      <span>Esp</span>
      <label className="bb8-toggle mx-2">
        <input
          id="language-toggle"
          className="bb8-toggle__checkbox"
          type="checkbox"
          onChange={handleLanguageChange}
          checked={isChecked} 
        />
        <div className="bb8-toggle__container">
          <div className="bb8">
            <div className="bb8__head-container">
              <div className="bb8__antenna"></div>
              <div className="bb8__antenna"></div>
              <div className="bb8__head"></div>
            </div>
            <div className="bb8__body"></div>
          </div>
          <div className="artificial__hidden">
            <div className="bb8__shadow"></div>
          </div>
        </div>
      </label>
      <span>Eng</span>
    </div>
  );
}
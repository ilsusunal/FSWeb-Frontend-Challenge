import React, { useContext } from 'react';
import { LangChangeContext } from '../contexts/LangChangeContext';

const LanguageToggle = () => {
  const { language, changeLanguage } = useContext(LangChangeContext);

  const handleLanguageToggle = () => {
    if (language === 'en') {
      changeLanguage('tr');
    } else {
      changeLanguage('en');
    }
  };

  return (
    <button onClick={handleLanguageToggle} tabIndex="0" aria-label={language === 'en' ? "Türkçe'ye geçmek için tıklayın" : 'Click to switch to English'}>
      {language === 'en' ? 
        <span className='text-sm font-semibold text-gri2 dark:text-white'><span className="first:text-pink2">TÜRKÇE</span> 'YE GEÇ</span> : 
          <span className='text-sm font-semibold text-gri2 dark:text-white'>SWITCH TO<span className="text-pink2"> ENGLISH</span></span>}
    </button>
  );
};

export default LanguageToggle;

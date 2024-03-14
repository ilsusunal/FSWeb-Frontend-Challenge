import React, { useContext } from 'react';
import { LangChangeContext } from '../contexts/LangChangeContext';
import { useTheme } from "../contexts/DarkModeContext";

const LanguageToggle = () => {
  const { language, changeLanguage } = useContext(LangChangeContext);
  const { theme, toggleTheme } = useTheme();

  const handleLanguageToggle = () => {
    if (language === 'en') {
      changeLanguage('tr');
    } else {
      changeLanguage('en');
    }
  };

  return (
    <button onClick={handleLanguageToggle} >
      {language === 'en' ? 
        <span className='text-sm font-semibold text-gri2 dark:text-white'><span className="first:text-pink2">TÜRKÇE</span> 'YE GEÇ</span> : 
          <span className='text-sm font-semibold text-gri2 dark:text-white'>SWITCH TO<span className="text-pink2"> ENGLISH</span></span>}
    </button>
  );
};

export default LanguageToggle;

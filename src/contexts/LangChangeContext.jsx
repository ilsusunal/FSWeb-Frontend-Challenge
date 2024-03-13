import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';

const LangChangeContext = createContext();

const LangProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage('language', 'en');
    const [translations, setTranslations] = useState({});
    const [loading, setLoading] = useState(true); // Sayfanın yüklenme durumu
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    // Dil dosyasını yükle
    const loadTranslations = async () => {
        try {
            const response = await axios.get('https://65f1e7c6034bdbecc763ff98.mockapi.io/api/v1/languages',{
                headers: {'content-type': 'application/json'}
            });
            const filteredData = response.data.find(item => item.id === language); // Seçilen dile göre filtreleme
            setTranslations(filteredData || {}); // Eğer dil bulunamazsa boş obje atar
            setLoading(false); // Yükleme tamamlandı
            if (isFirstLoad) {
                toast('Merhaba!');
                setIsFirstLoad(false); 
            }
        } catch (error) {
            console.error('Error fetching translations:', error);
        }
    };

    useEffect(() => {
        loadTranslations(); // Dil değiştiğinde dil dosyasını yükle
    }, [language]);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage); // Dili değiştir
    };

    // Yüklenmeyi beklerken bunu render et
    if (loading) {
        return <div>Loading...</div>;
    }

    // Yükleme tamamlandıysa, saydayı render et
    return (
        <LangChangeContext.Provider value={{ language, translations, changeLanguage }}>
            {children}
        </LangChangeContext.Provider>
    );
};

export { LangProvider, LangChangeContext };

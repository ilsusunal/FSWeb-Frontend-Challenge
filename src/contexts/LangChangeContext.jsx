import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LangChangeContext = createContext();

const LangProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage('language', 'en');
    const [translations, setTranslations] = useState({});
    const [loading, setLoading] = useState(true); // Sayfanın yüklenme durumu

    // Dil dosyasını yükle
    const loadTranslations = async () => {
        try {
            const response = await axios.get('https://65f1e7c6034bdbecc763ff98.mockapi.io/api/v1/languages',{
                headers: {'content-type': 'application/json'}
            });
            const filteredData = response.data.find(item => item.id === language); // Seçilen dile göre filtreleme
            setTranslations(filteredData || {}); // Eğer dil bulunamazsa boş obje atar
            setLoading(false); // Yükleme tamamlandı
        } catch (error) {
            console.error('Error fetching translations:', error);
            // Hata durumunda uygun şekilde ele al
        }
    };

    useEffect(() => {
        loadTranslations(); // Dil değiştiğinde dil dosyasını yükle
    }, [language]);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage); // Yeni dili yükleme işlemi
    };

    // Yüklenme durumunu kontrol et, eğer yükleme tamamlanmadıysa yüklenmeyi bekle
    if (loading) {
        return <div>Loading...</div>;
    }

    // Yükleme tamamlandıysa, dil sağlanarak çocuk bileşenler render edilir
    return (
        <LangChangeContext.Provider value={{ language, translations, changeLanguage }}>
            {children}
        </LangChangeContext.Provider>
    );
};

export { LangProvider, LangChangeContext };

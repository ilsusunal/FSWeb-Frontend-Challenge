import { useState, useEffect } from 'react';
import scrollUp from "../assets/scrollUp.png";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Sayfa yüklendiğinde ve kullanıcı scroll yaptığında buton görünecek
    useEffect(() => {
        const toggleVisibility = () => {
            const scrolledToTop = window.scrollY > 100;
        
            if (scrolledToTop ) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Sayfayı en üste kaydırmak için bir fonksiyon oluşturun
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed right-4 bottom-4 z-10 ">
            {isVisible && (
                <button
                className={`scroll-smooth hover:animate-bounce right-2 bottom-2 sm:right-4 sm:bottom-4 z-10  w-12 h-12 sm:w-24 sm:h-24`}
                    onClick={scrollToTop}
                >
                  <img src={scrollUp}  alt="ScrollButton" /> 
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;

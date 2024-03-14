import LanguageToggle from "./LanguageToggle";
import { useTheme } from "../contexts/DarkModeContext";
import { useContext } from "react";
import { LangChangeContext } from "../contexts/LangChangeContext";
import RadioComponent from "./RadioComponent";

export default function Header (){
    const { theme, toggleTheme } = useTheme();
    console.log("Dark-mode check:", theme);

    const { language } = useContext(LangChangeContext);
    return(
        <>
        <header className="flex justify-end items-center px-10 pb-8 pt-20 md:px-60" >
            <RadioComponent/>
                <span className="min-w-18 md:min-w-20 ms-3 text-sm font-semibold text-gri2 dark:text-white">
                {theme === "dark" && language === "tr" ? "GÜNDÜZ" :
                theme === "dark" && language === "en" ? "LIGHT MODE" :
                theme !== "dark" && language === "tr" ? "GECE" :
                "DARK MODE"}
                </span>
            <p className="px-4"> | </p>
            <LanguageToggle/>
        </header>
        </>
    )
}
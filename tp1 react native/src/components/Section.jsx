import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Section = ({ children }) => {
    const { darkTheme } = useContext(ThemeContext)

    return (

        <>
            <section className={`flex flex-col justify-center items-center border-2 space-y-2 p-5 m-10  rounded-md ${darkTheme ? "border-white bg-slate-400" : "border-black bg-blue-300"}`}>
                {children}
            </section>
        </>
    )
}



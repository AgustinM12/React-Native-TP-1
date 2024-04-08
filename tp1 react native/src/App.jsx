import { Counter } from "./components/countReducer";
import { ThemeButtom } from "./components/ThemeButtom";
import { FetchButtom } from "./components/FetchButtom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <h1 className="font-bold text-center bg-blue-300 py-2">App Hooks</h1>
                <div className={`flex-grow mx-auto min-w-full ${darkTheme ? "bg-slate-500" : "bg-slate-200"}`}>

                    <ThemeButtom />
                    <FetchButtom />
                    <Counter />
                </div>

            </div>
        </>
    )
}

export default App

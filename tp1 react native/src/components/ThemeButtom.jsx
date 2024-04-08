import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeButtom = () => {

  const { darkTheme, toggleTheme } = useContext(ThemeContext)


  return (
    <section className=" bg-slate-400 border-2 rounded-md m-10 p-4 text-center space-y-2">

      <h2 className="font-bold underline animate-pulse">useContext Section</h2>

      <button className={darkTheme ? `text-indigo-600 border-2 border-indigo-600 rounded-full p-1 focus:ring-2 focus:ring-indigo-200 transition-colors hover:bg-indigo-200` :

        `text-yellow-500 border-2 border-yellow-500 rounded-full p-1 focus:ring-2 focus:ring-yellow-200 transition-colors hover:bg-yellow-100`}

        onClick={toggleTheme}
      >

        {
          darkTheme ? (< svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>) :
            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>)
        }
      </button>
    </section>
  )
}

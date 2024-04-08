import { Counter } from "./reducer/countReducer";

import { ThemeButtom } from "./components/ThemeButtom";

const App = () => {

    return (
        <>
            <div className="min-h-screen min-w-full bg-slate-500">

                <h1 className="font-bold text-center bg-blue-300">App Hooks</h1>

                <ThemeButtom />

                <Counter />
            </div>
        </>
    )
}

export default App

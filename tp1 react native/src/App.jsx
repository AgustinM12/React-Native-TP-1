import { Counter } from "./reducer/countReducer";

const App = () => {
    return (
        <>
            <div className="min-h-screen min-w-full bg-slate-500">

                <h1 className="font-bold text-center bg-blue-300">App Contador</h1>


                <Counter />
            </div>
        </>
    )
}

export default App

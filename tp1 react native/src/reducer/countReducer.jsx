import { useReducer } from "react";
import { Buttom } from "../components/Buttom";

const initialState = {
    count: 0
}

const countReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return { count: 0 }
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(countReducer, initialState)

    return (
        <section className="flex flex-col justify-center items-center border-2 border-white space-y-4 p-10 m-10 bg-slate-400 rounded-md">

            <h2 className="text-center font-bold underline animate-pulse">useReducer Section</h2>

            <h3 className="text-center font-bold">Contador: {state.count}</h3>

            <Buttom text="Incrementar +" action={() => dispatch({ type: 'increment' })} />
            <Buttom text="Decrementar -" action={() => dispatch({ type: 'decrement' })} />
            <Buttom text="Resetear" action={() => dispatch({ type: 'reset' })} />

        </section>
    )
}
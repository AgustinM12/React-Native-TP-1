import { useReducer } from "react";

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
        <div className="flex flex-col justify-center items-center border-2 border-white space-y-4 p-10 m-10 bg-slate-400 rounded-md">

            <h2 className="text-center font-bold">Contador: {state.count}</h2>

            <button className="p-2 rounded-md bg-blue-500 text-white w-64" 
            onClick={() => dispatch({ type: 'increment' })}>Incrementar +</button>
            
            <button className="p-2 rounded-md bg-blue-500 text-white w-64"
            onClick={() => dispatch({ type: 'decrement' })}>Decrementar -</button>
            
            <button className="p-2 rounded-md bg-blue-500 text-white w-64"
            onClick={() => dispatch({ type: 'reset' })}>Resetear </button>
        </div>
    )
}
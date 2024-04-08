import { useFetch } from "../hooks/useFetch"
import dice from "../assets/dice.png"
import { charaList } from "../data/charaList"
import { useState } from "react"
import { Section } from "./Section"

export const FetchButtom = () => {

    const [chara, setChara] = useState(null)

    const randomChara = () => {
        const azar = Math.floor(Math.random() * charaList.length);
        setChara(azar)
    }

    const { data } = useFetch({ hero_key: charaList[chara] });

    return (
        <Section>
            <h2 className='font-bold text-center underline animate-pulse'>useEffect - useState section</h2>

            <div className="flex py-2">
                <button className="bg-blue-500 rounded-md p-1 focus:ring-2 focus:ring-slate-200 hover:bg-blue-400 hover:text-slate-200" onClick={() => randomChara()}>
                    <img src={dice} alt="dice" width={50} height={50} className="hover: animate-spin" />
                </button>
            </div>

            <div className={`${chara == null && "hidden"}`}>
                <h3 className="font-semibold text-slate-600 mb-2"><span className="underline">Nombre:</span> {data.name}</h3>

                <div className="flex gap-5">
                    <img src={data.portrait} alt={data.name} className="border-white border-2 rounded-md" />

                    <div>
                        <p className="text-slate-600 font-semibold"><span className="underline">Descripcion:</span> {data.description}</p>
                        <p className="text-slate-600 font-semibold"><span className="underline">Rol:</span> {data.role}</p>
                        <p className="text-slate-600 font-semibold"><span className="underline">Locación:</span> {data.location}</p>
                    </div>
                </div>
            </div>
        </Section>


    )
}

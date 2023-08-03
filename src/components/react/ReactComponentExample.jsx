import { useState } from "react";
import { useEffect } from "react";

export default function ReactComponentExample() {
    const [data, setData] = useState(true);
    console.log(data);

    useEffect(() => console.log("UseEffect"), []);
    return (
        <div className="containe grid ">
            <h1 className="text-3xl">Componente de react de ejemplo</h1>
            {data && "Cambia State"}
            <button onClick={() => setData(!data)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cambiar estado</button>
        </div>
    );
}

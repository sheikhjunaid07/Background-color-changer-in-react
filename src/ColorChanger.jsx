import { useState } from "react";

function ColorChanger() {
    const [color, setColor] = useState("aqua");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
              onClick={()=> setColor("red")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
            >Red</button>

            <button
              onClick={()=> setColor("green")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}
            >Green</button>

            <button
              onClick={()=> setColor("grey")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "grey" }}
            >Grey</button>

            <button
              onClick={()=>setColor("aqua")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "aqua" }}
            >Aqua</button>

            <button
              onClick={()=>setColor("purple")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "purple" }}
            >Purple</button>

            <button
              onClick={()=>setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >Yellow</button>

            <button
              onClick={()=>setColor("black")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "black" }}
            >Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ColorChanger

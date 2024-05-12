import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200 " style = {{backgroundColor : color}}>

      <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">

          <button onClick = {() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "red"}}>
            Red
          </button>
        
          <button onClick = {() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "black"}}>
            Black
          </button>

          <button onClick = {() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "blue"}}>
            Blue
          </button>

        </div>
      </div>
    </div>
      
    </>
  )
}

export default App

 /* ye onclick jo h ise ek function chahiye hota hai toh isliye humne callback function pass kiya jo ki setColor ko call kr rha hoga . humne direct setcolor function pass kiya toh hum usme parameters pass nhi kr paenge aur agar humne arguments pass kiye toh wo ek syntax error hoga kyuki arguments pass kiya hua function chlega aur ek returned value dega jo ki ek functio nhi hoga. */ 
import { useState } from "react"

export default function CreateTodo(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div className="flex flex-col justify-center items-center h-64 ">
            <h1 className="mb-9 font-bold text-3xl">Todo Application</h1>
            <div>
            <input className="border border-black rounded-md px-2 py-2" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"/> <br />
            <input className="border border-black rounded-md px-2 py-2 mt-2" onChange={(e) => setDescription(e.target.value)}  type="text" placeholder="description"/>
            </div>
            <div>
                <button className="mt-4 px-16 py-3 border bg-blue-600 text-white rounded-lg" onClick={() => {
                    fetch('http://localhost:3000/todo', {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description:  description
                        }),
                        headers: {
                            'Content-Type': "application/json"
                        }
                    })
                    .then(async function (res) {
                        const json = await res.json();
                        alert("Todo added", json);
                    })
                }}>Add todo</button>
            </div>
        </div>
    )
}
// import { useState, useEffect } from 'react'
// import './App.css'
// import Navbar from './camponents/Navbar'
// import { v4 as uuidv4 } from 'uuid';
// import { FaEdit } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";

// function App() {
//   const [todo, settodo] = useState("")
//   const [todos, settodos] = useState([])
//   const [showFinished, setshowFinished] = useState(false)

//   useEffect(() => {
//     let isnull =localStorage.getItem("todos")
//     if (isnull) {
//       let todos = JSON.parse(localStorage.getItem("todos"))
//       settodos(todos)
//     }
//   }, [])

//   useEffect(() => {
//     console.log("new todo is addded", todo)
//   }, [todos.todo])

//   const saveToLS = (params) => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   }

//   const handleDelete = (e, id) => {
//     let isSure = confirm("Are you sure to delete the todo")
//     // if (isSure) {
//     // }
//     let newTodos = todos.filter(item => {
//       return item.id !== id
//     });
//     settodos(newTodos)
//     console.log("deleted-",todos)
//     saveToLS()
//   }
//   const handleEdit = (e, id) => {
//     let t = todos.filter(i => i.id === id)
//     settodo(t[0].todo)

//     let newTodos = todos.filter(item => {
//       return item.id !== id
//     });
//     settodos(newTodos)
//     saveToLS()
//   }

//   const handleAdd = () => {
//     // if (todo == "") {
//     //   alert("Write the input to save in Todos list")
//     // }

//     // else {
//     // }
//     settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
//       settodo("")
//       saveToLS()
//       console.log("set-",todos)
//   }

//   const handleChange = async (e) => {
//      settodo(e.target.value)
//   }

//   const handleCheckbox = (e) => {
//     let id = e.target.name;
//     let index = todos.findIndex(item => {
//       return item.id === id;
//     })
//     let newTodos = [...todos];
//     newTodos[index].isCompleted = !newTodos[index].isCompleted
//     settodos(newTodos)
//     console.log(todos)
//     saveToLS()
//   }

//   const toggleFinished =(params) => {
//     setshowFinished(!showFinished)
//     console.log(showFinished)
//   }
//   // useEffect(() => {
//   //  console.log("rendering...")
//   // })
  
  
//   return (
//     <>
//       <Navbar />
//       <div className="mx-3 sm:container bg-violet-100 sm:w-[35%] h-[80vh] sm:mx-auto rounded-md">
//         <h1 className='text-center font-bold my-2'>itask - Manage Whatever you have to do </h1>
//         <div className="mx-2">
//           <h2 className='font-bold my-3'>Add a Todo</h2>
//           <div className="add flex sm:flex-row flex-col gap-3  h-full my-4   mx-0">
//             <input onChange={handleChange} value={todo} className='sm:w-[80%] rounded-md px-3 text-lg ' type="text" />
//             <button onClick={handleAdd} disabled={todo.length<3} className='bg-purple-800  px-4 py-1 rounded-md text-white text-center disabled:bg-violet-600'>Save</button>
//           </div>
//           <input onChange={toggleFinished} className='' type="checkbox" checked={showFinished}/>
//           <label className='mx-2 font-bold' htmlFor="show">Show Finished</label>
//           <div className='bg-slate-700 h-[1px] opacity-25 my-3 w-[90%] mx-auto '></div>
//           <h2 className='text-xl font-bold'>Your Todos</h2>
//           <div className="todos">
//             {todos.length === 0 && <div>No todos are Yet Added</div>}
//             {todos.map(item => {

//               return (showFinished || !item.isCompleted)&& 
//               <div key={item.id} className="todo flex gap-3 items-center my-3  justify-between  ">
//                 <div className="input flex w-1/2 gap-3 items-center">
//                   <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id=''/>

//                   <div className={item.isCompleted ? "line-through" : ""}>
//                     {item.todo}
//                   </div>
//                 </div>
//                 <div className="button flex gap-3">
//                   <button onClick={(e) =>  handleEdit(e, item.id) } className="edit bg-purple-800  px-4 py-1 rounded-md text-white text-center"><FaEdit/></button>
//                   <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-purple-800  px-4 py-1 rounded-md text-white text-center"><AiFillDelete/></button>
//                 </div>
//               </div>
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App






import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './camponents/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showFinished, setshowFinished] = useState(false)

  useEffect(() => {
    let isnull =localStorage.getItem("todos")
    if (isnull) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  }, [])

  useEffect(() => {
    console.log("new todo is added", todo)
  }, [todos.todo])

  const saveToLS = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const handleDelete = (e, id) => {
    let isSure = confirm("Are you sure to delete the todo")
    if (isSure) {
      let newTodos = todos.filter(item => {
        return item.id !== id
      });
      settodos(newTodos)
      console.log("deleted-",todos)
      saveToLS(newTodos)
    }
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    settodo(t[0].todo)

    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    settodos(newTodos)
    saveToLS(newTodos)
  }

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
    saveToLS([...todos, { id: uuidv4(), todo, isCompleted: false }])
    console.log("set-",todos)
  }

  const handleChange = async (e) => {
    settodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    settodos(newTodos)
    console.log(todos)
    saveToLS(newTodos)
  }

  const toggleFinished =(params) => {
    setshowFinished(!showFinished)
    console.log(showFinished)
  }
  
  return (
    <>
      <Navbar />
      <div className="mx-3 sm:container bg-violet-100 sm:w-[35%] h-[80vh] sm:mx-auto rounded-md">
        <h1 className='text-center font-bold my-2'>itask - Manage Whatever you have to do </h1>
        <div className="mx-2">
          <h2 className='font-bold my-3'>Add a Todo</h2>
          <div className="add flex sm:flex-row flex-col gap-3  h-full my-4   mx-0">
            <input onChange={handleChange} value={todo} className='sm:w-[80%] rounded-md px-3 text-lg ' type="text" />
            <button onClick={handleAdd} disabled={todo.length<3} className='bg-purple-800  px-4 py-1 rounded-md text-white text-center disabled:bg-violet-600'>Save</button>
          </div>
          <input onChange={toggleFinished} className='' type="checkbox" checked={showFinished}/>
          <label className='mx-2 font-bold' htmlFor="show">Show Finished</label>
          <div className='bg-slate-700 h-[1px] opacity-25 my-3 w-[90%] mx-auto '></div>
          <h2 className='text-xl font-bold'>Your Todos</h2>
          <div className="todos">
            {todos.length === 0 && <div>No todos are Yet Added</div>}
            {todos.map(item => {

              return (showFinished || !item.isCompleted)&& 
              <div key={item.id} className="todo flex gap-3 items-center my-3  justify-between  ">
                <div className="input flex w-1/2 gap-3 items-center">
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id=''/>
                  <div className={item.isCompleted ? "line-through" : ""}>
                    {item.todo}
                  </div>
                </div>
                <div className="button flex gap-3">
                  <button onClick={(e) =>  handleEdit(e, item.id) } className="edit bg-purple-800  px-4 py-1 rounded-md text-white text-center"><FaEdit/></button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-purple-800  px-4 py-1 rounded-md text-white text-center"><AiFillDelete/></button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

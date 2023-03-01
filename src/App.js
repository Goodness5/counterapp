// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import axios from "axios";
// import { toast } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCount = (key) => {
    // if (key === "inc") {
    //   setCount(count + 1);
    //   return;
    // } else if (key === "dec") {
    //   setCount(count - 1);
    //   return;
    // }
    return key === "inc"
      ? setCount(count + 1)
      : key === "dec"
      ? setCount(count - 1)
      : setCount(0);
  };

  // const handleIncrement = () => {
  //   if(count >= 20) {
  //     alert("IT IS OKAY");
  //     return;
  //   }

  //   setCount(count + 1)
  // }

  // const handleDecrement = () => {
  //   if(count <= 0) {
  //     alert("IT IS FINE");
  //     return;
  //   }

  //   setCount(count - 1)
  // }

  async function fetchTodo() {
    setLoading(true);
    // toast.success("WINS")
    try {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      // let data = await fetch('https://jsonplaceholder.typicode.com/todos');

      console.log("This is our data: ", data);

      setTodos(data);
      setLoading(false);
    } catch (error) {
      console.log("Error: ", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // if(count === 5){
    fetchTodo();
    // }
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-[40px]">
        <div>This is our count:</div>
        <div className="my-4 font-bold text-3xl leading-[32px]">{count}</div>

        <div>
          <button
            className="border border-red-500 px-4 py-2 text-white bg-[#FA45CE] rounded-lg outline-none"
            onClick={() => handleCount("dec")}
          >
            Decrement
          </button>
          <button
            className="mx-4 border border-blue-500 px-4 py-2 text-white bg-blue-400 rounded-lg outline-none"
            onClick={() => handleCount("zero")}
          >
            Reset
          </button>
          <button
            className="border border-green-500 px-4 py-2 text-white bg-green-400 rounded-lg outline-none"
            onClick={() => handleCount("inc")}
          >
            Increment
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center mt-12">
          <ClipLoader color="blue" size={90} />
        </div>
      ) : (
        <div>
          <div className="mt-10 flex justify-center items-center flex-col">
            <div className="grid grid-cols-5 w-[500px] bg-gray-300 py-3 rounded-lg px-5">
              <div className="col-span-1">User Id</div>
              <div className="col-span-3">Title</div>
              <div className="col-span-1">Status</div>
            </div>

            {todos.map((todo) => {
              const { id, userId, title, completed } = todo;
              return (
                <div
                  key={id}
                  // className={`${completed && "bg-yellow-200"} grid grid-cols-5 w-[500px] bg-gray-100 py-3 rounded-lg px-5 mt-3`}
                  className={`${
                    completed ? "bg-green-300" : "bg-yellow-200"
                  } grid grid-cols-5 w-[500px] bg-gray-100 py-3 rounded-lg px-5 mt-3`}
                >
                  <div className="col-span-1">{userId}</div>
                  <div className="col-span-3">{title}</div>
                  <div className="col-span-1">
                    {completed ? "True" : "False"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

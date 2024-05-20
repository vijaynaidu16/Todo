/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Todos = ({todos}) => {
    return (
      <div className="flex flex-row flex-wrap justify-center items-center mt-16 ">
          {
              todos.map((todo) => {
                  return (
                      <div className="border-black p-7 m-5 rounded-2xl shadow-xl hover:shadow-2xl">
                          <h1 className="font-bold text-xl text-center">{todo.title}</h1>
                          <h3 className="font-normal text-gray-600 text-center">{todo.description}</h3>
                          <div className="text-center">
                          <button className=" px-4 py-2 rounded-md mt-6 bg-green-600 text-white ">{todo.completed ? "completed" : "Mark as completed"}</button>
                          </div>
                      </div>
                  );
              })
          }
      </div>
    );
  };
  
  export default Todos;
  
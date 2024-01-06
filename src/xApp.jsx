import { useState, useEffect, useReducer, useContext } from "react";
import Card from "./components/Card";
// import cities from "./components/CitiesList";
import CardForm from "./components/CardForm";
import Example from "./components/Example";
import { ProvaContext } from "./stores/ProvaContext";

function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return { ...state, [action.field]: action.value }
    case "RESET_FORM":
      return { name: '', email: '' }
    default:
      return state;
  }
}

function App() {
  const [data, setData] = useState([]);
  const [formState, dispatchFormState] = useReducer(formReducer, { name: '', email: '' })
  const handleFielsChange = (field, value) => {
    dispatchFormState({ type: "CHANGE_FIELD", field, value })
  }
  const resetForm = () => {
    e.preventDefault(e)
    dispatchFormState({ type: "RESET_FORM" })
  }
  const sendForm = (e) => {
    e.preventDefault()
    console.log(formState);
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      });
    // document.title = `Conteggio: ${count}`
  }, []);
  const [count, setCount] = useState(0);
  const [cities, setCities] = useState([
    {
      id: 0,
      isVisited: true,
      title: "Tokio",
      imgURL:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos       facilis deserunt mollitia nihil placeat velit.",
    },
    {
      id: 1,
      isVisited: false,
      title: "New York",
      imgURL:
        "https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos       facilis deserunt mollitia nihil placeat velit.",
    },
    {
      id: 2,
      isVisited: true,
      title: "Rome",
      imgURL:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos       facilis deserunt mollitia nihil placeat velit.",
    },
    {
      id: 3,
      isVisited: false,
      title: "Paris",
      imgURL:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos        facilis deserunt mollitia nihil placeat velit.",
    },
  ]);

  const addCity = (city) => {
    setCities([...cities, city]);
  };

  return (
    <ProvaContext.Provider value={{ count, setCount }}>
      <Example />
      <CardForm addCity={addCity} />
      <div className="grid grid-cols-4 gap-5">
        {cities.map((city) => (
          <Card
            key={city.id}
            title={city.title}
            isVisited={city.isVisited}
            imgURL={city.imgURL}
          >
            {city.description}
          </Card>
        ))}
      </div>
      {/* <div className="grid grid-cols-4 gap-5">
        {data.map((item) => (
          <div key={item.id} className="bg-slate-400 mt-10 p-10 rounded-lg">
            <p className="text-base font-bold">{item.userId}</p>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-base">{item.body}</p>
          </div>
        ))}
      </div> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <form className='flex flex-col gap-3 w-80 mb-10 bg-gray-500 p-5 rounded-lg'>
        <div>
          <label htmlFor="name" className="text-white">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={(e) => handleFielsChange("name", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-white">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={(e) => handleFielsChange("email", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
          />
        </div>
        <button onClick={resetForm}>Reset</button>
        <button onClick={sendForm}>Invia</button>
      </form>
    </ProvaContext.Provider>
  );
}

export default App;

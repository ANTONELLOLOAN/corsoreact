import Navbar from "./components/Navbar";
import Card from "./pages/Card";
import CardForm from "./components/CardForm";
import { useState, useEffect, useReducer, useContext } from "react";
import Example from "./components/Example";
import { useSelector } from "react-redux";
import { add } from "./redux/citiesSlice";

function App() {
    const cities = useSelector((state) => state.cities.value)


    return (
        <>
            <Navbar />
            <Example />
            <CardForm />
        </>
    );
}

export default App;

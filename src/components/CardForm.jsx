import { useState } from "react"
import { useDispatch } from "react-redux";
import { add } from "../redux/citiesSlice";

function CardForm() {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState(
        {
            name: '',
            description: '',
            imgURL: '',
            isVisited: false,
        }
    )

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        const inputValue = type == 'checkbox' ? checked : value
        setFormData({
            ...formData,
            [name]: inputValue,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const city = {
            id: Math.random(),
            isVisited: formData.isVisited,
            name: formData.name,
            imgURL: formData.imgURL,
            description: formData.description,
        };
        setFormData(
            {
                name: '',
                description: '',
                imgURL: '',
                isVisited: false,
            }
        )
        dispatch(add(city))
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-80 mb-10 bg-gray-500 p-5 rounded-lg'>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-white">Nome</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="description" className="text-white">Description</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="imgURL" className="text-white">Immagine</label>
                <input type="text" value={formData.imgURL} onChange={handleInputChange} name="imgURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="isVisited" className="text-white">Visitata?</label>
                <input type="checkbox" checked={formData.isVisited} onChange={handleInputChange} name="isVisited" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
            </div>

            <button type="submit" className="text-white bg-gray-700 hover:bg-blue-800">Add Card</button>
        </form>
    )
}

export default CardForm

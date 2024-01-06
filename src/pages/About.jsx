import Navbar from "../components/Navbar"
import useCounterProva from "../hooks/useCounterProva"

function About() {
  useCounterProva()
  return (
    <>
    <Navbar />
    <h1 className='text-3xl font-bold'>About 😎</h1>
    </>
  )
}

export default About

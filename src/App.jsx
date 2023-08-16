import './App.css'
import Course from './components/Course/Course'
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header.jsx'
import Teachers from './components/teachers/teachers'
import Hero from "./components/Hero/Hero.jsx"

function App() {

  return (
    <>
      <Header />
      <Teachers />
      <Course />
      <Experience />
    </>
  )
}

export default App
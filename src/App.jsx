import './App.css'
import Course from './components/Course/Course'
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header.jsx'
import Teachers from './components/teachers/teachers'
import Fields from './components/Fields/Fields'

function App() {

  return (
    <>
      <Header />
      <Fields />
      <Teachers />
      <Course />
      <Experience />
    </>
  )
}

export default App
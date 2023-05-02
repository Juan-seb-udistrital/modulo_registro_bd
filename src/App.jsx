import { useState } from 'react'
import FormRegister from './components/FormRegister'
import Header from './components/Header'
import RegisteredStudents from './components/RegisteredStudents'

function App () {
  const [view, setView] = useState(0)

  return (
    <>
      <Header setView={setView} />
      <section className='grid items-center w-screen h-screen overflow-x-hidden sm:py-4'>
        {
          view === 0 ? (<FormRegister />) : (<RegisteredStudents />)
        }
      </section>
    </>
  )
}

export default App

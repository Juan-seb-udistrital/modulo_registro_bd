import { useState } from 'react'
import FormRegister from './components/FormRegister'
import Header from './components/Header'

function App () {
  const [view, setView] = useState(0)

  return (
    <>
      <Header setView={setView} />
      <section className='grid items-center w-screen h-screen overflow-x-hidden sm:py-4'>
        {
          view === 0 ? (<FormRegister />) : (<p>Vamos a crear un componente que me muestre los estudiantes registrados</p>)
        }
      </section>
    </>
  )
}

export default App

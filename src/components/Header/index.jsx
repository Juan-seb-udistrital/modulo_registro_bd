const Header = ({ setView }) => {
  return (
    <header className='flex justify-evenly items-center w-full h-11 bg-slate-100 border-b border-b-slate-300'>
      <p className='underline cursor-pointer hover:text-blue-400' onClick={() => setView(0)}>Registrar estudiante</p>
      <p className='underline cursor-pointer hover:text-blue-400' onClick={() => setView(1)}>Consultar estudiantes registrados</p>
    </header>
  )
}

export default Header

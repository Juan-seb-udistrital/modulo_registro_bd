import { useReducer, useState } from 'react'
import { initialStateRegister, registerReducer } from '@/reducers/registerReducer'
import { TYPES_REGISTER_FORM } from '@/actions/register_actions'
import { TOUCHED_STATES } from '@/helpers/touched_states'

const Register = () => {
  const [state, dispatch] = useReducer(registerReducer, initialStateRegister)
  const { values, errors, touched } = state

  const [passwordVisibility, setPasswordVisibility] = useState('password')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [errorInForm, setErrorInForm] = useState(null)

  const dispatchReducer = (name, value) => {
    if (name === 'name') {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_NAME, payload: value })
    }

    if (name === 'last_name') {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_LAST_NAME, payload: value })
    }

    if (name === 'id') {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_ID, payload: value })
    }

    if (name === 'email') {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_EMAIL, payload: value })
    }

    if (name === 'password') {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_PASSWORD, payload: value })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatchReducer(name, value)
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    dispatchReducer(name, value)
  }

  const changeTypePassword = () => {
    if (passwordVisibility === 'password') {
      setPasswordVisibility('text')
      return
    }

    setPasswordVisibility('password')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //* Test that no element of the form is empty
    const isValueEmpty = Object.entries(values).some(element => {
      if (element[1].trim() === '') {
        return true
      }
      return false
    })

    //* The form has no errors
    if (Object.entries(errors).length !== 0) {
      setErrorInForm(true)
    }

    if (isValueEmpty) {
      setErrorInForm(true)
      console.log('Espacios vacios')
      return
    }

    setErrorInForm(null)

    try {
      const res = await fetch('http://127.0.0.1:8080/crear', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json'
        }
      })
      const data = await res.json()

      setData(data)
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }

  if (data) {
    <section className='w-full sm:w-[400px] h-14 px-6 py-4 m-auto shadow-md bg-slate-100 border border-slate-200 rounded-md'>
      <p className='w-full'>Tu registro ha finalizado exitosamente ✅</p>
    </section>
  }

  if (error) {
    <section className='w-full sm:w-[400px] h-14 px-6 py-4 m-auto shadow-md bg-slate-100 border border-slate-200 rounded-md'>
      <p className='w-full'>Ocurrio un error en tu petición ❌</p>
    </section>
  }

  return (
    <section className='w-full sm:w-[400px] h-min px-6 py-4 m-auto shadow-md bg-slate-100 border border-slate-200 rounded-md'>
      <form
        className='flex flex-col w-full'
        onSubmit={handleSubmit}
      >
        <section className='relative w-full mt-4'>
          <label>
            <span className='font-semibold'>
              Nombre:
            </span>
            <input
              type='text'
              name='name'
              value={values.name}
              className='w-full px-1 py-2 mt-2 outline-none border border-blue-400 focus:ring-2 focus:ring-blue-400 rounded-md'
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {
            (errors.name || touched.name === TOUCHED_STATES.TOUCHED_WITH_ERROR) &&
              <p className='text-red-400 text-sm mt-1'>{errors.name} ❌</p>
          }
        </section>
        <section className='relative w-full mt-4'>
          <label>
            <span className='font-semibold'>
              Apellido:
            </span>
            <input
              type='text'
              name='last_name'
              value={values.last_name}
              className='w-full px-1 py-2 mt-2 outline-none border border-blue-400 focus:ring-2 focus:ring-blue-400 rounded-md'
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {
            (errors.last_name || touched.last_name === TOUCHED_STATES.TOUCHED_WITH_ERROR) &&
              <p className='text-red-400 text-sm mt-1'>{errors.last_name} ❌</p>
          }
        </section>
        <section className='relative w-full mt-4'>
          <label>
            <span className='font-semibold'>
              Cedula:
            </span>
            <input
              type='text'
              name='id'
              value={values.id}
              className='w-full px-1 py-2 mt-2 outline-none border border-blue-400 focus:ring-2 focus:ring-blue-400 rounded-md'
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {
            (errors.id || touched.id === TOUCHED_STATES.TOUCHED_WITH_ERROR) &&
              <p className='text-red-400 text-sm mt-1'>{errors.id} ❌</p>
          }
        </section>
        <section className='relative w-full mt-4'>
          <label>
            <span className='font-semibold'>
              Email:
            </span>
            <input
              type='email'
              name='email'
              value={values.email}
              className='w-full px-1 py-2 mt-2 outline-none border border-blue-400 focus:ring-2 focus:ring-blue-400 rounded-md'
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {
            (errors.email || touched.email === TOUCHED_STATES.TOUCHED_WITH_ERROR) &&
              <p className='text-red-400 text-sm mt-1'>{errors.email} ❌</p>
          }
        </section>
        <section className='relative w-full mt-4'>
          <label>
            <span className='font-semibold'>
              Contraseña:
            </span>
            <input
              type={passwordVisibility}
              name='password'
              value={values.password}
              className='w-full px-1 py-2 mt-2 outline-none border border-blue-400 focus:ring-2 focus:ring-blue-400 rounded-md'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className='w-full text-right text-base text-blue-500 cursor-pointer' onClick={changeTypePassword}>
              <span className='hover:underline'>{passwordVisibility === 'password' ? 'Mostrar' : 'Ocultar'}</span>
            </p>
          </label>
          {
            (errors.password || touched.password === TOUCHED_STATES.TOUCHED_WITH_ERROR) &&
              <div className='w-full h-min text-sm'>
                <p className='mb-1'>{errors.password.info}</p>
                <ul className='list-disc list-inside'>
                  {errors.password.conditions.map((condition, index) => (
                    <li key={index} className='text-sm'>{condition}</li>
                  ))}
                </ul>
              </div>
          }
        </section>
        {
          errorInForm && (
            <section className='w-full mt-4'>
              <p>
                Tienes errores o espacios vacios en el formulario porfavor revisa tus datos
              </p>
            </section>
          )
        }
        <input type='submit' value='Registrar empleado' className='my-4 px-4 py-2 w-1/2 mx-auto bg-slate-500 rounded-md border border-gray-700 cursor-pointer' />
      </form>
    </section>
  )
}

export default Register

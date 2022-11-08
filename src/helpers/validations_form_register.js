const validateNames = (name) => {
  let error
  const regex = /^[a-zA-Z ,.'-]+$/i

  //* If the length of the string is less than 4 or greatest than 30 or does not comply with the regex
  //* then generate the error
  if (name.length < 4 || name.length > 30 || !regex.test(name)) {
    error = 'Ingresa un nombre o apellido real'
  }

  return error
}

const validateID = (id) => {
  let error
  const regex = /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/gm

  //* If the length of the string is less than 7 or greatest than 11 or does not comply with the regex
  //* then generate the error
  if (id.length < 7 || id.length > 11 || !regex.test(id)) {
    error = 'Ingresa un numero de cedula real'
  }

  return error
}

const validateEmail = (email) => {
  let error
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (email.length > 25 || email.length < 3 || !regex.test(email)) {
    error = 'El email no es correcto'
  }

  return error
}

const validatePassword = (password) => {
  let error
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

  if (!regex.test(password)) {
    error = {
      info: 'La contraseña debe tener las siguientes condiciones:',
      conditions: ['Longitud entre 6 a 16 digitos', 'Al menos un numero', 'Al menos un caracter especial']
    }
  }

  return error
}

export { validateNames, validateID, validateEmail, validatePassword }

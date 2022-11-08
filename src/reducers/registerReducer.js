import { TYPES_REGISTER_FORM } from '@/actions/register_actions'
import { TOUCHED_STATES } from '@/helpers/touched_states'
import { validateNames, validateID, validateEmail, validatePassword } from '@/helpers/validations_form_register.js'

const initialStateRegister = {
  values: {
    name: '',
    last_name: '',
    email: '',
    id: '',
    password: ''
  },
  errors: {},
  touched: {
    name: TOUCHED_STATES.NOT_TOUCHED,
    last_name: TOUCHED_STATES.NOT_TOUCHED,
    email: TOUCHED_STATES.NOT_TOUCHED,
    id: TOUCHED_STATES.NOT_TOUCHED,
    password: TOUCHED_STATES.NOT_TOUCHED
  }
}

function registerReducer (state, action) {
  switch (action.type) {
    case (TYPES_REGISTER_FORM.CHANGE_NAME): {
      const value = action.payload

      const error = validateNames(value)

      if (!error && state.errors.name) {
        delete state.errors.name
      }

      return error
        ? {
            values: { ...state.values, name: value },
            errors: { ...state.errors, name: error },
            touched: { ...state.touched, name: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, name: value },
            errors: { ...state.errors },
            touched: { ...state.touched, name: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (TYPES_REGISTER_FORM.CHANGE_LAST_NAME): {
      const value = action.payload

      const error = validateNames(value)

      if (!error && state.errors.last_name) {
        delete state.errors.last_name
      }

      return error
        ? {
            values: { ...state.values, last_name: value },
            errors: { ...state.errors, last_name: error },
            touched: { ...state.touched, last_name: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, last_name: value },
            errors: { ...state.errors },
            touched: { ...state.touched, last_name: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (TYPES_REGISTER_FORM.CHANGE_EMAIL): {
      const value = action.payload

      const error = validateEmail(value)

      if (!error && state.errors.email) {
        delete state.errors.email
      }

      return error
        ? {
            values: { ...state.values, email: value },
            errors: { ...state.errors, email: error },
            touched: { ...state.touched, email: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, email: value },
            errors: { ...state.errors },
            touched: { ...state.touched, email: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (TYPES_REGISTER_FORM.CHANGE_ID): {
      const value = action.payload

      const error = validateID(value)

      if (!error && state.errors.id) {
        delete state.errors.id
      }

      return error
        ? {
            values: { ...state.values, id: value },
            errors: { ...state.errors, id: error },
            touched: { ...state.touched, id: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, id: value },
            errors: { ...state.errors },
            touched: { ...state.touched, id: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (TYPES_REGISTER_FORM.CHANGE_PASSWORD): {
      const value = action.payload

      const error = validatePassword(value)

      if (!error && state.errors.password) {
        delete state.errors.password
      }

      return error
        ? {
            values: { ...state.values, password: value },
            errors: { ...state.errors, password: error },
            touched: { ...state.touched, password: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, password: value },
            errors: { ...state.errors },
            touched: { ...state.touched, password: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    default:
      break
  }
}

export { initialStateRegister, registerReducer }

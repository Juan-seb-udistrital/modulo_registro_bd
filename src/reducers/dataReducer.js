import { TYPES_REGISTER_FORM } from '@/actions/register_actions'
import { TOUCHED_STATES } from '@/helpers/touched_states'
import { validateID, validateEmail, validatePhone, validateInstrument } from '@/helpers/validations_form_register.js'

const initialStateData = {
  values: {
    number_document: '',
    email: '',
    institutional_email: '',
    phone: '',
    instrument: ''
  },
  errors: {},
  touched: {
    number_document: TOUCHED_STATES.NOT_TOUCHED,
    email: TOUCHED_STATES.NOT_TOUCHED,
    institutional_email: TOUCHED_STATES.NOT_TOUCHED,
    phone: TOUCHED_STATES.NOT_TOUCHED,
    instrument: TOUCHED_STATES.NOT_TOUCHED
  }
}

function dataReducer (state, action) {
  switch (action.type) {
    case (TYPES_REGISTER_FORM.CHANGE_NUMBER_DOCUMENT): {
      const value = action.payload

      const error = validateID(value)

      if (!error && state.errors.number_document) {
        delete state.errors.number_document
      }

      return error
        ? {
            values: { ...state.values, number_document: value },
            errors: { ...state.errors, number_document: error },
            touched: { ...state.touched, number_document: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, number_document: value },
            errors: { ...state.errors },
            touched: { ...state.touched, number_document: TOUCHED_STATES.TOUCHED_OK }
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
    case (TYPES_REGISTER_FORM.CHANGE_INSTITUTIONAL_EMAIL): {
      const value = action.payload

      const error = validateEmail(value)

      if (!error && state.errors.institutional_email) {
        delete state.errors.institutional_email
      }

      return error
        ? {
            values: { ...state.values, institutional_email: value },
            errors: { ...state.errors, institutional_email: error },
            touched: { ...state.touched, institutional_email: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, institutional_email: value },
            errors: { ...state.errors },
            touched: { ...state.touched, institutional_email: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (TYPES_REGISTER_FORM.CHANGE_PHONE): {
      const value = action.payload

      const error = validatePhone(value)

      if (!error && state.errors.phone) {
        delete state.errors.phone
      }

      return error
        ? {
            values: { ...state.values, phone: value },
            errors: { ...state.errors, phone: error },
            touched: { ...state.touched, phone: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, phone: value },
            errors: { ...state.errors },
            touched: { ...state.touched, phone: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (TYPES_REGISTER_FORM.CHANGE_INSTRUMENT): {
      const value = action.payload

      const error = validateInstrument(value)

      if (!error && state.errors.instrument) {
        delete state.errors.instrument
      }

      return error
        ? {
            values: { ...state.values, instrument: value },
            errors: { ...state.errors, instrument: error },
            touched: { ...state.touched, instrument: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, instrument: value },
            errors: { ...state.errors },
            touched: { ...state.touched, instrument: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    default:
      break
  }
}

export { initialStateData, dataReducer }

import { loginRequestError, loginRequestLoading, loginRequestSuccess } from './creators'

export function loginRequest(email, password) {
  return async function (dispatch, getState, { api }) {
    try {

      dispatch(loginRequestLoading(true))
      // await api.post('api/login', { email, password })
      // dispatch(loginRequestSuccess)
      alert("Login!")

    } catch {
      dispatch(loginRequestError('error'))

    } finally {
      dispatch(loginRequestLoading(false))

    }
  }
}

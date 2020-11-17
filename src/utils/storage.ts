import { STORAGE_TOKEN_KEY_NAME } from '../constants/index'

export const getToken = async (): Promise<string | null> => {
  return localStorage.getItem(STORAGE_TOKEN_KEY_NAME)
}

export const removeToken = async (): Promise<void> => {
  localStorage.removeItem(STORAGE_TOKEN_KEY_NAME)
}

export const setToken = async (token: string): Promise<void> => {
  localStorage.setItem(STORAGE_TOKEN_KEY_NAME, token)
}

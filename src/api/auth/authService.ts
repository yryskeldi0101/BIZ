import { LoginType, RegisterType } from "../../utils/types/types"
import { mainApi } from "../mainApi"

export const loginRequest = (loginData: LoginType) => {
    return mainApi.post('/auth/sign-in', loginData)
}

export const registerRequest = (registerData: RegisterType) => {
    return mainApi.post("/auth/sign-up", registerData)
}
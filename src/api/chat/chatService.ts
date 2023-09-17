import { mainApi } from "../mainApi"

export const getAllChatRequest = () => {
    return mainApi.get('/chat')
}
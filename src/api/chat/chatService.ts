import { SendMessageType } from "../../components/messenger/ChatMessenger"
import { mainApi } from "../mainApi"



export const getAllChatRequest = () => {
    return mainApi.get('/chat')
}

export const getChatIdRequest = (id: number) => {
    return mainApi.get('/chat/find_by_id', {
        params: {
            targetChatId: id
        }
    })
}
export const sendMessageRequest = (data: SendMessageType) => {
    return mainApi.post(`/chat/send_message`, data)
}
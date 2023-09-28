import { MessageType } from "../../containers/VolunteerPage"
import { mainApi } from "../mainApi"

export const getAllVolunteerRequest = (trueOrFalse: boolean) => {
    return mainApi.get("/vacancy/get_all", {
        params: {
            trueOrFalse
        }
    })
}

export const getVolunteerByIDRequest = (id: number) => {
    return mainApi.get(`/vacancy`, {
        params: {
            vacancyId: id
        }
    })
}


export const putRezumeRequest = (id: number) => {
    return mainApi.put(`/vacancy/respond?vacancyId=${id}`)
}

import { mainApi } from "../mainApi"

export const getAllVacancyRequest = () => {
    return mainApi.get("/vacancy/get_all?trueOrFalse=true")
}
export const acceptVacancyRequest = (id: string) => {
    return mainApi.put(`/vacancy/accept?vacancyId=${id}`)
}

export const deleteVacancyRequest = (id: string) => {
    return mainApi.delete(`/vacancy?vacancyId=${id}`)
}
export const getAllRequestsAdmin = () => {
    return mainApi.get("/vacancy/get_all?trueOrFalse=false")
}
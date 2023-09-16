import { mainApi } from "../mainApi"

export const getAllVacancyRequest = () => {
    return mainApi.get("/vacancy/get_all")
}
export const acceptVacancyRequest = (id: string) => {
    return mainApi.put(`/vacancy/accept?vacancyId=${id}`)
}

export const deleteVacancyRequest = (id: string) => {
    return mainApi.delete(`/vacancy?vacancyId=${id}`)
}

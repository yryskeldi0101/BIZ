import { CompanyInfo } from "../../utils/types/types"
import { mainApi } from "../mainApi"

export const createVacancyRequest = (data: CompanyInfo) => {
    return mainApi.post("/vacancy", data)
}

export const getAllVolunteersInManager = () => {
    return mainApi.get("/volunteer")
}
export const accepVolunterInMAnager = (vacancyId: number, id: number) => {
    return mainApi.put(`/volunteer/${id}/${vacancyId}`)
}
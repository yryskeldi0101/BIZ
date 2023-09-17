import React, { useEffect, useState } from 'react'
import { deleteVacancyRequest, getAllVacancyRequest } from '../../api/admin/adminService'
import { toastError, toastSuccess } from '../../components/toast';

type VacancyData = {
    aboutVacancy: string;
    companyName: string
    date: string;
    id: string
}
const Vacancies = () => {
    const [vacancy, setVacancy] = useState<VacancyData[]>([])
    const getVacancyData = async () => {
        try {
            const result = await getAllVacancyRequest()
            setVacancy(result.data)
            return result.data

        } catch (error) {
            return error
        }
    }
    const deleteVAcancyHandler = async (id: string) => {
        try {
            await deleteVacancyRequest(id)
            toastSuccess("Успешно отклонен")
            return getVacancyData()
        } catch (error) {
            return toastError("Произошла ошибка")
        }
    }

    useEffect(() => {
        getVacancyData()
    }, [])
    return (
        <div>
            <div className='px-10'>
                <div className='w-full flex flex-col items-center gap-10 mb-10'>
                    {vacancy?.map((item) => {
                        return <div key={item.id} className='border rounded-xl px-10 py-3 w-[80%] shadow-xl'>
                            <div>
                                <h1 className='text-black text-3xl font-bold'>{item.companyName}</h1>
                            </div>
                            <div className='flex flex-col gap-2 mt-2 w-full flex-wrap'>
                                <p className='text-xl font-bold text-black'>О работе: <span className='text-black font-normal text-lg'>{item.aboutVacancy}</span></p>
                                <p className='text-xl font-bold text-black'>Дата: <span className='text-black font-normal text-lg'>{item.date}</span></p>
                            </div>
                            <div className='w-full flex items-center justify-center my-4'>
                                <button onClick={() => deleteVAcancyHandler(item.id)} className='bg-red-500 text-white text-xl px-5 py-1 rounded-3xl'>Отклонить</button>
                            </div>
                        </div>
                    })}
                    {vacancy?.length === 0 && <div className='w-full h-96  flex justify-center'>
                        <div className='mt-10'>
                            <h3 className='text-5xl font-bold text-red-500'>Пока что нет вакансии</h3>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Vacancies

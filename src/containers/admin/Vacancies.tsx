import React from 'react'
const data = [
    {
        id: "1",
        title: "Company name",
        description: "lorem sdf fdsf sd sd sd s d sd s d s d sd s fdef",
        location: "Bishkek", 
        phone: "0700300200",
        email: "exampla.@gmail.com"
    },
    {
        id: "2",
        title: "Company name",
        description: "lorem sdf fdsf sd sd sd s d sd s d s d sd s fdef",
        location: "Bishkek", 
        phone: "0700300200",
        email: "exampla.@gmail.com"
    },
    {
        id: "3",
        title: "Company name",
        description: "lorem sdf fdsf sd sd sd s d sd s d s d sd s fdef",
        location: "Bishkek", 
        phone: "0700300200",
        email: "exampla.@gmail.com"
    }
]
const Vacancies = () => {
  return (
    <div>
      <div className='px-10'>
     <div className='w-full flex flex-col items-center gap-10 mb-10'>
    {data?.map((item) => {
        return <div key={item.id} className='border rounded-xl px-10 py-3 w-[80%] shadow-xl'>
            <div>
                <h1 className='text-black text-3xl font-bold'>{item.title}</h1>
            </div>
           <div className='flex flex-col gap-2 mt-2 w-full flex-wrap'>
           <p className='text-xl font-bold text-black'>Расположение: <span className='text-black font-normal text-lg'>{item.location}</span></p>
            <p className='text-xl font-bold text-black'>О работе: <span className='text-black font-normal text-lg'>{item.description}</span></p>
            <p className='text-xl font-bold text-black'>Номер телефона: <span className='text-black font-normal text-lg'>{item.phone}</span></p>
            <p className='text-xl font-bold text-black'>Почта: <span className='text-black font-normal text-lg'>{item.email}</span></p>
            </div>
            <div className='w-full flex items-center justify-center my-4'>
                <button className='bg-black text-white text-xl px-5 py-1 rounded-3xl'>Добавить</button>
            </div>
        </div>
    })}
     </div>
      </div>
    </div>
  )
}

export default Vacancies

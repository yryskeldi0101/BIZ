import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from "../../assets/icons/logo.svg";
import clsx from 'clsx';

const AdminHeader = () => {
    const location = useLocation()
  return (
    <div className="flex justify-between p-10 mb-5">
      <div>
        <Link to="" className="">
          <div className="w-28 flex justify-between items-center">
            <img
              src={Logo}
              alt=""
              className="w-10  h-10 bg-white rounded-3xl"
            />
            <h5 className="text-3xl font-mono">BIZ</h5>
          </div>
        </Link>
      </div>
      <div className="flex justify-between items-center w-4/12 text-[22px] text-gray-600 ">
        <Link to="vacancies" className={clsx(location.pathname === "/admin/vacancies" && "bg-gray-400 text-white px-4 py-0 rounded-xl")}>Все ваканции</Link>
        <Link to="requests" className={clsx(location.pathname === "/admin/requests" && "bg-gray-400 text-white  px-4 py-0 rounded-xl")}>Запросы</Link>
        <button className="py-[8px] px-[18px] bg-slate-600 text-white rounded-3xl">
         Выйти
        </button>
      </div>
    </div>
  )
}

export default AdminHeader
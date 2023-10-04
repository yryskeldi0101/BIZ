import { useNavigate } from "react-router-dom";

const ChangeRolePage = () => {
  const navigate = useNavigate();

  return (
    <form>
      <div className="w-screen h-screen bg-white flex items-center justify-center">
        <div className=" rounded-2xl  w-[31.25rem] h-[25rem] p-5">
          <h1 className=" font-medium text-center text-2xl font-sans py-2">
            Выберите
          </h1>
          <p className="text-center text-sm text-gray-500 font-medium">
            В качестве кого вы хотите зарегистрироваться
          </p>
          <div className="flex flex-col items-center pt-12 gap-5">
            <div>
              <button
                onClick={() => navigate("/signup-volunteer")}
                className="py-3 px-32 bg-[#9747FF80] text-white font-medium rounded-sm hover:bg-purple-400"
              >
                Волонтер
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate("/signup-organization")}
                className="py-3 px-16 bg-[#9747FF80] text-white font-medium rounded-sm hover:bg-purple-400"
              >
                Компания/Организация
              </button>
            </div>
          </div>
          <div className="flex justify-around mt-[1.875rem]">
            <button
              onClick={() => navigate("/")}
              className=" text-center font-sans text-gray-500 text-sm font-bold bg-white border border-purple-300 p-1.5 rounded-md  w-[6rem]"
            >
              Назад
            </button>
            <button
              type="submit"
              className="text-center font-sans text-white text-sm font-bold bg-[#9747FF80] hover:bg-purple-500  p-1.5 rounded-md w-[6rem] "
            >
              Дальше{" "}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChangeRolePage;

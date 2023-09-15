import aboutImage from "../../assets/images/aboutPagesImages/realHandTross.jpg";
import image from "../../assets/images/aboutPagesImages/lestnitsa2.jpg";
import hopeImage from "../../assets/images/aboutPagesImages/hands.jpg";
import SliderUi from "../UI/SliderUi";
import { dataOurAmbission } from "../../utils/constants/contants";

const About = () => {
  return (
    <>
      <div className="px-20 pt-10 pb-20 flex justify-between flex-wrap w-full">
        <div className="w-3/5">
          <h1 className="font-serif font-medium text-6xl pb-12 text-gray-600">
            Кто Мы?
          </h1>
          <p className="text-gray-500 font-serif text-2xl w-[47.25rem] pb-5 font-normal tracking-wide leading-14">
            Мы, волонтерская компания, занимаемся тем, что вносим положительные
            изменения в жизнь людей. Наше назначение - создать мир, где каждый
            человек может найти помощь, надежду и вдохновение. Мы стремимся
            поддерживать и вдохновлять других, распространять доброту и
            создавать сообщество, где каждый может играть свою роль в созидании
            лучшего мира.
          </p>
          <p className="text-gray-500 font-serif text-2xl w-[47.25rem] pb-5 font-medium tracking-wide leading-14 ">
            Мы хотим проводить разнообразные акции и мероприятия, работать с
            разными группами нуждающихся и стараться сделать мир более
            дружелюбным и заботливым местом. Наша работа - это не просто миссия,
            это страсть к созданию перемен и деланию добра, и мы приглашаем вас
            присоединиться к нам и вместе вносить яркие изменения в жизни людей.
          </p>
        </div>
        <div>
          <img
            src={aboutImage}
            alt="AboutImage"
            className="w-[34.375rem] h-[37.5rem]"
          />
        </div>
      </div>
      <h1
        className={`text-center pt-28 text-6xl text-gray-600 font-medium font-serif`}
      >
        Наша миссия
      </h1>
      <div className={`flex justify-around pt-20`}>
        {dataOurAmbission.map((item) => (
          <div className="w-[25rem] p-12 bg-gray-100 flex flex-col items-center rounded-lg">
            <h2 className="text-gray-900 font-serif text-center text-2xl w-64 pb-8">
              {item.title}
            </h2>
            <p className="text-gray-500 font-sans text-xl text-start pb-[5.3rem] tracking-wide">
              {item.describetion}
            </p>
          </div>
        ))}
      </div>

      <p className="text-gray-600 font-mono text-xl font-medium text-center pt-36 pb-14 px-10">
        OUR PARTNERS
      </p>
      <SliderUi />
      <div className="px-9 flex justify-around items-start pt-10 mt-28">
        <div className="">
          <img src={image} alt="cubeImage" className="w-3/4" />
        </div>
        <div>
          <h1 className="text-6xl w-56 pb-10 text-gray-600">Сделать пожертвование.</h1>
          <p className="w-[38rem] text-xl pb-8 text-gray-600">
            Мы, вместе с вами, можем сделать больше! Давайте вдохновлять
            перемену и распространять доброту вместе. Ваш вклад имеет значение и
            приносит пользу многим. Присоединяйтесь к нашей миссии сегодня и
            вместе мы сделаем мир лучше!
          </p>
          <button className="bg-gray-500 hover:bg-gray-400 text-xl py-3 px-12 text-white rounded-full font-sans">
            Пожертвовать
          </button>
        </div>
      </div>
      <div className="flex justify-between px-9  py-24 w-full my-32">
        <div className="w-[26.25rem] flex flex-col gap-4 ">
          <h1 className="text-6xl text-gray-600">Что мы делаем?</h1>
          <p className="text-xl font-normal w-96 tracking-wide leading-8">
            Мы активно участвуем в местных и мировых благотворительных
            инициативах, оказываем помощь в чрезвычайных ситуациях и проводим
            мероприятия для поддержки тех, кто нуждается в нашей помощи.
          </p>
        </div>
        <div className="flex gap-3 pt-5 pl-36 w-3/6">
          <h2 className="text-2xl font-semibold">Мы организуем:</h2>
          <ul className="w-96 text-xl leading-1 tracking-widest leading-14 flex flex-col gap-5 ml-20">
            <li>1.Регулярные благотворительные акции и сбор средств.</li>
            <li>
              2.Волонтёрские проекты, направленные на улучшение окружающей
              среды.
            </li>
            <li>
              3.Образовательные мероприятия и курсы для развития волонтерских
              навыков.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center pl-9 pb-20  ">
        <div className="pr-32 w-1/2">
          <img src={hopeImage} alt="hope" className="h-[40.625rem]" />
        </div>
        <div className="w-2/4">
          <h1 className="text-6xl w-[31rem] font-serif text-gray-600">
            Присоединяйтесь к нам
          </h1>
          <p className="text-2xl font-normal pt-14 pr-7">
            Присоединяйтесь к нам в волонтерстве и станьте частью нашей
            удивительной команды! Вместе мы можем сделать мир ярче, лучше и
            добрее. Ваше участие имеет огромное значение, и ваши добрые дела
            могут изменить жизни людей. Давайте вместе создавать позитивные
            перемены и делать мир лучше для всех. Присоединяйтесь к нам сегодня
            и дарите свое время и сердце для добра!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

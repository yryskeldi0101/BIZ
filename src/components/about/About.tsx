import aboutImage from "../../assets/images/about/hands.png";
import image from "../../assets/images/about/twoHands.png";
import hopeImage from "../../assets/images/about/peoples.png";
import SliderUi from "../UI/SliderUi";

const About = () => {
  return (
    <>
      <div className="pl-9 pr-20 pt-10 pb-20 flex justify-between">
        <div>
          <h1 className="font-medium text-5xl pb-10">
            Кто <span className="text-red-400">Мы?</span>
          </h1>
          <p className="text-2xl w-[31.25rem] pb-5 font-normal">
            Мы - волонтерская организация, создающая сообщество для
            положительных перемен. Наша цель - помочь каждому человеку,
            вдохновив его и даря надежду. Мы способствуем добрым делам,
            распространяем доброту и поддерживаем других в совместном стремлении
            к лучшему миру.
          </p>
          <p className="w-[34rem]  text-base font-normal">
            Мы страстно преданы идее улучшения мира через разнообразные акции и
            мероприятия, помогая разным группам нуждающихся. Присоединяйтесь к
            нам и помогайте делать мир более дружелюбным и заботливым местом.
          </p>
        </div>
        <div>
          <img
            src={aboutImage}
            alt="AboutImage"
            className="w-[40rem] h-[30rem]"
          />
        </div>
      </div>
      <h1 className={`text-center pt-20 text-5xl text-orange-300 font-medium `}>
        Наша миссия
      </h1>
      <div className={`flex justify-around pt-20`}>
        <div className="w-[25rem] p-12 bg-[#EEEDEB] flex flex-col items-center rounded-lg">
          <h2 className="text-black text-center text-2xl w-64 pb-8">
            Вдохновлять и изменять мир
          </h2>
          <p className="text-black  text-lg text-start pb-[5.3rem]">
            Мы верим в силу человеческой доброты и страсть к переменам. Нашей
            миссией является вдохновлять людей и совершать добрые поступки,
            которые меняют мир к лучшему.
          </p>
        </div>
        <div className="w-[25rem] p-12 bg-[#EEEDEB] flex flex-col items-center rounded-lg">
          <h2 className="text-black  text-center text-2xl w-64 pb-8">
            Создавать сообщество заботы и поддержки
          </h2>
          <p className="text-black  text-lg text-start pb-14">
            Мы стремимся создать общество, где каждый человек может найти место,
            где его примут и поддержат. Нашей миссией является объединение людей
            в сообщество заботы, где каждый может оказать помощь и получить ее в
            ответ.
          </p>
        </div>
        <div className="w-[25rem] p-12 bg-[#EEEDEB] flex flex-col items-center rounded-lg">
          <h2 className="text-black  text-center text-2xl w-64 pb-8">
            Распространять доброту по всему миру
          </h2>
          <p className="text-black text-lg text-start pb-14">
            Мы хотим, чтобы доброта была контагиозной и распространялась по
            всему миру. Нашей миссией является содействие распространению добрых
            поступков и вдохновение других на дела, которые делают мир лучше.
          </p>
        </div>
      </div>
      <SliderUi />
      <div className="px-9 flex pt-10">
        <div className="pr-24">
          <img src={image} alt="cubeImage" className="w-[37.5rem]" />
        </div>
        <div>
          <h1 className="text-6xl w-56 pb-10">Сделать пожертвование.</h1>
          <p className="w-[38rem] text-lg pb-8">
            Мы, вместе с вами, можем сделать больше! Давайте вдохновлять
            перемену и распространять доброту вместе. Ваш вклад имеет значение и
            приносит пользу многим. Присоединяйтесь к нашей миссии сегодня и
            вместе мы сделаем мир лучше!
          </p>
          <button className="bg-black py-5 px-14 text-white rounded-full">
            Пожертвовать
          </button>
        </div>
      </div>
      <div className="flex px-9  py-24">
        <div className="w-[26.25rem]">
          <h1 className="text-6xl pb-4">Что мы делаем?</h1>
          <p className="text-xl font-normal w-96">
            Мы активно участвуем в местных и мировых благотворительных
            инициативах, оказываем помощь в чрезвычайных ситуациях и проводим
            мероприятия для поддержки тех, кто нуждается в нашей помощи.
          </p>
        </div>
        <div className="flex gap-3 pt-5 pl-36">
          <h2 className="text-xl font-semibold">Мы организуем:</h2>
          <ul className="w-96 text-lg leading-1">
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
      <div className="flex items-center pl-9 pb-20  ">
        <div className="pr-32">
          <img src={hopeImage} alt="hope" className="h-[34rem]" />
        </div>
        <div className="w-[30rem]">
          <h1 className="text-5xl w-[31rem] text-blue-700">
            Присоединяйтесь к нам
          </h1>
          <p className="text-2xl font-normal pt-14">
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

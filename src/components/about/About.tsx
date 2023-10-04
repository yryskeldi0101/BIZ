import aboutImage from "../../assets/images/about/hands.png";
import image from "../../assets/images/about/twoHands.png";
import hopeImage from "../../assets/images/about/peoples.png";
import SliderUi from "../UI/SliderUi";

const About = () => {
  return (
    <div>
      <div className="sm:pl-9 pl-2 pr-20 sm:pt-10 pt-2 pb-20 sm:flex flex flex-wrap justify-between">
        <div>
          <h1 className="font-medium  sm:text-5xl text-2xl pb-8 px-5">
            Кто <span className="text-red-400">Мы?</span>
          </h1>
          <p className="sm:text-2xl text-base sm:w-[31.25rem] w-[25rem] pb-5 font-normal px-5">
            Мы - волонтерская организация, создающая сообщество для
            положительных перемен. Наша цель - помочь каждому человеку,
            вдохновив его и даря надежду. Мы способствуем добрым делам,
            распространяем доброту и поддерживаем других в совместном стремлении
            к лучшему миру.
          </p>
          <p className="sm:w-[34rem] w-[25rem] text-sm font-normal px-5">
            Мы страстно преданы идее улучшения мира через разнообразные акции и
            мероприятия, помогая разным группам нуждающихся. Присоединяйтесь к
            нам и помогайте делать мир более дружелюбным и заботливым местом.
          </p>
        </div>
        <div className="sm:w-[40rem] w-[60rem] sm:h-[30rem] h-[10rem] pt-10 px-5">
          <img src={aboutImage} alt="AboutImage" />
        </div>
      </div>
      <h1
        className={`text-center pt-20 text-5xl text-orange-300 font-medium px-5`}
      >
        Наша миссия
      </h1>
      <div
        className={`sm:flex flex flex-wrap sm:gap-0 gap-5 justify-around pt-20 px-5`}
      >
        <div className="w-[25rem] p-12 bg-[#EEEDEB] flex flex-col items-center rounded-lg px-5">
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
      <div className="sm:px-9  flex flex-wrap  sm:pt-10 pt-0 px-5">
        <div className="sm:pr-24 pr-0 sm:w-[40rem] w-[20rem]">
          <img src={image} alt="cubeImage" />
        </div>
        <div className="sm:pl-0 pl-2 sm:w-[38rem] w-[25rem]">
          <h1 className="sm:text-6xl text-4xl w-56 pb-10 ">
            Сделать пожертвование.
          </h1>
          <p className=" text-lg pb-8">
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
      <div className="sm:flex flex flex-wrap sm:px-9 px-5  py-24 ">
        <div className="w-[26.25rem]">
          <h1 className="text-6xl pb-4">Что мы делаем?</h1>
          <p className="text-xl font-normal sm:w-96 w-90">
            Мы активно участвуем в местных и мировых благотворительных
            инициативах, оказываем помощь в чрезвычайных ситуациях и проводим
            мероприятия для поддержки тех, кто нуждается в нашей помощи.
          </p>
        </div>
        <div className="sm:flex flex flex-wrap gap-3 pt-5 sm:pl-36 pl-0">
          <h2 className="text-xl font-semibold">Мы организуем:</h2>
          <ul className="sm:w-96 w-88 text-lg leading-1">
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
      <div className="sm:flex flex flex-wrap items-center sm:pl-9 pl-0  pb-20 px-5 ">
        <div className="sm:pr-32 pr-0 px-5">
          <img src={hopeImage} alt="hope" className="h-[34rem]" />
        </div>
        <div className="sm:w-[30rem] w-[25rem] sm:pl-0 px-5">
          <h1 className="sm:text-5xl text-2xl sm:w-[31rem] w-[24rem] sm:pt-0 pt-10 text-blue-700">
            Присоединяйтесь к нам
          </h1>
          <p className="sm:text-2xl text-base font-normal pt-7">
            Присоединяйтесь к нам в волонтерстве и станьте частью нашей
            удивительной команды! Вместе мы можем сделать мир ярче, лучше и
            добрее. Ваше участие имеет огромное значение, и ваши добрые дела
            могут изменить жизни людей. Давайте вместе создавать позитивные
            перемены и делать мир лучше для всех. Присоединяйтесь к нам сегодня
            и дарите свое время и сердце для добра!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import footerBackground from "../../assets/images/Vector.png";
import phoneIcon from "../../assets/icons/phone.svg";
import whatSappIcon from "../../assets/icons/whatsapp.svg";
import linkIcon from "../../assets/icons/link.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import telegramIcon from "../../assets/icons/telegram.svg";

const CompanyDetailsPage = () => {
  const footerBackgroundStyle = {
    backgroundImage: `url(${footerBackground})`,
  };
  return (
    <>
      <div className=" pt-12 bg-[#F5FBFF] border-2 border-[#d1e0eb] rounded-lg  w-[57rem] h-">
        <header className="flex justify-between px-8">
          <div className="text-black font-medium">
            <h1 className="text-[2.5rem] ">Красный полумесяц</h1>
            <p className="font-base pb-5">Директор/Президент: Рустам Алеев</p>
            <p className="font-base">Слоган компании</p>
            <p className="text-xs text-[#757575]">1996-2023</p>
          </div>
          <div className="relative">
            <div className="w-[11rem] h-[11rem] bg-[#BDE3FF] rounded-full absolute -right-14 -top-24">
              <p className="w-36 h-32 bg-[#302f2fcc] flex items-center justify-center text-xl font-medium rounded-md absolute top-24 -left-16">
                LOGO
              </p>
            </div>
          </div>
        </header>
        <main className="flex flex-col items-end text-black font-medium text-base pt-14 pb-10 px-8">
          <p>Сфера деятельности</p>
          <p className="w-[25rem] text-sm pt-3 pb-6">
            Здравоохранение Подготовка и реагирование на ЧС Помощь
            социально-уязвимым группам Организационное развитие и международные
            отношения.
          </p>
          <p>
            Красный Полумесяц Кыргызстана – это гуманитарная организация,
            которая работает во всех регионах страны и оказывает помощь
            населению в различных направлениях. НОКП КР имеет 7 областных, 1
            городское и 38 районных филиала, являясь древнейшей гуманитарной
            организацией в стране.
          </p>
        </main>
        <footer>
          <div className="bg-cover h-[100%]" style={footerBackgroundStyle}>
            <p className="px-8 text-sm font-medium">
              Красный Полумесяц старается создать благоприятные условия для
              работы и дальнейшего развития волонтеров. Стать волонтером — это
              хорошая возможность научиться чему-то совершенно новому через
              милосердие, гуманность и неравнодушие.
            </p>
            <div className="flex justify-between px-8 py-7 items-end">
              <div className="text-sm text-black font-medium ">
                <h1>Контакты:</h1>
                <div className="flex items-center gap-2">
                  <img src={phoneIcon} alt="phoneIcon" />
                  <p>+999 999 999 999</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={whatSappIcon} alt="whatSappIcon" />
                  <p>+999 999 999 999</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={linkIcon} alt="linkIcon" />
                  <a href="/">https:dsdsjdskdjsdksjdksdjskdjsd</a>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <img src={instagramIcon} alt="instagramIcon" />
                  <p>@chtotoTam</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={telegramIcon} alt="telegramIcon" />
                  <p>@chtotoTam</p>
                </div>
              </div>
              <div>
                <button className="py-2.5 px-8 text-sm font-medium rounded-sm bg-[#BDE3FF]">
                  Перейти на сайт
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CompanyDetailsPage;

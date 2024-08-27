import React from "react";
import happybirthday from "../assets/happybirthday.png";
import didi from "../assets/didi.png";
import cake from "../assets/cake.png";
import gift from "../assets/gift.png";
import giftpdf from '../assets/giftpdf.pdf';

const Banner = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="flex w-full h-full items-center flex-col -space-y-64">
        <img src={happybirthday} className="h-[500px] w-full" />
        <div className="relative w-full h-full flex justify-between">
          <img
            src={cake}
            className="h-[600px] absolute inset-0 mt-[200px] -ml-14"
          />
          <img
            src={gift}
            className="h-[500px] absolute inset-0 mt-[400px] w-full ml-[30vw]"
          />
          <img
            src={didi}
            className="absolute inset-0 w-[800px] h-[1100px] scale-110"
          />
        </div>
      </div>
      <div className="h-full mt-[1100px] text-center">
        <h1 className="text-8xl font-bold text-ellipsis italic text-gold">
          Happy Birthday Didi!!
        </h1>
        <p className="text-2xl text-justify w-3/4 mx-auto mt-10 italic font-semibold">
          Hiiii!!!!!! Happy Happy Happy Happy Birthday Didi!!! Main toh ek bada
          gift dene wali thi par time nahi mila isliye isi se kaam chala lo
          😉🤗. Par jab time milega tab dungi ekdum mast sa gift. Aur batao?
          Kaisa laga gift? Mast? Ya bohot mast? Main apna creativity dikha hi
          deti hu, hain na!?😁😂 Chalo chalo kitna tareef karungi main khudka.
          Ashirwad toh mummy papa se mil hi jayega, mujhse pyaar le
          lo.❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ Okie Bye!
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-5 mb-10">
        <p className="text-2xl font-semibold text-justify mx-4">
          Arre arre ruko! Kaha chali?? Itni bhi kya jaldi hai? Is button pe toh
          click karo zara!!
        </p>
        <a href={giftpdf} download='gift.pdf'>
          <button className="bg-pink-500 px-5 py-2 rounded-lg text-2xl text-white italic font-semibold">
            Gift🎁🎁
          </button>
        </a>
        <p className="text-xl font-semibold">
          Acha nahi laga toh maaf karna!🤗😊
        </p>
      </div>
    </div>
  );
};

export default Banner;

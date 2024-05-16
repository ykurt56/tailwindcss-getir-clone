import React from "react";

function Cards() {
  return (
    <div className="container mx-auto py-16 ">
      <div className="grid md:grid-cols-3 ">
        <div className="card bg-white rounded-lg text-center border border-gray-100 pb-10 mb-5 ml-2  ">
          <img
            src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
            alt=""
            className="mx-auto pb-4 pt-14"
          />
          <span className="text-primary-brand-color font-semibold text-xl flex justify-center p-2 ">
            Her siparişine bir kampanya
          </span>
          <span className="  mb-5 mt-2 text-gray-500 font-semibold">
            Getir’de vereceğin her siparişe uygun bir kampanya bulabilirsin.
          </span>
        </div>

        <div className="card bg-white rounded-lg text-center  border border-gray-100 pb-10 mb-5 ml-2">
          <img
            src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
            alt=""
            className="mx-auto pb-4 pt-14"
          />
          <span className="text-primary-brand-color font-semibold text-xl flex justify-center p-2 ">
            Dakikalar içinde kapında
          </span>
          <span className="  mb-5 mt-2 text-gray-500 font-semibold ">
            Getir’le siparişin dakikalar içinde kapına gelir.
          </span>
        </div>
        <div className="card bg-white rounded-lg text-center border  border-gray-100 pb-10 mb-5 ml-2  ">
          <img
            src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
            alt=""
            className="mx-auto pb-4 pt-14"
          />
          <span className="text-primary-brand-color font-semibold text-xl flex justify-center p-2 ">
            Binlerce çeşit mutluluk
          </span>
          <span className="  mb-5 mt-2 text-gray-500 font-semibold">
            Getir’de binlerce çeşit arasından seçimini <br /> yapabilirsin.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards;

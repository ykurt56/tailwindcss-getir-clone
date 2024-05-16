import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

function Footer() {
  return (
    <div className="bg-white">
      <div className="container mx-auto grid grid-row-2 ">
        <div className=" mx-auto   grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-x-10  pb-8 border-b-2 border-gray-100 ">
          <div className="  pt-10 ">
            <span className="text-xl text-primary-brand-color font-bold  ">
              Getir'i indir!
            </span>
            <div className="grid grid-rows-3 pt-5">
              <a href="#" className="pt-3">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="#" className="pt-3">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
              <a href="#" className="pt-3">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
              </a>
            </div>
          </div>
          <div className="  pt-10">
            <div className="grid grid-rows-7">
              <span className="text-xl text-primary-brand-color font-bold ">
                Getir'i keşfet
              </span>
              <a href="#" className="pt-2">
                Hakkımızda
              </a>
              <a href="#" className="pt-2">
                Kariyer
              </a>
              <a href="#" className="pt-2">
                Teknoloji Kariyerleri
              </a>
              <a href="#" className="pt-2">
                İletişim
              </a>
              <a href="#" className="pt-2">
                Sosyal Sorumluluk Projeleri
              </a>
              <a href="#" className="pt-2">
                Basın Bültenleri
              </a>
            </div>
          </div>
          <div className="  pt-10">
            <span className="text-xl text-primary-brand-color font-bold ">
              Yardıma mı ihtiyacın var?
            </span>
            <div className="grid grid-rows-6">
              <a href="#" className="pt-3">
                Sıkça Sorulan Sorular
              </a>
              <a href="#" className="pt-3">
                Kişisel Verilerin Korunması
              </a>
              <a href="#" className="pt-3">
                Gizlilik Politikası
              </a>
              <a href="#" className="pt-3">
                Kullanım Koşulları
              </a>
              <a href="#" className="pt-3">
                Çerez Politikası
              </a>
              <a href="#" className="pt-3">
                İşlem Rehberi
              </a>
            </div>
          </div>
          <div className="  pt-10">
            <span className="text-xl text-primary-brand-color font-bold ">
              İş Ortağımız Ol
            </span>
            <div className="grid grid-rows-6">
              <a href="#" className="pt-3">
                Bayimiz Olun
              </a>
              <a href="#" className="pt-3">
                Deponu Kirala
              </a>
              <a href="#" className="pt-3">
                GetirYemek Restoranı Ol
              </a>
              <a href="#" className="pt-3">
                GetirÇarşı İşletmesi Ol
              </a>
              <a href="#" className="pt-3">
                Zincir Restoranlar
              </a>
            </div>
          </div>
          <div className="  pt-10">
            <div className="hidden md:block bg-white h-32 rounded-xl w-32 border border-gray-100 shadow-sm mx-auto 	  ">
              <img
                src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                alt=""
                className="w-20 mx-auto  pt-5"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto ">
          <div className="flex justify-between py-5 ">
            <div className="flex ">
              <span className="text-gray-500 text-sm">© 2024 Getir.</span>
              <li className="ml-5 text-brand-color text-sm">
                <a href="#">
                  <span>Bilgi Toplumu Hizmetleri</span>
                </a>
              </li>
            </div>

            <div className="flex  ">
              <div className="mx-1 text-xl text-gray-500     p-1 transition hover:bg-purple-100 rounded-md hover:text-secondary-brand-color cursor-pointer">
                <FaFacebook />
              </div>
              <div className="mx-1 text-xl text-gray-500     p-1 transition hover:bg-purple-100 rounded-md hover:text-secondary-brand-color cursor-pointer">
                <FaTwitter />
              </div>
              <div className="mx-1 text-xl text-gray-500     p-1 transition hover:bg-purple-100 rounded-md hover:text-secondary-brand-color cursor-pointer">
                <FaInstagram />
              </div>
              <div className="mx-1  text-xl text-gray-500  flex   p-1 transition hover:bg-purple-100 rounded-md hover:text-secondary-brand-color cursor-pointer">
                <BiGlobe />
                <span className="text-sm pl-1">Türkçe (TR)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

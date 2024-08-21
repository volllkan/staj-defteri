"use client";

import CommentSection from "@/app/components/CommentSection";
import Link from "next/link";
import { useParams } from "next/navigation";
import Slider from "react-slick";


export default function DayDetails() {
  const params = useParams();
  const { id } = params;

  const images = [
     "/images/ne-diyon-bayan.jpg",
    "https://i.pinimg.com/564x/bd/f4/a8/bdf4a83abda625effddaf564b34e420e.jpg",
    "https://i.pinimg.com/564x/bd/f4/a8/bdf4a83abda625effddaf564b34e420e.jpg"
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }



  if (!id) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="flex justify-center py-10">
      <div className="max-w-4xl w-full bg-white shadow-md p-6 rounded-lg">
        {/* Slider */}
        <Slider {...sliderSettings} className="mb-6">
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Gün ${id} Görsel ${index + 1}`} className="rounded-lg" />
            </div>
          ))}
        </Slider>

        {/* Başlık ve Diğer İçerikler */}
        <h1 className="text-center text-4xl font-bold mb-4">SU İLE SAĞLIK</h1>

        {/* Bilgiler */}
        <div className="text-center text-gray-500 mb-6">
          <span className="inline-block mr-4">Admin</span>
          <span className="inline-block mr-4">10 Mart, 2024</span>
          <span className="inline-block">0 Yorum</span>
        </div>

        {/* Açıklama */}
        <div className="text-gray-700 leading-relaxed mb-6">
          <p>Cildinizin görünmesi ve yenilenmesi gerektiğini düşünüyoruz...</p>
        </div>

        {/* Yorum Bölümü */}
        <CommentSection dayId={id} />
      </div>
    </div>
  );
}
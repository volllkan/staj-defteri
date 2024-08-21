"use client";
import axios from "axios";
import { useState } from "react";


export default function CommentSection({ dayId }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ad, soyad ve yorumun dolu olup olmadığını kontrol ediyoruz
    if (!firstName.trim() || !lastName.trim() || !comment.trim()) {
      alert("Lütfen ad, soyad ve yorumunuzu girin.");
      return;
    }

    // Yorumları MongoDB'ye kaydetme
    const newComment = { firstName, lastName, comment, dayId };
    try {
      await axios.post("/api/comments", newComment); // Backend tarafında /api/comments endpoint'i oluşturulmalı
      setComments([...comments, newComment]);
      setFirstName("");
      setLastName("");
      setComment("");
    } catch (error) {
      console.error("Yorum kaydedilirken hata oluştu:", error);
    }
  }; 

  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-8">
      {/* Yorum Formu */}
      <h2 className="text-2xl font-semibold mb-4">Yorum Yap</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Adınız"
          className="w-full p-4 text-gray-700 bg-white border border-gray-300 rounded-lg mb-4"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Soyadınız"
          className="w-full p-4 text-gray-700 bg-white border border-gray-300 rounded-lg mb-4"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <textarea
          placeholder="Yorumunuzu buraya yazın"
          className="w-full p-4 text-gray-700 bg-white border border-gray-300 rounded-lg mb-4"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Gönder
        </button>
      </form>

      {/* Yorumlar Listesi */}
      <div>
        <h3 className="text-xl font-medium mb-4">Yorumlar</h3>
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-700">{c.comment}</p>
              <p className="text-gray-500 text-sm">- {c.firstName} {c.lastName}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Henüz yorum yapılmamış.</p>
        )}
      </div>
    </div>
  );
}

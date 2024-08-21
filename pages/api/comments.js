import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, comment, dayId } = req.body;

    if (!firstName || !lastName || !comment) {
      return res.status(400).json({ message: "Ad, soyad ve yorum gereklidir." });
    }

    // MongoDB bağlantısı
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const commentsCollection = db.collection('comments');

    // Yorum kaydetme
    await commentsCollection.insertOne({
      firstName,
      lastName,
      comment,
      dayId,
      createdAt: new Date(),
    });

    client.close();

    res.status(201).json({ message: "Yorum başarıyla kaydedildi!" });
  } else {
    res.status(405).json({ message: "Yalnızca POST metodu desteklenir." });
  }
}

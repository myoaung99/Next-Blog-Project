import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    const { email, userName, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !userName ||
      userName.trim().length === 0 ||
      !message ||
      message.trim().length === 0
    ) {
      res.status(400).json({ message: "Invalid input" });
      return;
    }

    const contact = {
      name: userName,
      email,
      text: message,
    };

    const client = await MongoClient.connect(
      "mongodb+srv://myomyintaung:fnztBRvFTIOAzodL@cluster0.zq497.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db("blog");

    await db.collection("contacts").insertOne({ ...contact });
    res.status(201).json({ message: "Message sent successfully" });
  }
};
export default handler;

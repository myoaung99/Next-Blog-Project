import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, userName, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !userName ||
      userName.trim().length === 0 ||
      !message ||
      message.trim().length === 0
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const contact = {
      name: userName,
      email,
      text: message,
    };

    let client;

    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.mongodb.net/?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectString);
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message || "Connecting to server failed!" });
      client.close();
      return;
    }

    const db = client.db(process.env.mongodb_database); // database name

    try {
      await db.collection("contacts").insertOne({ ...contact }); // collection name
    } catch (error) {
      res.status(402).json({ message: "Inserting to database failed." });
      client.close();
      return;
    }

    res.status(201).json({ message: "Message sent successfully" });
    client.close();
  }
};
export default handler;

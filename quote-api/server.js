import express from "express";
import { db } from "./config/firebase.js";

const PORT = parseInt(process.env.PORT || "3000", 10) || 3000;
const app = express();

app.get("/", (req, res) => res.send("Hello, welcome to quote-management API"));

// Use the firebase admin SDK to interact with Firestore

app.post("/quotes", async (req, res) => {
  try {
    const { quoteText } = req.body;
    const docRef = await db.collection("quotes").doc("quote");
    docRef.set({
      quote: quoteText,
    });
    res.send("Quote added to Firestore");
  } catch (err) {
    console.error("Error: " + err);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/quotes", async (req, res) => {
  try {
    const snapshot = await db.collection("quotes").get();
    const quotes = snapshot.docs.map((doc) => doc.data());
    res.status(200).json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/quotes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await db.collection("quotes").doc(id).get();
    if (!doc.exists) {
      return res.status(404).json({ error: "Quote not found" });
    }
    const quote = doc.data();
    res.status(200).json(quote);
  } catch (err) {
    console.error("Error: " + err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("quotes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await db.collection("quotes").doc(id).get();
    if (!doc.exists) {
      return res
        .status(404)
        .json({ error: "The quote you want to update was not found" });
    }
    const updatedQuote = doc.data;
    res.status(200).json(updatedQuote);
  } catch (err) {
    console.error("Error: " + err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("quotes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const collection = db.collection("quotes");
    const doc = collection.doc(id).get();
    if (!doc.exists) {
      return res
        .status(404)
        .json({ error: "The quote you want to delete was not found" });
    }
    collection.doc(id).delete();
    res.status(200).send(`Quote with ID: ${id} well deleted`);
  } catch (err) {
    console.error("Error: " + err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

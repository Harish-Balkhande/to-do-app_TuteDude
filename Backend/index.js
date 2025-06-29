import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(cors({
     origin: 'http://localhost:3000'
}));

// Connect to local MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// Define Schema and Model
const TodoItemSchema = new mongoose.Schema({
  itemName: String,
  itemDescription: String,
});

const TodoItem = mongoose.model('TodoItem', TodoItemSchema);

// Routes
app.post('/submittodoitem', async (req, res) => {
  const { itemName, itemDescription } = req.body;
  try {
    const newItem = new TodoItem({ itemName, itemDescription });
    await newItem.save();
    res.status(201).send('Item saved successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving item');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

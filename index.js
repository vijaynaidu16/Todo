const express = require("express");
const jwt = require("jsonwebtoken");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      message: "You send the wrong inputs",
    });
  }
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatedPayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatedPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      message: "You send the wrong inputs",
    });
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(PORT || 8000, () => {
  console.log(`server running on ${PORT}`);
});

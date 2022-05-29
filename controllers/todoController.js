const { Todo } = require('../model');

module.exports = {
  createTodo: async (req, res) => {
    const {
      text,
      completed
    } = req.body;

    try {
      const newTodo = await Todo.create({
        text,
        completed
      });
      res.json(newTodo);
    } catch (e) {
      res.json(err);
    }
  },
  getAllTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (e) {
      res.json(e);
    }
  },
  getTodoById: async (req, res) => {
    const {
      todoId
    } = req.params;
    try {
      const todo = await Todo.findById(todoId);
      res.json(todo);
    } catch (e) {
      res.json(e);
    }
  },
  updateTodoById: async (req, res) => {
    const {
      todoId
    } = req.params;
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        todoId, {
          ...req.body
        }, {
          new: true,
        }
      );
      res.json(updatedTodo);
    } catch (e) {
      res.json(e);
    }
  },
  deleteTodoById: async (req, res) => {
    const {
      todoId
    } = req.params;
    try {
      const deleteTodo = await Todo.findByIdAndDelete(todoId);
      res.json(deleteTodo);
    } catch (e) {
      res.json(e);
    }
  }
}
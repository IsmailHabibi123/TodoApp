import express from 'express';
import pool from '../Models/dbConfig.js';

const router = express.Router();

//Get all todos
router.get("/todos", async (req,res) => {
    try {
        const todos = await pool.query("SELECT * FROM todo");
        res.status(200).json(todos.rows)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

//Get a specific todo
router.get("/todos/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT description FROM todo WHERE td_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }

})

//Create todo
router.post("/todos", async (req,res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

//Delete todo
router.delete("/todos/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deletedTodo = await pool.query("DELETE from todo where td_id = $1 RETURNING *",[id]);
        res.json("Todo deleted")
    } catch (error) {
        res.status(400).send(error.message);
    }
})

//Update todo
router.put("/todos/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updatedTodo = await pool.query("UPDATE todo SET description = $1 WHERE td_id = $2", [description,id]);
        res.json("Todo updated");
    } catch (error) {
        res.status(400).send(error.message);
    }
})


export default router;
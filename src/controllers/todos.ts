import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";

const todos: Todo[] = [];

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    try{
        const task = (req.body as {task: string}).task;
        const newTodo = new Todo (Math.random().toString(), task);
        todos.push(newTodo);
        res.status(201).json({
            message: 'Created new todo.',
             createdTodo: newTodo
        });
    }
    catch(err){
        console.log(err);
    }
}

export const getTodos = (req: Request, res: Response, next: NextFunction) => {
    try{
        res.status(201).json({todos: todos});
    } catch(err){
        console.log(err);
    }
};
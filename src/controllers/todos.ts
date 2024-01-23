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

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
    try{
        const todoId = req.params.id;
        const updatedTask = (req.body as {task: string}).task;
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        if(todoIndex < 0){
            throw new Error('Could not find todo.');
        }
        todos[todoIndex] = new Todo (todos[todoIndex].id, updatedTask);
        res.status(201).json({message: 'Updated todo.', updatedTodo: todos[todoIndex]});
    } catch(err){
        console.log(err);
    }
};

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
    try{
        const todoId = req.params.id
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        if(todoIndex < 0){
            throw new Error('Could not find todo.');
        }
        todos.splice(todoIndex, 1);
        res.status(201).json({message: 'Todo deleted.'});
    } catch(err){
        console.log(err);
    }
}
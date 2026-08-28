import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

export const getAllTasks = (req: Request, res: Response): void => {
  const tasks = taskService.findAll();
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response): void => {
  const task = taskService.findById(req.params.id);
  if (!task) {
    res.status(404).json({ message: 'タスクが見つかりません。' });
    return;
  }
  res.json(task);
};

export const createTask = (req: Request, res: Response): void => {
  const { title, description } = req.body;
  if (!title) {
    res.status(400).json({ message: 'タイトルは必須です。' });
    return;
  }
  const newTask = taskService.create({ title, description });
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response): void => {
  const updatedTask = taskService.update(req.params.id, req.body);
  if (!updatedTask) {
    res.status(404).json({ message: 'タスクが見つかりません。' });
    return;
  }
  res.json(updatedTask);
};

export const deleteTask = (req: Request, res: Response): void => {
  const success = taskService.remove(req.params.id);
  if (!success) {
    res.status(404).json({ message: 'タスクが見つかりません。' });
    return;
  }
  res.status(204).send();
};

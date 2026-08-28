import { Task, CreateTaskInput, UpdateTaskInput } from '../types/task';

// インメモリデータベースの代用
let tasks: Task[] = [
  { id: '1', title: '環境構築', description: 'Node.js, TypeScript, VS Codeをセットアップする', completed: true },
  { id: '2', title: 'Copilotの体験', description: 'AskモードでTypeScriptコードの概要を把握する', completed: false }
];

export const findAll = (): Task[] => tasks;

export const findById = (id: string): Task | undefined => tasks.find((t) => t.id === id);

export const create = ({ title, description }: CreateTaskInput): Task => {
  const newTask: Task = {
    id: String(tasks.length + 1),
    title,
    description: description || '',
    completed: false
  };
  tasks.push(newTask);
  return newTask;
};

export const update = (id: string, updates: UpdateTaskInput): Task | null => {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return null;
  tasks[index] = { ...tasks[index], ...updates };
  return tasks[index];
};

export const remove = (id: string): boolean => {
  const initialLength = tasks.length;
  tasks = tasks.filter((t) => t.id !== id);
  return tasks.length !== initialLength;
};

import { normalize, denormalize, schema } from 'normalizr';

const subTaskSchema = new schema.Entity(
    'subTasks',
    {},
    { idAttribute: value => value.taskId + "_" + value.id}
);

const taskSchema = new schema.Entity(
    'tasks',
    { subTasks: [subTaskSchema] },
    { idAttribute: value => value.id }
);

const todoSchema = new schema.Entity(
    'todo', 
    { tasks: [taskSchema] }
);

export const normalizeTodo = todo => normalize(todo, todoSchema);
export const normalizeTask = task => normalize(task, taskSchema);
export const normalizeSubTask = subTask => normalize(subTask, subTaskSchema);

export const denormalizeTodo = normalizedTodo => denormalize(normalizedTodo.result, todoSchema, normalizedTodo.entities);
export const denormalizeTask = normalizedTask => denormalize(normalizedTask.result, taskSchema, normalizedTask.entities);
export const denormalizeSubTask = normalizedSubTask => denormalize(normalizedSubTask.result, subTaskSchema, normalizedSubTask.entities);
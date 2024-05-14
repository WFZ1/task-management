'use client';

import { useState } from 'react';
import { TasksTable } from './tasks-table';
import data from '../data/tasks.json';

export const Tasks = () => {
    const [tasks, setTasks] = useState(data);

    return <TasksTable data={tasks} onUpdateData={setTasks} />;
};

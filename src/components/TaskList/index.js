import React, { useState } from 'react';
import TaskForm from '../TaskForm';
import Task from '../Task';
import { Button } from './styles';


function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (!task.text) {
      return;
    }

    const newTasks = [task, ...tasks];

    setTasks(newTasks);
  };

  const updateTask = (taskId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
  };

  const removeTask = id => {
    const removedArr = [...tasks].filter(task => task.id !== id);

    setTasks(removedArr);
  };

  const completeTask = id => {
    let updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    
    setTasks(updatedTasks);
  };

  const greed = () => {
    //Sort tasks by ascending initial time
    const sortedTasks = tasks.sort((a, b) => (a.finalTime > b.finalTime) ? 1 : -1)
    let optimizedTasks = [];
    let currentTask;

    for (var i = 0; i < sortedTasks.length; i++) {
      if (i === 0) {
        optimizedTasks.push(sortedTasks[i])
        currentTask = sortedTasks[i];
      }
      else {
        if (sortedTasks[i].initialTime >= currentTask.finalTime) {
          optimizedTasks.push(sortedTasks[i]);
          currentTask = sortedTasks[i];
        }
      }
    }
    setTasks(optimizedTasks)
  }

  return (
    <>
      <h1>Quais são suas tarefas para hoje?</h1>
      <TaskForm submit={addTask} />
      <Task
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
      <Button type='button' onClick={() => greed()}>Otimizar</Button>
    </>
  );
}

export default TaskList;

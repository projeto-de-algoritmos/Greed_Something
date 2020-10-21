import React, { useState } from 'react';
import TaskForm from '../TaskForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import { Container, Icons } from './styles';

function Task({ tasks, completeTask, removeTask, updateTask }){
  const [edit, setEdit] = useState({
    id: null,
    text: '',
    initialTime: '00:00',
    finalTime: '00:00'
  });

  const submitUpdate = value => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      text: '',
      initialTime: '00:00',
      finalTime: '00:00'
    });
  };

  if (edit.id) {
    return <TaskForm edit={edit} submit={submitUpdate} />;
  }

  return tasks.map((task, index) => (
    <Container
      complete={task.isComplete}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <Icons>
        <RiCloseCircleLine
          onClick={() => removeTask(task.id)}
          style={{ marginRight: '5px', color: '#fff'}}
        />
        <TiEdit
          onClick={() => setEdit({ 
            id: task.id, 
            text: task.text, 
            initialTime: task.initialTime,
            finalTime: task.finalTime })}
          style={{color: '#fff'}}
        />
      </Icons>
    </Container>
  ));
};

export default Task;

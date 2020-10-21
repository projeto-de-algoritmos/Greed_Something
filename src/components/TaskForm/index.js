import React, { useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';

import { Container, Input, Button, EditButton, TimeContainer } from './styles';

function TaskForm({ edit, submit }) {
  const [text, setText] = useState(edit ? edit.text : '');
  const [initialTime, setInitialTime] = useState(edit ? edit.initialTime : '00:00');
  const [finalTime, setFinalTime] = useState(edit ? edit.finalTime : '00:00');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChangeText = e => {
    setText(e.target.value);
  };

  const handleChangeInitialTime = e => {
    setInitialTime(e.target.value);
  };

  const handleChangeFinalTime = e => {
    setFinalTime(e.target.value);
  };


  const handleSubmit = e => {
    e.preventDefault();

    submit({
      id: Math.floor(Math.random() * 10000),
      text: text,
      initialTime: initialTime,
      finalTime: finalTime
    });
    setText('');
    setInitialTime('00:00');
    setFinalTime('00:00');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '32px'}}>
      {edit ? (
        <Container>
          <Input
            placeholder='atualize a tarefa'
            value={text}
            onChange={handleChangeText}
            name='text'
            ref={inputRef}
            edit
          />
          <TimeContainer edit>
            <TextField
              id="start"
              label="Inicio"
              type="time"
              defaultValue="00:00"
              value={initialTime}
              onChange={handleChangeInitialTime}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, 
              }}
            />
          </TimeContainer>
          <TimeContainer edit>
            <TextField
              id="end"
              label="Fim"
              type="time"
              defaultValue="00:00"
              value={finalTime}
              onChange={handleChangeFinalTime}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, 
              }}
            />
          </TimeContainer>
          <EditButton onClick={handleSubmit}>
            Atualizar
          </EditButton>
        </Container>
      ) : (
        <Container>
          <Input
            placeholder='Tarefa'
            value={text}
            onChange={handleChangeText}
            name='text'
            ref={inputRef}
          />
          <TimeContainer>
            <TextField
              id="start"
              label="Inicio"
              type="time"
              value={initialTime}
              defaultValue="00:00"
              onChange={handleChangeInitialTime}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300,
              }}
            />
          </TimeContainer>
          <TimeContainer>
            <TextField
              id="end"
              label="Fim"
              type="time"
              defaultValue="00:00"
              value={finalTime}
              onChange={handleChangeFinalTime}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, 
              }}
              style={{ color: '#fff !important'}}
            />
          </TimeContainer>
          <Button onClick={handleSubmit}>
            Adicionar tarefa
          </Button>
        </Container>
      )}
    </form>
  );
}

export default TaskForm;

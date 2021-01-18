import React from 'react';
import { Tabs } from 'antd';
import Todos from '../Daily/Todos/container';
import Notes from '../Daily/Notes/container';
import AllNotes from '../Notes';

import { Container } from './styles';

const { TabPane } = Tabs;

const TodoApp: React.FC = () => {
  const callback = (key: string) => {
    console.log(key);
  };

  return (
    <Container>
      <Tabs defaultActiveKey="d-todo" onChange={callback}>
        <TabPane tab="Daily todo" key="d-todo">
          <Notes />
        </TabPane>
        <TabPane tab="Daily notes" key="d-notes">
          <Todos />
        </TabPane>
        <TabPane tab="Notes" key="notes">
          <AllNotes />
        </TabPane>
      </Tabs>
    </Container>
  );
};

export default TodoApp;

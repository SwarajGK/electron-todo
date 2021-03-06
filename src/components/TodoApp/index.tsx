import React from 'react';
import { Tabs } from 'antd';
import Todos from '../Daily/Todos/container';
import Notes from '../Daily/Notes/container';

import { Container } from './styles';

const { TabPane } = Tabs;

const TodoApp: React.FC = () => {
  const callback = (key: string) => {
    console.log('Key: ', key);
  };

  return (
    <Container>
      <div className="left-panel">
        <Tabs defaultActiveKey="d-todo" onChange={callback}>
          <TabPane tab="Daily todo" key="d-todo">
            <Todos />
          </TabPane>
          <TabPane tab="Daily notes" key="d-notes">
            <Notes />
          </TabPane>
        </Tabs>
      </div>
      <div className="right-panel">This is the main view</div>
    </Container>
  );
};

export default TodoApp;

import React from "react";

import { Container, SectionWrapper, Title, TaskList, TaskIcon,
  Task, TaskDesc} from "./MainTasks.styled";
import taskList from "./taskList";

const MainTasks: React.FC = () => {
  return <Container>
    <SectionWrapper>
      <Title>Основні завдання</Title>
      <TaskList>
        {taskList.map(({ id, icon, desc }) => {
          return <Task key={id}>
            <TaskIcon src={icon} alt="task icon" />
            <TaskDesc>{desc}</TaskDesc>
          </Task>;
        })}
      </TaskList>
    </SectionWrapper>
  </Container>;
};
export default MainTasks;
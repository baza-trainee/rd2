import React from "react";

import {useTranslation} from "react-i18next";

import { Container, SectionWrapper, Title, TaskList, TaskIcon,
  Task, TaskDesc} from "./MainTasks.styled";

import taskList from "./taskList";

const MainTasks: React.FC = () => {

  const { t } = useTranslation();

  const tasksDescArr = t("main_tasks_block.desc", { returnObjects: true });

  return <Container>
    <SectionWrapper>
      <Title>Основні завдання</Title>
      <TaskList>
        {taskList.map(({ id, icon, desc }, index) => {
          return <Task key={id}>
            <TaskIcon src={icon} alt="task icon" />
            <TaskDesc>{tasksDescArr[index]}</TaskDesc>
          </Task>;
        })}
      </TaskList>
    </SectionWrapper>
  </Container>;
};
export default MainTasks;
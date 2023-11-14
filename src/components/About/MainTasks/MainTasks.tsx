import React from "react";

import {useTranslation} from "react-i18next";

import { Container, SectionWrapper, Title, TaskList, TaskIcon,
  Task, TaskDesc} from "./MainTasks.styled";

import taskList from "./taskList";

const MainTasks: React.FC = () => {

  const { t } = useTranslation();

  return <Container>

    <SectionWrapper>

      <Title>{t("main_tasks_block.title")}</Title>

      <TaskList>
        {taskList.map(({ id, icon, descKey}) => {
          return <Task key={id}>
            <TaskIcon src={icon} alt="task icon" />
            <TaskDesc>{t(descKey)}</TaskDesc>
          </Task>;
        })}
      </TaskList>

    </SectionWrapper>

  </Container>;
};
export default MainTasks;
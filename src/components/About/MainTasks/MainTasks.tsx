import { useTranslation } from "react-i18next";

import {
  Container,
  SectionWrapper,
  Title,
  TaskList,
  TaskIcon,
  Task,
  TaskDesc,
} from "components/About/MainTasks/MainTasks.styled";

import { taskList } from "components/About/MainTasks/taskList";

export const MainTasks = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SectionWrapper>
        <Title>{t("main_tasks_block.title")}</Title>

        <TaskList>
          {taskList.map(({ id, icon, descKey }) => (
            <Task key={id}>
              <TaskIcon src={icon} alt="task icon" />
              <TaskDesc>{t(descKey)}</TaskDesc>
            </Task>
          ))}
        </TaskList>
      </SectionWrapper>
    </Container>
  );
};

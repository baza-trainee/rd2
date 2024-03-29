import styled from "@emotion/styled";

import bgMob from "assets/images/tasks/task-bg-mob.jpg";
import bgTab from "assets/images/tasks/task-bg-tab.jpg";
import bgDesk from "assets/images/tasks/task-bg-desk.jpg";

const Container = styled.section`
  position: relative;
  width: 100%;
  background: #6c7d8d url(${bgMob}) no-repeat;
  background-position: 50% 50%;
  background-size: auto 100%;
  @media (min-width: 768px) {
    background: #6c7d8d url(${bgTab}) no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }
  @media (min-width: 1280px) {
    background: #6c7d8d url(${bgDesk}) no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }
`;
const SectionWrapper = styled.div`
  width: 360px;
  padding: 32px 16px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
    padding: 40px 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 40px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
const Title = styled.h2`
  margin: 0;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  color: #f5f5f5;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
const TaskList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -20px -12px;
  }
`;
const Task = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  color: #f5f5f5;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  @media (min-width: 768px) {
    width: calc((100% - 48px) / 2);
    margin: 20px 12px;
    align-items: flex-start;
  }
  @media (min-width: 1280px) {
    width: calc((100% - 72px) / 3);
  }
`;
const TaskIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;
const TaskDesc = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  @media (min-width: 768px) {
    width: 275px;
  }
  @media (min-width: 1280px) {
    width: 367px;
  }
`;
export { Container, SectionWrapper, Title, TaskList, TaskIcon, Task, TaskDesc };

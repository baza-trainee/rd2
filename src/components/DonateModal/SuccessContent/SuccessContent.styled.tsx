import styled from "@emotion/styled";

import bgImage from "../../../assets/images/successModal/drone.png";

const Wrapper = styled.div`
  height: 100%;
  padding-top: 300px;

  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  
  background-image: url(${bgImage});

  @media (min-width: 468px) {
    background-size: 80%;
  }

  @media (min-width: 768px) {
    background-position: center top;
    background-size: 100%;
  }

  @media (min-width: 1280px) {
    padding-top: 400px;
    background-size: 80%;
  }
`

export {Wrapper}
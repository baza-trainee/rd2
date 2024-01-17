import styled from "@emotion/styled";

import bgImage from "assets/images/successModal/drone.png";
import bgImageRetina from "assets/images/successModal/drone@2x.png";

export const Wrapper = styled.div`
  height: 100%;
  padding-top: 300px;

  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;

  background-image: url(${bgImage});

  & h2 {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 468px) {
    background-size: 80%;
  }

  @media (min-width: 768px) {
    background-position: center top;
    background-size: 100%;
  }

  @media (min-width: 1280px) {
    background-size: 80%;
  }

  @media (min-resolution: 2dppx) {
    background-image: url(${bgImageRetina});
  }
`;

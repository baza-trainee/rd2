import styled from "@emotion/styled";

import bgMob from "../../../assets/images/contactForm/bg-mob.jpg";
import bgTab from "../../../assets/images/contactForm/bg-desk.jpg";
import bgDesk from "../../../assets/images/contactForm/bg-desk.jpg";

const Container = styled.section`
position: relative;
width: 100%;
background: #C8DBE1 url(${bgMob}) no-repeat;
background-position: 50% 50%;
background-size: auto 100%;
@media (min-width: 768px) {
	background: #C8DBE1 url(${bgTab}) no-repeat;
    background-position: 50% 50%;
    background-size: cover;

}
@media (min-width: 1440px) {
	background: #C8DBE1 url(${bgDesk}) no-repeat;
    background-position: 50% 50%;
    background-size: cover;
}
`;
const SectionWrapper = styled.div`
position: relative;
width: 360px;
padding: 32px 16px 41px 16px;
margin: 0 auto;

@media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 768px;
    padding: 32px 32px 40px 32px;

}
@media (min-width: 1440px) {
    width: 1440px;
    padding: 40px 40px 60px 40px;

}
`;
const Desc = styled.p`
margin: 0;
font-size: 20px;
font-weight: 600;
line-height: 150%;
margin-bottom: 32px;
@media (min-width: 768px) {
    width: 229px;
    font-size: 24px;
    transform: translateY(-8px);
}
@media (min-width: 1440px) {
    width: 610px;
    font-size: 32px;
    transform: translateY(0);


}
`;
const Modal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 328px;
height: 160px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
border: 1px solid #1B3969;
background: #FFF;
@media (min-width: 768px) {
    width: 446px;
    height: 202px;
}
`
const CloseBtn = styled.button`
position: absolute;
top: 16px;
right: 16px;
background: transparent;
border: none;
outline: none;
cursor: pointer;
`;
const ModalText = styled.p`
font-size: 14px;
line-height: 150%;
@media (min-width: 768px) {
    font-size: 20px;
}
`;

export { Container, SectionWrapper, Desc, Modal, CloseBtn, ModalText };
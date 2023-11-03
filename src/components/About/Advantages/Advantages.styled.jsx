import styled from "@emotion/styled";

const Container = styled.section`
width: 100%;
background-color: #F5F5F5;
`;
const SectionWrapper = styled.div`
width: 360px;
padding: 72px 16px;
margin: 0 auto;
@media (min-width: 768px) {
    width: 768px;
    padding: 80px 32px;

}
@media (min-width: 1440px) {
    width: 1440px;
    padding: 120px 40px;

}
`;
const DescWrap = styled.div`
margin-bottom: 40px;

@media (min-width: 768px) {
    display: flex;
}
@media (min-width: 1440px) {
    align-items: center;
    padding: 12px 0;
    margin-bottom: 60px;
}

`;
const Title = styled.h2`
margin: 0;
font-size: 40px;
font-weight: 600;
text-align: center;
@media (min-width: 768px){
    width: 260px;
    text-align: start;
}
@media (min-width: 1440px) {
    width: 367px;
}
`;
const Divider = styled.span`
display: inline-block;
width: 100%;
height: 1px;
margin: 16px 0;
background-color: #151515;
@media (min-width: 768px) {
    display: block;
    width: 1px;
    height: 144px;
    margin: 0 24px;
}
@media (min-width: 1440px) {
    height: 66px;
    margin: 0 32px;
}
`;
const Desc = styled.p`
@media (min-width: 768px) {
    width: 396px;
}
@media (min-width: 1440px) {
    width: 760px;
}
`;
const AdvantageList = styled.ul`
margin: 0;
padding: 0;
list-style: none;
@media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
}

`;
const AdvantageCard = styled.li`
width: 100%;
overflow: hidden;
border-radius: 24px;
@media (max-width: 768px){
    &:not(:last-child){
        margin-bottom: 40px;
    }
}    
@media (min-width: 768px){
    display: flex;
    &:not(:last-child){
        margin-bottom: 16px;
    }
}
@media (min-width: 1440px) {
    display: block;
    width: calc((100% - 32px)/3);
    &:not(:last-child){
        margin-bottom: 0px;
    }
}

`;
const AdvantageImgBox = styled.div`
display: flex;
justify-content: center;
overflow: hidden;
@media (min-width: 768px) and (max-width: 1439.5px){
    width: 340px;
    height: 240px;
}
`;
const AdvantageImg = styled.img`
display: block;
height: 100%;
width: 100%;
`;
const AdvantageDescBox = styled.div`
flex: 1;
height: 100%;
padding: 24px;
background-color: #fff;
@media (min-width: 768px) {
    height: auto;
    padding: 16px 16px 27px 40px;
}
@media (min-width: 1440px) {
    height: 100%;
    padding: 24px 24px 68px 24px;
}
`;
const AdvantageTitle = styled.h3`
margin: 0;
margin-bottom: 16px;
font-size: 20px;
font-weight: 600;
`;


export {
  Container, DescWrap, Divider, Desc, Title, AdvantageList, AdvantageCard,
  AdvantageImgBox, AdvantageImg, AdvantageTitle, AdvantageDescBox, SectionWrapper,
};
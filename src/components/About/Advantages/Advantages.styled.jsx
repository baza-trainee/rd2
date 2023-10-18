import styled from "@emotion/styled";

const Container = styled.section`
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
display: flex;
align-items: center;
`;
const Title = styled.h2`
font-size: 40px;
font-weight: 600;
@media (min-width: 768px) {
    margin-bottom: 40px;
}
`;
const Divider = styled.span`

`;
const Desc = styled.p`

`;
const AdvantageList = styled.ul`
`;
const AdvantageImgBox = styled.div`
`;
const AdvantageImg = styled.img`
`;
const AdvantageItem = styled.li`
`;
const AdvantageTitle = styled.h3`
`;
const AdvantageDesc = styled.p`
`;

export {
    Container, DescWrap, Divider, Desc, Title, AdvantageList, AdvantageItem,
    AdvantageImgBox, AdvantageImg, AdvantageTitle, AdvantageDesc,
}
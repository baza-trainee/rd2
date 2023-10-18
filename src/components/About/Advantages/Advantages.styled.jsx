import styled from "@emotion/styled";

const Container = styled.section`
width: 360px;
background-color: #6C7D8D;
@media (min-width: 768px) {
	width: 768px;

}
@media (min-width: 1440px) {
	width: 1440px;
}
`
const SectionWrapper = styled.div`
width: 100%;
padding: 32px 16px;
@media (min-width: 768px) {
    padding: 40px 32px;

}
@media (min-width: 1440px) {
    padding: 40px;
}
`
export {Container}
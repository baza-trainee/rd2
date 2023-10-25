import styled from "@emotion/styled";

const FormEl = styled.form`
width: 100%;
border-radius: 24px;
background: #FDFDFD;
display: flex;
flex-direction: column;
padding: 62px 16px 32px 16px;
@media screen and (min-width: 768px) {
  width: 60%;
  padding: 98px 60px 60px 60px;

}
@media screen and (min-width: 1440px) {
  width: 712px;

}
`;

const FieldContainer = styled.div`
position: relative;
&:not(:first-child) {
  margin-top: 51px;
}
&:last-child{
  margin-bottom: 32px;
}

`;

const Input = styled.input`
height: 64px;
width: 100%;
font-size: 20px;
border:1px solid #F5F5F5;
border-radius: 5px;
background-color: #F5F5F5;
padding: 16px;
outline: none; 
`;

const FieldLabel = styled.label`
position: absolute;
top: -38px;
left: 0;
font-size: 14px;
font-weight: 600;
color: #151515;
line-height: 30px;
font-size: 20px;
pointer-events: none;

@media screen and (min-width: 1440px) {
  line-height: 27.24px;
}
`;

const Textarea = styled.textarea`
font-size: 20px;
border:1px solid #F5F5F5;
border-radius: 5px;
background-color: #F5F5F5;
padding: 16px;
height: 300px;
outline: none;
width: 100%;
resize: none;
`;

const FormError = styled.span`
font-size: 12px;
line-height: 150%;
color: #A0041E;
margin-top: 3px;
`;

export { FormEl, FieldContainer, Input, FieldLabel, Textarea, FormError };
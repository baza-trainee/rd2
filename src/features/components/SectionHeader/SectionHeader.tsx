import {
  DescWrap,
  Title,
  Divider,
  Desc,
} from "features/components/SectionHeader/SectionHeader.styled";

interface Props {
  title: string;
  children?: string;
}

export const SectionHeader = ({ title, children }: Props): JSX.Element => {
  return (
    <DescWrap>
      <Title>{title}</Title>
      <Divider></Divider>
      {children && <Desc>{children}</Desc>}
    </DescWrap>
  );
};

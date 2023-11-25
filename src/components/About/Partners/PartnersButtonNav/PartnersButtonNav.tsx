import { Next, Prev } from "./PartnersButtonNav.styled";

interface Props {
  imageSrc: string;
  prev?: boolean;
  next?: boolean;
}

export const PartnersButtonNav = ({ imageSrc, prev, next }: Props) => {
  return (
    <>
      {prev && (
        <Prev className="prev">
          <img src={imageSrc} alt={imageSrc} />
        </Prev>
      )}
      {next && (
        <Next className="next">
          <img src={imageSrc} alt={imageSrc} />
        </Next>
      )}
    </>
  );
};

import { IntroduceCard as Card } from "components/About/Introduce/introduceList";
import { IntroduceCard } from "components/About/Introduce/IntroduceCard/IntroduceCard";

interface Props {
  list: Card[];
}

export const IntroduceList = ({ list }: Props) => {
  return (
    <>
      {list.map(
        ({
          id,
          desktopImage,
          desktopImage2,
          tabletImage,
          tabletImage2,
          mobileImage,
          mobileImage2,
        }) => {
          const isEval = id % 2 === 0;

          return (
            <IntroduceCard
              key={id}
              id={id}
              isEval={isEval}
              desktopImage={desktopImage}
              desktopImage2={desktopImage2}
              tabletImage={tabletImage}
              tabletImage2={tabletImage2}
              mobileImage={mobileImage}
              mobileImage2={mobileImage2}
            />
          );
        },
      )}
    </>
  );
};

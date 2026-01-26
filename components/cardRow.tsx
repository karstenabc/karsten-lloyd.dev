import { Card, CardProps } from "./card";
import { Qualification, QualificationProps } from "./qualification";
import { ViewAllButton } from "./viewAllButton";

export interface CardRowProps {
  title: string;
  cards?: CardProps[];
  qualificationCards?: QualificationProps[];
  showTitle?: boolean;
  showViewAllButton?: boolean;
}

export const CardRow = ({
  title,
  cards = [],
  qualificationCards = [],
  showTitle = true,
  showViewAllButton = false,
}: CardRowProps) => {
  if (cards.length === 0 && qualificationCards.length === 0) {
    return null;
  }

  return (
    <>
      {showTitle ? (
        <h2 id={title} className="text-center pt-3 pb-2">
          {title}
        </h2>
      ) : (
        <br />
      )}
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4">
            <Card {...card} key={card.slug} />
          </div>
        ))}

        {qualificationCards.map((qualification, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4">
            <Qualification {...qualification} />
          </div>
        ))}
      </div>
      {showViewAllButton && cards[0]?.type && <ViewAllButton title={title} link={cards[0].type} />}
      <br />
    </>
  );
}

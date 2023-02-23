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
}: CardRowProps) => (
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
          <Card
            title={card.title}
            body={card.body}
            colour={card.colour}
            date_from={card.date_from}
            date_to={card.date_to}
            slug={card.slug}
            specifications={card.specifications}
            footer={card.footer}
            key={card.slug}
            type={card.type}
          />
        </div>
      ))}

      {qualificationCards.map((qualification, index) => (
        <div key={index} className="col-sm-12 col-md-6 col-lg-4">
          <Qualification
            course={qualification.course}
            achieved_at={qualification.achieved_at}
            expires_at={qualification.expires_at}
            colour={qualification.colour}
            organisation={qualification.organisation}
            slug={qualification.slug}
            url={qualification.url}
          />
        </div>
      ))}
    </div>
    {showViewAllButton && <ViewAllButton title={title} link={cards[0].type} />}
    <br />
  </>
);

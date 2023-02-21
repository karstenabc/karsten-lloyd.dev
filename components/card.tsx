import styles from "./card.module.css";
import { Markup } from "interweave";
import { Montserrat } from "@next/font/google";
import { useEffect, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

// Return formatted string for dates
const dateString = (start: string, end: string) => {
  const options = { year: "numeric", month: "long" } as const;
  let from = new Date(start).toLocaleDateString("en-UK", options);
  let to = end ? new Date(end).toLocaleDateString("en-UK", options) : "Present";
  return `${from} - ${to}`;
};

interface CardSpecifications {
  specs: {
    name: String;
    details: String;
  }[];
  isTable: boolean;
  hasLinks: boolean;
}

// Return specification section
const Specifications = ({ specs, isTable, hasLinks }: CardSpecifications) => {
  const radius = !hasLinks ? "30px" : "0";
  return (
    <ul
      className="list-group list-group-flush"
      style={{
        border: "1px solid rgba(0,0,0,.125)",
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
      }}
    >
      {specs.map((spec, index) => {
        if (!spec.details) return;
        const radius = index === specs.length - 1 && !hasLinks ? "30px" : "0";
        return (
          <li
            className="list-group-item"
            style={{ borderRadius: radius }}
            key={`${spec.name} ${spec.details}`}
          >
            {isTable ? (
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>{spec.name}</td>
                    <td style={{ width: "60px", textAlign: "right" }}>
                      {spec.details}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              `${spec.name}${spec.name ? ":" : ""} ${spec.details}`
            )}
          </li>
        );
      })}
    </ul>
  );
};

// Return footer component
interface CardFooterProps {
  text: string;
  link: string;
  backgroundColour: string;
}
const Footer = ({ text, link, backgroundColour }: CardFooterProps) => (
  <div
    className={styles.cardFooter}
    style={{ backgroundColor: backgroundColour }}
  >
    {/* {links.map(link => ( */}
    <a href={link} target="_blank" rel="noopener" key={link}>
      {text}
    </a>
    {/* ))} */}
  </div>
);

export interface CardProps {
  title: string;
  slug: string;
  body: string;
  colour: string;
  date_from: string;
  date_to: string;
  specifications: CardSpecifications;
  footer: CardFooterProps;
  type: "education" | "experience";
}

export const Card = (cardData: CardProps) => {
  const [cardBody, setCardBody] = useState(<span></span>);
  useEffect(
    () =>
      setCardBody(
        <span dangerouslySetInnerHTML={{ __html: cardData.body }}></span>
      ),
    []
  );

  return (
    <div
      className={styles.card}
      style={{ border: `2px solid ${cardData.colour}` }}
    >
      <div className={styles.cardImgContainer}>
        <img
          src={`/${cardData.type}/${cardData.slug}.png`}
          alt={cardData.title}
          title={cardData.title}
        />
      </div>

      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{cardData.title}</h5>
        <p className={styles.cardText}>{cardBody}</p>
        <p className={styles.cardText}>
          <small className="text-muted text-black">
            {dateString(cardData.date_from, cardData.date_to)}
          </small>
        </p>
      </div>

      {cardData.specifications.specs.length > 0 && (
        <Specifications
          specs={cardData.specifications.specs}
          hasLinks={cardData.specifications.hasLinks}
          isTable={cardData.specifications.isTable}
        />
      )}
      {cardData.footer.link && (
        <Footer
          text={cardData.title}
          link={cardData.footer.link}
          backgroundColour={cardData.colour}
        />
      )}
    </div>
  );
};

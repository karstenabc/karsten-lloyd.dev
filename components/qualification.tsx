import styles from "./qualification.module.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

// Return formatted string for dates
const dateString = (start: string, end: string | undefined) => {
  const options = { year: "numeric", month: "long" } as const;
  let from = new Date(start).toLocaleDateString("en-UK", options);
  let to = end ? new Date(end).toLocaleDateString("en-UK", options) : undefined;

  return to ? `${from} - ${to}` : from;
};

// Return footer component
interface QualificationFooterProps {
  text: string;
  link: string;
  backgroundColour: string;
}
const Footer = ({ text, link, backgroundColour }: QualificationFooterProps) => (
  <div
    className={styles.qualificationFooter}
    style={{ backgroundColor: backgroundColour }}
  >
    <a href={link} target="_blank" rel="noopener" key={link}>
      {text}
    </a>
  </div>
);

export interface QualificationProps {
  slug: string;
  organisation: string;
  course: string;
  colour: string;
  achieved_at: string;
  expires_at?: string | undefined;
  url?: string
}

export const Qualification = (QualificationData: QualificationProps) => {
  return (
    <div
      className={styles.qualification}
      style={{ border: `2px solid ${QualificationData.colour}` }}
    >
      <div className="row">
        <div className="col-4 p-3">
          <div className="mx-auto text-center">
            <img
            className="w-100"
              src={`/qualifications/${QualificationData.slug}.png`}
              alt={QualificationData.course}
              title={QualificationData.course}
            />
          </div>
        </div>
        <div className="col-8">
          <div className={styles.qualificationBody}>
            <h5 className={styles.qualificationTitle}>
              {QualificationData.organisation}
            </h5>
            <p className={styles.qualificationText}>
              {QualificationData.course}
            </p>
            <p className={styles.qualificationText}>
              <small className="text-muted text-black">
                {dateString(
                  QualificationData.achieved_at,
                  QualificationData.expires_at
                )}
              </small>
            </p>
          </div>
        </div>
      </div>

      {QualificationData.url && (
        <Footer
          text={QualificationData.course}
          link={QualificationData.url}
          backgroundColour={QualificationData.colour}
        />
      )}
    </div>
  );
};

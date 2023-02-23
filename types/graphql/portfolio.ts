import { gql } from "@apollo/client";
import { CORE_EDUCATION_FIELDS } from "./education";
import { CORE_EXPERIENCE_FIELDS } from "./experience";
import { CORE_QUALIFICATION_FIELDS } from "./qualification";

export const GET_PORTFOLIO = gql`
  ${CORE_EDUCATION_FIELDS}
  ${CORE_EXPERIENCE_FIELDS}
  ${CORE_QUALIFICATION_FIELDS}

  query GetPortfolio {
    education(order_by: { date_from: desc, date_to: desc_nulls_first }) {
      ...EducationWithGrades
    }
    experiences(
      limit: 3
      order_by: { date_from: desc, date_to: desc_nulls_first }
    ) {
      ...ExperienceWithSpecs
    }
    qualifications(
      limit: 3
      order_by: { achieved_at: desc, expires_at: desc_nulls_first }
    ) {
      ...Qualification
    }
  }
`;

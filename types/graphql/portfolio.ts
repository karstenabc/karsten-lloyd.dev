import { gql } from "@apollo/client"
import { CORE_EDUCATION_FIELDS } from "./education"
import { CORE_EXPERIENCE_FIELDS } from "./experience"
import { CORE_QUALIFICATION_FIELDS } from "./qualification"

export const GET_PORTFOLIO = gql`
  ${CORE_EDUCATION_FIELDS}
  ${CORE_EXPERIENCE_FIELDS}
  ${CORE_QUALIFICATION_FIELDS}

  query GetPortfolio {
    education(order_by: [
      { field: date_to, direction: desc }
      { field: date_from, direction: asc },
    ]) {
      ...EducationWithGrades
    }
    experiences(
      limit: 3
      order_by: [
        { field: date_to, direction: desc }
        { field: date_from, direction: desc },
      ]
    ) {
      ...ExperienceWithSpecs
    }
    qualifications(
      limit: 3
      order_by: [
        { field: achieved_at, direction: desc },
        { field: expires_at, direction: desc }
      ]
    ) {
      ...Qualification
    }
  }
`

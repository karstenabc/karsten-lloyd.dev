import { gql } from "@apollo/client";

export const CORE_EDUCATION_FIELDS = gql`
  fragment EducationWithGrades on education {
    establishment
    level
    date_from
    date_to
    url
    colour
    slug
    grades(order_by: [{ achieved_at: asc }, { course: asc }]) {
      course
      score
      education_id
      id
    }
  }
`;

export const EDUCATION_WITH_GRADES = gql`
  ${CORE_EDUCATION_FIELDS}

  query GetEducation {
    education {
      ...EducationWithGrades
    }
  }
`;

export interface Grade {
  course: string;
  score: string;
}

export interface Education {
  establishment: string;
  level: string;
  date_from: string;
  date_to: string;
  url: string;
  colour: string;
  slug: string;
  grades: Grade[];
}

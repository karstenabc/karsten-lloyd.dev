import { gql } from "@apollo/client";

export const CORE_QUALIFICATION_FIELDS = gql`
  fragment Qualification on qualifications {
    organisation
    course
    achieved_at
    expires_at
    url
    colour
    slug
  }
`;

export const QUALIFICATIONS = gql`
  ${CORE_QUALIFICATION_FIELDS}

  query GetQualifications {
    qualifications(
      order_by: { achieved_at: desc, expires_at: desc_nulls_first }
    ) {
      ...Qualification
    }
  }
`;

export interface Qualification {
  organisation: string;
  course: string;
  achieved_at: string;
  expires_at: string | undefined;
  url: string;
  colour: string;
  slug: string;
}

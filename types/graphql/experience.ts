import { gql } from "@apollo/client";

export const CORE_EXPERIENCE_FIELDS = gql`
  fragment ExperienceWithSpecs on experiences {
    company
    job_title
    description
    date_from
    date_to
    url
    colour
    slug
    frameworks(order_by: { framework: { name: asc } }) {
      framework {
        name
      }
    }
    languages(order_by: { language: { name: asc } }) {
      language {
        name
      }
    }
    services(order_by: { service: { name: asc } }) {
      service {
        name
      }
    }
    tools(order_by: { tool: { name: asc } }) {
      tool {
        name
      }
    }
  }
`;

export const EXPERIENCE_WITH_SPECS = gql`
  ${CORE_EXPERIENCE_FIELDS}

  query GetExperiences {
    experiences(order_by: { date_from: desc, date_to: desc_nulls_first }) {
      ...ExperienceWithSpecs
    }
  }
`;

interface ExperienceSpec {
  name: string;
  experience: number;
}
interface Framework {
  framework: ExperienceSpec;
}
interface Language {
  language: ExperienceSpec;
}
interface Service {
  service: ExperienceSpec;
}
interface Tool {
  tool: ExperienceSpec;
}

export interface Experience {
  company: string;
  job_title: string;
  description: string;
  date_from: string;
  date_to: string;
  url: string;
  colour: string;
  slug: string;
  frameworks: Framework[];
  languages: Language[];
  services: Service[];
  tools: Tool[];
}

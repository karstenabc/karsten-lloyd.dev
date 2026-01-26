import { gql } from "@apollo/client"

export const CORE_EXPERIENCE_FIELDS = gql`
  fragment ExperienceWithSpecs on Experience {
    company
    job_title
    description
    date_from
    date_to
    url
    colour
    slug
    frameworks {
      name
    }
    languages {
      name
    }
    services {
      name
    }
    tools {
      name
    }
  }
`

export const EXPERIENCE_WITH_SPECS = gql`
  ${CORE_EXPERIENCE_FIELDS}

  query GetExperiences {
    experiences(order_by: [
      { field: date_to, direction: desc },
      { field: date_from, direction: desc }
    ]) {
      ...ExperienceWithSpecs
    }
  }
`

export interface ExperienceSpec {
  name: string
  experience: number
}

export interface Experience {
  company: string
  job_title: string
  description: string
  date_from: string
  date_to: string
  url: string
  colour: string
  slug: string
  frameworks: ExperienceSpec[]
  languages: ExperienceSpec[]
  services: ExperienceSpec[]
  tools: ExperienceSpec[]
}

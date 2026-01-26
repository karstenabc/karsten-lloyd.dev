import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { EXPERIENCE_WITH_SPECS } from "../types/graphql/experience";
import { GET_PORTFOLIO } from "../types/graphql/portfolio";
import { PortfolioProps } from "../pages/portfolio"
import { PortfolioExperienceProps } from "../pages/portfolio/experience"

const httpLink = new HttpLink({
  uri: 'http://host.docker.internal:4000/graphql'
  // uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


const fetchPortfolio = async (): Promise<PortfolioProps> => {
  const { data } = await client.query<PortfolioProps>({
    query: GET_PORTFOLIO,
  });

  return data ?? { education: [], experiences: [], qualifications: [] };
};

const fetchExperience = async (): Promise<PortfolioExperienceProps> => {
  const { data } = await client.query<PortfolioExperienceProps>({
    query: EXPERIENCE_WITH_SPECS,
  });

  return data ?? { experiences: [] };
};

export { fetchPortfolio, fetchExperience };

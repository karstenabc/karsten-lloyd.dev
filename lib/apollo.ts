import { ApolloClient, InMemoryCache } from "@apollo/client";
import { EXPERIENCE_WITH_SPECS } from "../types/graphql/experience";
import { GET_PORTFOLIO } from "../types/graphql/portfolio";

const client = new ApolloClient({
  uri: "http://host.docker.internal:8080/v1/graphql",
  // uri: "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache(),
});

const fetchPortfolio = async () => {
  const { data } = await client.query({
    query: GET_PORTFOLIO,
  });
  return data;
};

const fetchExperience = async () => {
  const { data } = await client.query({
    query: EXPERIENCE_WITH_SPECS,
  });
  return data;
};

export { fetchPortfolio, fetchExperience };

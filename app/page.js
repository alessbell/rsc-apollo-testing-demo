import { Suspense } from "react";
import { gql } from "@apollo/client";
import { getClient } from "../lib/ApolloClient";
import Homepage from "./Homepage";

const query = gql`
  query srcAllTrailsQuery {
    allTrails {
      id
      name
      status
      difficulty
    }
  }
`;

export default async function pageWrapper() {
  const { data } = await getClient().query({ query });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Homepage data={data} />
    </Suspense>
  );
}

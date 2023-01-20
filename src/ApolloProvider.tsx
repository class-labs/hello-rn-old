import { ReactNode } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.GRAPHQL_API + '/graphql',
  cache: new InMemoryCache(),
});

type Props = {
  children: ReactNode;
};

export function ApolloProvider(props: Props) {
  return <Provider client={client}>{props.children}</Provider>;
}

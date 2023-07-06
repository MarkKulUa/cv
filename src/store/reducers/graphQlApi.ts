import { GraphQLRequest } from '../../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RICKANDMORTYAPI_BASE_URL } from '../../constants';

export const graphQlApi = createApi({
  reducerPath: 'graphqlService',
  baseQuery: fetchBaseQuery({
    baseUrl: RICKANDMORTYAPI_BASE_URL,
  }),
  endpoints: (build) => ({
    graphQL: build.mutation<object, GraphQLRequest>({
      query: (request: GraphQLRequest) => {
        const formattedHeaders = request.headers.reduce<{ [key: string]: string }>(
          (result, { key, value }) => {
            const trimmedKey = key.trim();
            const trimmedValue = value.trim();
            if (/^\S+$/.test(trimmedKey)) {
              result[trimmedKey] = trimmedValue;
            }
            return result;
          },
          {}
        );
        const variables = request.variables ? JSON.parse(request.variables) : {};

        return {
          url: '/',
          method: 'POST',
          body: {
            query: request.query,
            variables: variables,
          },
          headers: formattedHeaders,
        };
      },
    }),
  }),
});

export const { useGraphQLMutation } = graphQlApi;

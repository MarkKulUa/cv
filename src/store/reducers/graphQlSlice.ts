import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GraphQLRequest, RequestHeader } from '../../types';
import { v4 as uuidv4 } from 'uuid';

const initialState: GraphQLRequest = {
  query: `query Fetch($page:Int,$filter: FilterCharacter,$id:ID!,$ids: [ID!]!){
    characters(page:$page , filter: $filter) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: $id) {
      id
    }
    episodesByIds(ids: $ids) {
      id
    }
  }`,
  variables: `{
    "page": 2,
    "id": 1,
    "filter": { "name": "rick" },
    "ids": [1, 2]
    
  }`,
  headers: [{ id: '12344', key: 'Content-type', value: 'application/json' }],
};

export const graphQlQueryReducer = createSlice({
  name: 'GraphQLRequest',
  initialState,
  reducers: {
    setRequest: (state, { payload }: PayloadAction<GraphQLRequest>) => {
      state.query = payload.query;
      state.variables = payload.variables;
    },

    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },

    setVariables: (state, { payload }: PayloadAction<string>) => {
      state.variables = payload;
    },

    setHeaders: (state, { payload }: PayloadAction<RequestHeader[]>) => {
      state.headers = payload;
    },

    addHeader: (state, action: PayloadAction<[string, string]>) => {
      const [key, value] = action.payload;
      const newHeader: RequestHeader = {
        id: uuidv4(),
        key,
        value,
      };
      state.headers.push(newHeader);
    },
    deleteHeader: (state, { payload: id }: PayloadAction<string>) => {
      state.headers = state.headers.filter((header) => header.id !== id);
    },
    updateHeader: (state, { payload: header }: PayloadAction<RequestHeader>) => {
      state.headers = state.headers.map((existingHeader) => {
        if (existingHeader.id === header.id) {
          return {
            ...existingHeader,
            key: header.key,
            value: header.value,
          };
        }
        return existingHeader;
      });
    },
  },
});

export default graphQlQueryReducer.reducer;

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import {
  buildClientSchema,
  GraphQLArgument,
  GraphQLInputObjectType,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLUnionType,
} from 'graphql';
import { introspectionQueries } from '../consts/consts';
import { toast } from 'react-toastify';

import { ArgumentInfo, FieldInfo, SchemaData, TypeInfo } from '../types';
import { t } from 'i18next';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const getSchema = async (): Promise<GraphQLSchema> => {
  try {
    const { data } = await client.query({
      query: gql`
        ${introspectionQueries}
      `,
    });

    const introspectionResult = data;

    if (introspectionResult) {
      return buildClientSchema(introspectionResult);
    }

    throw new Error('No data returned from introspection query.');
  } catch (error) {
    toast.error(t(`Error while fetching schema: `) + error);
    throw error;
  }
};

const traverseSchema = (
  type: GraphQLNamedType,
  visited: Set<string> = new Set()
): TypeInfo | null => {
  if (!type || visited.has(type.name)) {
    return null;
  }
  visited.add(type.name);

  const result: TypeInfo = {
    type: type.name,
    description: type.description,
    fields: undefined,
    types: undefined,
  };

  if (type instanceof GraphQLObjectType || type instanceof GraphQLInputObjectType) {
    const fields = type.getFields();
    result.fields = Object.values(fields).map((field) => {
      const fieldInfo: FieldInfo = {
        name: field.name,
        description: field.description,
        type: field.type.toString(),
      };

      fieldInfo.variables = field.args
        ? field.args.map((arg: GraphQLArgument) => {
            const argumentInfo: ArgumentInfo = {
              name: arg.name,
              description: arg.description,
              type: arg.type.toString(),
            };
            return argumentInfo;
          })
        : [];
      return fieldInfo;
    });
  }

  if (type instanceof GraphQLUnionType) {
    const types = type.getTypes();
    result.types = types
      .map((innerType) => traverseSchema(innerType, visited))
      .filter((innerType): innerType is TypeInfo => innerType !== null);
  }

  return result;
};

export const getSchemaDocumentation = async (type?: string): Promise<SchemaData> => {
  try {
    const schema = await getSchema();
    const schemaType = type ? schema.getType(type) : schema.getQueryType();
    const schemaTypeData = schemaType ? traverseSchema(schemaType) : null;
    const isScalarType = schemaType instanceof GraphQLScalarType;
    return {
      fields: isScalarType ? schemaTypeData?.description : schemaTypeData?.fields,
    };
  } catch (error) {
    toast.error(t(`Error while fetching schema documentation:`) + error);
    throw error;
  }
};

export default client;

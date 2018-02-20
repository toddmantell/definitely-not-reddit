import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import commentEndpoint from "./commentEndpoint";

const query = new GraphQLObjectType({
  name: 'DNRQuery',
  fields: {
    commentEndpoint
  }
});

export default new GraphQLSchema({
  query
});
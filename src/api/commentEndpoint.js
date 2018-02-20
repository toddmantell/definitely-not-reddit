import {GraphQLObjectType, GraphQLInt, } from 'graphql';
import commentType from './commentType';
import {comments} from '../graphql/resolvers';

export default {
  type: commentType,
  args: {
    postId: {// in reality there would be a parent id so we could get nested comments too
      description: 'The id of the post that the comment is in reply to',
      type: GraphQLInt
    },
    limit: {
      description: 'The number of comments to load',
      type: GraphQLInt
    }
  },
  resolve: comments(args)
}
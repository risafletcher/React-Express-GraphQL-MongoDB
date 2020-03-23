const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} = require('graphql');

const NoteType = new GraphQLObjectType({
    name: 'Note',
    fields: {
        _id: { type: GraphQLID },
        content: { type: GraphQLString }
    }
});

module.exports = {
    NoteType
};
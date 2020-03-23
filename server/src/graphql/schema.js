const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { CreateNoteMutation } = require('./mutation/NotesMutation');
const { NotesQuery } = require('./query/NotesQuery');

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        notes: NotesQuery,
    })
});

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createNote: CreateNoteMutation,
        // deleteNote: DeleteNoteMutation,
        // updateNote: UpdateNoteMutation
    })
});

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});
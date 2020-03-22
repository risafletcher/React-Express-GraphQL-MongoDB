const noteType = require('../nodeTypes');
const { GraphQLString } = require('graphql');
const NoteService = require('../services/NoteService');

const CreateNoteMutation = {
    type: noteType,
    args: {
        content: { type: GraphQLString }
    },
    resolve: async (_, { content }) => {
        const noteService = new NoteService();
        const newNote = await noteService.createNote({ content });

        return newNote;
    }
};

module.exports = {
    CreateNoteMutation
};
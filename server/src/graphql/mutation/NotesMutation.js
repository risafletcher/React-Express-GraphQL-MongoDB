const { NoteType } = require('../nodeTypes');
const { GraphQLString, GraphQLID } = require('graphql');
const NoteService = require('../services/NoteService');

const CreateNoteMutation = {
	type: NoteType,
	args: {
		content: { type: GraphQLString }
	},
	resolve: async (_, { content }) => {
		const noteService = new NoteService();
		const newNote = await noteService.createNote({ content });
		return newNote;
	}
};

const DeleteNoteMutation = {
    type: NoteType,
    args: {
        _id: { type: GraphQLID }
    },
    resolve: async (_, { _id }) => {
        const noteService = new NoteService();
        noteService.deleteNote(_id);
        return _id;
    }
};

module.exports = {
    CreateNoteMutation,
    DeleteNoteMutation
};
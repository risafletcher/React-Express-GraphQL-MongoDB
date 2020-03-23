const { NoteType } = require('../nodeTypes');
const { GraphQLString, GraphQLList } = require('graphql');
const NoteService = require('../services/NoteService');

const CreateNoteMutation = {
	type: new GraphQLList(NoteType),
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
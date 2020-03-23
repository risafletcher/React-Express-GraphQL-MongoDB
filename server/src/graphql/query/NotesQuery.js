const { GraphQLList } = require('graphql');
const NoteService = require('../services/NoteService');
const { NoteType } = require('../nodeTypes');

const NotesQuery = {
    type: new GraphQLList(NoteType),
    args: {},
    resolve: async () => {
        const noteService = new NoteService();
        const notes = await noteService.getAllNotes();
        return notes;
    }
};

module.exports = {
    NotesQuery
};
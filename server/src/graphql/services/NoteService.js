const MongoDbRepository  = require('../repository/mongoDbRepository');

module.exports = class NoteService {
    constructor() {
        this.NoteRepository  = new MongoDbRepository('Notes');
    }

    getAllNotes() {
        return this.NoteRepository.getAll();
    }

    updateNote(_id, opt) {
        return this.NoteRepository.updateOne(_id, opt);
    }

    deleteNote(_id) {
        return this.NoteRepository.deleteOne(_id);
    }

    createNote(opt) {
        return this.NoteRepository.create(opt);
    }
}
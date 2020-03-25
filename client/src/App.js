import React from 'react';
import NotesTable from './components/NotesTable';
import CreateNoteForm from './components/CreateNoteForm';

export default () => (
    <main>
        <CreateNoteForm/>
        <NotesTable/>
    </main>
);
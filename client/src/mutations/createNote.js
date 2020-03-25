import { graphql, commitMutation } from 'react-relay';
import environment from '../environment';

const mutation = graphql`
    mutation createNoteMutation($content: String) {
        createNote(content: $content) {
            _id
            content
        }
    }
`;

export default function createNoteMutation(content) {
    const variables = { content };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => console.log('Response received from server.'),
        updater: (store) => {
            const payload = store.getRootField('createNote');
            const id = payload.getValue('_id');
            const root = store.getRoot();
            const notes = root.getLinkedRecords('notes') || [];
            const newNote = store.create(id, 'Note');
            newNote.setValue(content, 'content');
            newNote.setValue(id, '_id');
            const newNotes = [ ...notes, newNote ];
            root.setLinkedRecords(newNotes, 'notes');
        },
        onError: (err) => console.error(err)
    })
}
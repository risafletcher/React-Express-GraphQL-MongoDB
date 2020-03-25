import { graphql, commitMutation } from 'react-relay';
import environment from '../environment';

const mutation = graphql`
	mutation updateNoteMutation($_id: ID, $content: String) {
		updateNote(_id: $_id, content: $content) {
			_id
			content
		}
	}
`;

export default function updateNoteMutation(_id, content) {
	const variables = { _id, content };

	commitMutation(environment, {
		mutation,
		variables,
		updater: (store) => {
            const root = store.getRoot();
            const notes = root.getLinkedRecords('notes');
            const note = store.get(_id);
            const noteIndex = notes.indexOf(note);
			const updatedNote = note.setValue(content, 'content');
            const updatedNotes = [...notes];
            updatedNotes[noteIndex] = updatedNote;
			root.setLinkedRecords(updatedNotes, 'notes');
		},
		onError: (err) => console.error(err)
	});
}

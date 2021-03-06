import { graphql, commitMutation } from 'react-relay';
import environment from '../environment';

const mutation = graphql`
	mutation deleteNoteMutation($_id: ID!) {
		deleteNote(_id: $_id) {
			_id
		}
	}
`;

export default function deleteNoteMutation(_id) {
	commitMutation(environment, {
		mutation,
        variables: { _id },
        configs: [{
            type: 'NODE_DELETE',
            deletedIDFieldName: '_id'
        }],
		updater: (store) => {
            const root = store.getRoot();
            const notes = root.getLinkedRecords('notes');
            const oldRecord = store.get(_id);
            const updatedNotes = notes.filter((record) => record !== oldRecord);
            store.delete(_id);
            root.setLinkedRecords(updatedNotes, 'notes');
		},
		onError: (err) => console.error(err)
	});
}

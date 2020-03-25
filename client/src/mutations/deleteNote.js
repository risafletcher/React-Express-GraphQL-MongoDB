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
		onCompleted: (response, errors) => console.log('Response received from server.'),
		updater: (store) => {
            const root = store.getRoot();
            const notes = root.getLinkedRecords('notes');
            const oldRecord = store.get(_id);
            const updatedNotes = notes.filter((record) => record !== oldRecord);
            root.setLinkedRecords(updatedNotes, 'notes');
            store.delete(_id);
		},
		onError: (err) => console.error(err)
	});
}

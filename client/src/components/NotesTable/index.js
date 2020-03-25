import React, { useState } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../../environment';
import deleteNoteMutation from '../../mutations/deleteNote';
import updateNoteMutation from '../../mutations/updateNote';

const Row = ({ id, content }) => {
    const [editedContent, setEditedContent] = useState(content);
    const [showEditForm, setShowEditForm] = useState(false);
    const _toggleForm = () => setShowEditForm(!showEditForm);

    const _onSubmitForm = (e) => {
        e.preventDefault();
        if (editedContent !== content) {
            updateNoteMutation(id, editedContent);
        }
        _toggleForm();
    };

    return (
        <tr>
            <td>
                {showEditForm ? (
                    <form onSubmit={_onSubmitForm}>
                        <label htmlFor="content" hidden>Content</label>
                        <input
                            type="text"
                            id="content"
                            name="content"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                        />
                        <button type="submit" hidden>Submit</button>
                    </form>
                ) : content}
            </td>
            <td>
                <button onClick={() => deleteNoteMutation(id)}>X</button>
                {!showEditForm ?
                    <button onClick={_toggleForm}>Edit</button>
                    : <button type="submit" onClick={_onSubmitForm}>Submit</button>
                }
            </td>
        </tr>
    )
};

const Table = ({ notes = [] }) => (
    <table>
        <thead>
            <tr>
                <th>Content</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {notes.map(({ _id, content }) =>
                <Row key={_id} id={_id} content={content}/>
            )}
        </tbody>
    </table>
);

export default () => (
	<QueryRenderer
		environment={environment}
		query={graphql`
			query NotesTableQuery {
				notes {
					_id
					content
				}
			}
		`}
		variables={{}}
		render={({ error, props }) => {
			if (error) {
				console.log(error);
				return <div>Error</div>;
			}

			if (!props) {
				return <div>Loading...</div>;
            }

			return <Table notes={props.notes}/>;
		}}
	/>
);
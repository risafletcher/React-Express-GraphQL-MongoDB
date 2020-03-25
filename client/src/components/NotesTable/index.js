import React, { useState } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../../environment';
import deleteNoteMutation from '../../mutations/deleteNote';
import updateNoteMutation from '../../mutations/updateNote';

const EditForm = ({ id, content, toggleForm }) => {
    const [editedContent, setEditedContent] = useState(content);
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (editedContent !== content) {
            updateNoteMutation(id, editedContent);
        }
        toggleForm();
    }
    return (
        <form onSubmit={onSubmitForm}>
            <label htmlFor='content' hidden>Content</label>
            <input
                type='text'
                id='content'
                name='content'
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

const Table = ({ notes = [] }) => {
    const [ showEditForm, setShowEditForm ] = useState(false);
    const toggleEditForm = () => setShowEditForm(!showEditForm);

    return (
        <table>
            <thead>
                
            </thead>
            <tbody>
                {notes.map(({ _id, content }) => (
                    <tr key={_id}>
                        <td>
                            {showEditForm ? <EditForm id={_id} content={content} toggleForm={toggleEditForm}/> : content}
                        </td>
                        <td>
                            <button onClick={() => deleteNoteMutation(_id)}>X</button>
                            {!showEditForm && <button onClick={toggleEditForm}>Edit</button>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

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
			return (
                <div>
                    Loaded
                    <Table notes={props.notes}/>
                </div>
            );
		}}
	/>
);
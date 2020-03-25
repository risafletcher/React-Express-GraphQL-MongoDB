import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../../environment';
import deleteNoteMutation from '../../mutations/deleteNote';

const Table = ({ notes = [] }) => {
    // const onRemoveButtonClick = (_id) => {
    //     deleteNoteMutation(_id);
    // };

    return (
        <table>
            <thead>
                
            </thead>
            <tbody>
                {notes.map(({ _id, content }) => (
                    <tr key={_id}>
                        <td>{content}</td>
                        <td>
                            <button onClick={() => deleteNoteMutation(_id)}>X</button>
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
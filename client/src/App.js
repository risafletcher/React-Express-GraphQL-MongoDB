import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from './environment';

export default () => (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query AppQuery {
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
                return <div>Error</div>
            }

            if (!props) {
                return <div>Loading...</div>
            }

            return <div>Loaded</div>
        }}
    />
);
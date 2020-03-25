/**
 * @flow
 * @relayHash b9f7119331cf7443accdde35aee74c64
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NotesTableQueryVariables = {||};
export type NotesTableQueryResponse = {|
  +notes: ?$ReadOnlyArray<?{|
    +_id: ?string,
    +content: ?string,
  |}>
|};
export type NotesTableQuery = {|
  variables: NotesTableQueryVariables,
  response: NotesTableQueryResponse,
|};
*/


/*
query NotesTableQuery {
  notes {
    _id
    content
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "notes",
    "storageKey": null,
    "args": null,
    "concreteType": "Note",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NotesTableQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "NotesTableQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "NotesTableQuery",
    "id": null,
    "text": "query NotesTableQuery {\n  notes {\n    _id\n    content\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c6491ce4c973adae3edd2f820ecec880';

module.exports = node;

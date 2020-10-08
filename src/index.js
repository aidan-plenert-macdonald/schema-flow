import React from 'react';
import ReactDOM from 'react-dom';
import FlowForm from './FlowForm';
import { Card } from 'react-bootstrap';
import * as serviceWorker from './serviceWorker';

const schema = {
  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name",
      "default": "Chuck"
    },
    "lastName": {
      "type": "object",
      "title": "Last name",
      "properties": {
        "firstName": {
          "type": "string",
          "title": "Surname",
          "default": "Taylor"
        }
      }
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
    }
  }
};

ReactDOM.render(
  <React.StrictMode>
    <Card style={{ width: '50rem' }}>
      <FlowForm schema={schema} />
    </Card>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

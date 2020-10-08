import React, { useState } from 'react';
import Form from "@rjsf/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';


function FlowForm(props) {
  const keys = Object.keys(props.schema.properties);
  const [sub, setSub] = useState(keys[0]);

  const subprops = {
    ...props,
    schema: {
      ...props.schema.properties[sub],
      title: "" // We can drop the title because the tab shows it
    },
    uiSchema: (props.uiSchema || {})[sub],
    onSubmit: (data) => {
      // Submit only if on last key
      const index = keys.indexOf(sub);
      if (index + 1 == keys.length) {
        props.onSubmit(data);
      } else {
        setSub(keys[index + 1]);
      }
    }
  };

  const variant = props.variant || "tabs";

  return (
    <div>
      <i class="las la-battery-three-quarters"></i>
      <h1>{props.schema.title}</h1>
      <Nav variant={variant} activeKey={sub} onSelect={setSub}>
        {keys.map(k => (
          <Nav.Item>
            <Nav.Link eventKey={k}>
              {props.schema.properties[k].title || k}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div className='mt-3'>
        <Form {...subprops}>
          <Button type="submit">
            {keys.indexOf(sub) + 1 == keys.length ? "Submit" : "Next"}
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default FlowForm;

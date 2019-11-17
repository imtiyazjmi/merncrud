// ./react-redux-client/src/components/TodoForm.js
import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const CompanyForm = (props) => {
  return (
    <form className="form form-horizontal" id="addCompanyForm" onSubmit={props.addCompany}>
      <div className="row">
        <h3 className="centerAlign">Add Company</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Company Name: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter Company"
              name="companyName"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Address: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Enter Address"
              name="companyAddress"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Email: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Enter Email"
              name="companyEmail"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Phone: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Enter Phone"
              name="companyPhone"
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
      </FormGroup>
    </form>
  );
}

export default CompanyForm;

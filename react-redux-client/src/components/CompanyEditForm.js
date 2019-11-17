// ./react-redux-client/src/components/TodoEditForm.js
import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const CompanyEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditCompanyForm" onSubmit={props.editCompany}>
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Company: </ControlLabel>
            <input type="hidden" value={props.companyData._id} name="companyId" />
            <FormControl
              type="text" placeholder="Enter company"
              name="companyName" defaultValue={props.companyData.companyName}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Address: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Enter Address"
              name="companyAddress" defaultValue={props.companyData.companyAddress}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Email: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Enter Email"
              name="companyEmail" defaultValue={props.companyData.companyEmail}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Phone: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Enter Phone"
              name="companyPhone" defaultValue={props.companyData.companyPhone}
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

export default CompanyEditForm;
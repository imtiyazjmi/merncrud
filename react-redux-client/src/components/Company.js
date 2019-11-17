import React from 'react';
import { Alert, Button, Glyphicon, Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import CompanyEditForm from './CompanyEditForm';

export default class Company extends React.Component {

  constructor(props) {
    super(props);
    this.companyHideEditModal = this.companyHideEditModal.bind(this);
    this.submitEditCompany = this.submitEditCompany.bind(this);
    this.companyHideDeleteModal = this.companyHideDeleteModal.bind(this);
    this.cofirmDeleteCompany = this.cofirmDeleteCompany.bind(this);
  }

  componentWillMount() {
    this.props.fetchCompanies();
  }

  showEditModal(company) {
    this.props.mappedshowEditModal(company)
  }

  companyHideEditModal() {
    this.props.mappedCompanyHideEditModal();
  }

  submitEditCompany(e) {
    e.preventDefault();
    const editCompanyForm = document.getElementById('EditCompanyForm');
    if (editCompanyForm.companyName.value !== "" && editCompanyForm.companyEmail.value !== "") {
      const data = new FormData();
      data.append('companyId', editCompanyForm.companyId.value);
      data.append('companyName', editCompanyForm.companyName.value);
      data.append('companyAddress', editCompanyForm.companyAddress.value);
      data.append('companyEmail', editCompanyForm.companyEmail.value);
      data.append('companyPhone', editCompanyForm.companyPhone.value);

      this.props.mappedEditCompany(data);
    } else {
      return;
    }
  }

  companyHideDeleteModal(){
    this.props.mappedCompanyHideDeleteModal();
  }

  showCompanyDeleteModal(companyToDelete){
    this.props.mappedCompanyDeleteModal(companyToDelete);
  }

  cofirmDeleteCompany(){
    this.props.mappedDeleteCompany(this.props.mappedCompanyState.companyToDelete);
  }

  render() {
    const companyState = this.props.mappedCompanyState;
    const companies = companyState.companies;
    const editCompany = companyState.companyToEdit;
    return (
      <div className="col-md-12">
        <h3 className="centerAlign">Companies</h3>
        {!companies && companyState.isFetching &&
          <p>Companies loading...</p>
        }
        {companies.length <= 0 && !companyState.isFetching &&
          <p>No Companies Available. Add A Company to List here.</p>
        }
        {companies && companies.length > 0 && !companyState.isFetching &&
          <table className="table booksTable">
            <thead>
              <tr><th>Company</th><th className="textCenter">Edit</th><th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
            </thead>
            <tbody>
              {companies.map((company, i) => <tr key={i}>
                <td>{company.companyName}</td>
                <td className="textCenter"><Button onClick={() => this.showEditModal(company)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
                <td className="textCenter"><Button onClick={() => this.showCompanyDeleteModal(company)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
                <td className="textCenter"><Link to={`/company/${company._id}`}>View Details</Link> </td>
              </tr>)
              }
            </tbody>
          </table>
        }

        {/* Modal for editing company */}
        <Modal
          show={companyState.showEditModal}
          onHide={this.companyHideEditModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Edit Company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12">
              {editCompany &&
                <CompanyEditForm companyData={editCompany} editCompany={this.submitEditCompany} />
              }
              {editCompany && companyState.isFetching &&
                <Alert bsStyle="info">
                  <strong>Updating...</strong>
                </Alert>
              }
              {editCompany && !editCompany.isFetching && companyState.error &&
                <Alert bsStyle="danger">
                  <strong>Failed. {companyState.error}</strong>
                </Alert>
              }
              {editCompany && !editCompany.isFetching && companyState.successMsg &&
                <Alert bsStyle="success">
                  Book <strong>{editCompany.companyName}</strong>{companyState.successMsg}
                </Alert>
              }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.companyHideEditModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/* Modal for deleting company */}
        <Modal
          show={companyState.showCompanyDeleteModal}
          onHide={this.companyHideDeleteModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Delete Your Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {companyState.companyToDelete && !companyState.error && !companyState.isFetching &&
              <Alert bsStyle="warning">
                Are you sure you want to delete this company <strong>{companyState.companyToDelete.companyName} </strong> ?
</Alert>
            }
            {companyState.companyToDelete && companyState.error &&
              <Alert bsStyle="warning">
                Failed. <strong>{companyState.error} </strong>
              </Alert>
            }

            {companyState.companyToDelete && !companyState.error && companyState.isFetching &&
              <Alert bsStyle="success">
                <strong>Deleting.... </strong>
              </Alert>
            }

            {!companyState.companyToDelete && !companyState.error && !companyState.isFetching &&
              <Alert bsStyle="success">
                Company <strong>{companyState.successMsg} </strong>
              </Alert>
            }
          </Modal.Body>
          <Modal.Footer>
            {!companyState.successMsg && !companyState.isFetching &&
              <div>
                <Button onClick={this.cofirmDeleteCompany}>Yes</Button>
                <Button onClick={this.companyHideDeleteModal}>No</Button>
              </div>
            }
            {companyState.successMsg && !companyState.isFetching &&
              <Button onClick={this.companyHideDeleteModal}>Close</Button>
            }
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
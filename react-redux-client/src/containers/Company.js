// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import * as comapnyActions from '../actions/companyActions';
import Company from '../components/Company';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedCompanyState: state.companyState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchCompanyById: companyId => dispatch(comapnyActions.fetchCompanyById(companyId)),
    fetchCompanies: () => dispatch(comapnyActions.fetchCompanies()),
    mappedshowEditModal: company => dispatch(comapnyActions.showEditModal(company)),
    mappedCompanyHideEditModal: () => dispatch(comapnyActions.companyHideEditModal()),
    mappedEditCompany: (companyToEdit) => dispatch(comapnyActions.editCompany(companyToEdit)),
    mappedDeleteCompany: companyToDelete => dispatch(comapnyActions.deleteCompany(companyToDelete)),
    mappedCompanyDeleteModal: companyToDelete => dispatch(comapnyActions.showCompanyDeleteModal(companyToDelete)),
    mappedCompanyHideDeleteModal: () => dispatch(comapnyActions.hideCompanyDeleteModal()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Company);

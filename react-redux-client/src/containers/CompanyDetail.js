// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import * as companyActions from '../actions/companyActions';
import CompanyDetail from '../components/CompanyDetail';

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
    mappedfetchCompanyById: companyId => dispatch(companyActions.fetchCompanyById(companyId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanyDetail);

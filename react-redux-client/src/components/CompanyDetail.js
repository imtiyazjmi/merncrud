// ./react-redux-client/src/components/CompanyDetail.js
import React from 'react';

export default class CompanyDetail extends React.Component {
  componentDidMount(){
    this.props.mappedfetchCompanyById(this.props.params.id);
  }

  render(){
    const companyState = this.props.mappedCompanyState;
    return(
      <div className="companyDetail">
       <h2>Company Detail</h2>
         {!companyState.company && companyState.isFetching &&
           <div>
             <p>Loading company....</p>
           </div>
         }
       {companyState.company && !companyState.isFetching &&
         <div>
           <h3>{companyState.company.companyName}</h3>
           <p>{companyState.company.companyAddress}</p>
         </div>
       }
      </div>
    );
  }
}

import React,{useState} from 'react';
import RegistrationOfTheLeaseAgreementNewOne from "./RegistrationOfTheLeaseAgreementNewOne";
import RegistrationOfTheLeaseAgreementNewTwo from "./RegistrationOfTheLeaseAgreementNewTwo";
import AccessToPersonalCabinet from "./AccessToPersonalCabinet";
import LeaseAgreements from "./LeaseAgreements";
import RegistrationOfTheLeaseAgreementList from "./RegistrationOfTheLeaseAgreementList";
import RegistrationOfStudentRentalAgreement from "./RegistrationOfStudentRentalAgreement";
import AmendmentOfTheLeaseAgreement from "./AmendmentOfTheLeaseAgreement";
import styles from "./RegistrationOfTheLeaseAgreement.module.scss";
import RegistrationOfStudentRentalAgreement2 from "./RegistrationOfStudentRentalAgreement2";
import RegistrationOfStudentRentalAgreement3 from "./RegistrationOfStudentRentalAgreement3";
import LeaseAgreements2 from "./LeaseAgreements2";
import {Route, Switch} from "react-router-dom";
const RegistrationOfTheLeaseAgreementNew = () => {
    return (
      <div>
          <Switch>
              <Route path="/main/electronic-registration/registration-of-the-lease-agreement" exact component={RegistrationOfTheLeaseAgreementList}/>
              <Route path="/main/electronic-registration/registration-of-the-lease-agreement/create-student" exact component={RegistrationOfStudentRentalAgreement3}/>
              <Route path="/main/electronic-registration/registration-of-the-lease-agreement/create" exact component={RegistrationOfTheLeaseAgreementNewTwo}/>
              <Route path="/main/electronic-registration/registration-of-the-lease-agreement/completed" exact component={LeaseAgreements2}/>
              <Route path="/main/electronic-registration/registration-of-the-lease-agreement/info" exact component={LeaseAgreements}/>
              <Route path="/main/electronic-registration/registration-of-the-lease-agreement/edit" exact component={AmendmentOfTheLeaseAgreement}/>
          </Switch>
          {/*<RegistrationOfTheLeaseAgreementNewOne />*/}
          {/*<RegistrationOfStudentRentalAgreement />*/}
          {/*<RegistrationOfStudentRentalAgreement2 />*/}
          {/*<RegistrationOfStudentRentalAgreement3 />*/}

          {/*<LeaseAgreements2 />*/}
          {/*<AmendmentOfTheLeaseAgreement />*/}
          {/*<LeaseAgreements />*/}
          {/*<RegistrationOfTheLeaseAgreementNewTwo />*/}
          {/*<AccessToPersonalCabinet/>*/}
      </div>
    );
};

export default RegistrationOfTheLeaseAgreementNew;

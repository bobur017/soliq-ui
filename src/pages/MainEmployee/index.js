import React from 'react';
import styles from "./MainEmployee.module.scss"
import MainEmployeeNews from "./MainEmployeeNews";
import ServicesProvided from "./ServicesProvided";
import PerformanceIndicators from "./PerformanceIndicators";
import SalaryTable from "./SalaryTable";
import CrmUserHistory from "./CRMUserHistory";
import MainEmployeeNewsDetail from "./MainEmployeeNewsDetail";
import MainEmployeeServicesPprices from "./MainEmployeeServicesPprices";
import CrmUserHistoryView from "./CrmUserHistoryView";
import ProfileSetting from "./ProfileSetting";
import InformationAboutEnterprises from "./InformationAboutEnterprises";
import IncomeReport from "./IncomeReport";
import MonthlyAttendanceReport from "./MonthlyAttendanceReport";
import SalaryTableRegions from "./SalaryTableRegions";
import SalaryTableDays from "./SalaryTableDays";
import SalaryTableProgress from "./SalaryTableProgress";
const MainEmployeeNew = () => {
    return (
        <div className={styles.mainEmployee}>
            {/*<MainEmployeeNews />*/}
            {/*<MainEmployeeNewsDetail/>*/}
            {/*<MainEmployeeServicesPprices />*/}
            {/*<ServicesProvided />*/}
            {/*<PerformanceIndicators />*/}
            {/*<SalaryTable />*/}
            {/*<CrmUserHistory />*/}
            {/*<CrmUserHistoryView />*/}
            {/*<ProfileSetting />*/}
            {/*<InformationAboutEnterprises />*/}
            {/*<IncomeReport />*/}
            {/*<MonthlyAttendanceReport />*/}
            {/*<SalaryTableRegions />*/}
            {/*<SalaryTableDays />*/}
            <SalaryTableProgress />
        </div>
    );
};

export default MainEmployeeNew;

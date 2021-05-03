import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button,  Row, Col } from 'reactstrap';
//import classnames from 'classnames';
import HrTabs from './humanresource/HrNav';
import PageTitle from '../../components/PageTitle';
import ReportingManager from './reportingmanager/ReportingManager';
import Employee from './employee/Employee';

//import config from '../../helpers/baseurl';
//var urlpattern = config.baseUrl;
const Appraisal = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  //const [apprasalList, setapprasalList]=useState([]);
  //const [showEmpTab, setshowEmpTab] = React.useState(false)
  let loginDetails = useSelector((state)=> state.Auth.user || []);
  //var getEmpcode = loginDetails.EmployeeCode;
  
//var checkemployeeaprasal =apprasalList.Status===true;
//var getCurrentLoginRole=loginDetails.Role;
//console.log(getCurrentLoginRole,"getCurrentLoginRolegetCurrentLoginRole");
var checkemployeeaprasal =loginDetails.Role!=="HR" && loginDetails.Role!=="Admin" && loginDetails.Role!=="Manager" && loginDetails.Role!=="Teamlead";
//console.log(checkemployeeaprasal,"checkemployeeaprasalcheckemployeeaprasal");
let emptab;
if (checkemployeeaprasal===true) {
  emptab = <NavItem className="col-sm-4">
  <NavLink
    className="active"
    onClick={() => { toggle('3'); }}
  >
    Employee
  </NavLink>
</NavItem>;
} else {
  emptab =<div></div>;
}
let empcont;
if (checkemployeeaprasal===true) {
  empcont =<TabPane className="active">
  <Employee/>
 </TabPane >;
} else {
  empcont =<div></div>;
}
var checkhrrole =loginDetails.Role==="HR";
let hrtab;
if (checkhrrole) {
  hrtab = <NavItem className="col-sm-4">
  <NavLink
    className="active"
    onClick={() => { toggle('1'); }}
  >
   Human Resources
  </NavLink>
</NavItem>;
} else {
  hrtab =<div></div>;
}
let hrcont;
if (checkhrrole) {
  hrcont =  <TabPane className="active">
         
  <HrTabs/>
</TabPane>;
} else {
  hrcont =<div></div>;
}
var checkpmrole =loginDetails.Role!=="Teamlead" && loginDetails.Role!=="Manager";
let pmtab;
console.log(checkpmrole, "checkemployeeaprasalcheckemployeeaprasal74874947");
if (checkpmrole===false) {
  
  pmtab = <NavItem className="col-sm-4">
  <NavLink
    className="active"
  >
    Reporting Manager
  </NavLink>
</NavItem>;
} else {
  pmtab =<div></div>;
}
let pmcont;
if (checkpmrole===false) {
  pmcont = <TabPane className="active">
         <ReportingManager/>
        </TabPane>;
} else {
  pmcont =<div></div>;
}

  return (
    <React.Fragment>
      <Row className="page-title">
                <Col md={6}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Master', path: '/master', active: true },
                        ]}
                    />
                </Col>
                <Col md={6} className="text-right">
                <Button color="primary"><i className="uil uil-plus"></i>ADD ITEM</Button>
                </Col>
            </Row>
      <Nav tabs className="requirement-tab pt-3 pb-3 nav nav-tabs row bg-white">
        {hrtab}
        {pmtab}
        {emptab }
      </Nav>
      <TabContent className="req-tab-content" activeTab={activeTab}>
       {hrcont}
        {pmcont}
        {empcont}
      </TabContent>
      
    </React.Fragment>
  );
}

export default Appraisal;
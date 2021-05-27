import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button,  Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PageTitle from '../../components/PageTitle';
import UploadSalryArche from './uploadsalaryarche/UploadSalryArche';
import UploadSalryReyna from './uploadsalaryreyna/UploadSalryReyna';
import ViewSalrySlip from './viewsalaryslip/ViewSalrySlip';
const SalrySlip = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <React.Fragment>
      <Row className="page-title">
                <Col md={6}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Salry Slip', path: '/salryslip', active: true },
                        ]}
                    />
                </Col>
                <Col md={6} className="text-right">
                <Button color="primary"><i className="uil uil-plus"></i>ADD ITEM</Button>
                </Col>
            </Row>
      <Nav tabs className="requirement-tab pt-3 pb-3 nav nav-tabs row bg-white">
        <NavItem className="col-sm-4">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Upload Salary Sheet Arche Softronix
          </NavLink>
        </NavItem>
        <NavItem className="col-sm-4">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Upload Salary Sheet Reyna
          </NavLink>
        </NavItem>
        <NavItem className="col-sm-4">
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            View Salary Slip
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="req-tab-content" activeTab={activeTab}>
        <TabPane tabId="1">
         
             <UploadSalryArche/>
        </TabPane>
        <TabPane tabId="2">
         <UploadSalryReyna/>
        </TabPane>
        <TabPane tabId="3">
         <ViewSalrySlip/>
        </TabPane >
      </TabContent>
      
    </React.Fragment>
  );
}

export default SalrySlip;
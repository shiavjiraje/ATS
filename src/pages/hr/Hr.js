import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button,  Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PageTitle from '../../components/PageTitle';
import AttendanceReport from './AttendanceReport';
import Holidays from './Holidays';
import ApplyForLeave from './ApplyForLeave';
import LeaveBalance from './LeaveBalance';
import ViewLeave from './ViewLeave';
const Hr = (props) => {
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
                            { label: 'Hr', path: '/hr', active: true },
                        ]}
                    />
                </Col>
                <Col md={6} className="text-right">
                <Button color="primary"><i className="uil uil-plus"></i>ADD ITEM</Button>
                </Col>
            </Row>
      <Nav tabs className="requirement-tab hr-tab pt-3 pb-3 nav nav-tabs row bg-white">
        <NavItem className="col-sm-3">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Attedance Report
          </NavLink>
        </NavItem>
        <NavItem className="col-sm-2">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Holidays
          </NavLink>
        </NavItem>
        <NavItem className="col-sm-3">
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Apply For Leave
          </NavLink>
        </NavItem>
        <NavItem className="col-sm-2">
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            View Leave
          </NavLink>
        </NavItem>
        <NavItem className="col-sm-2 ">
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Leave Balance
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="req-tab-content" activeTab={activeTab}>
        <TabPane tabId="1">
         
             <AttendanceReport/>
        </TabPane>
        <TabPane tabId="2">
         <Holidays/>
        </TabPane>
        <TabPane tabId="3">
          <ApplyForLeave/>
        </TabPane >
        <TabPane tabId="4">
          <ViewLeave/>
        </TabPane >
        <TabPane tabId="5">
          <LeaveBalance/>
        </TabPane >
      </TabContent>
      
    </React.Fragment>
  );
}

export default Hr;
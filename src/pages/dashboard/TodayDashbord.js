// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
//import * as FeatherIcon from 'react-feather';
import StatisticsWidget from './StatisticsWidget';
//import ApplicationList from './ApplicationList';
import Chart from './Chart'
const TodayDashbord = () => {
    return (
        <React.Fragment>
            
            <Row>
            <Col md={6} xl={3}>
                <StatisticsWidget description="Submission" title="1500" footerPara="50% " footdesc="Submission to Interview" ></StatisticsWidget> 
            </Col>
            <Col md={6} xl={3}>
                <StatisticsWidget description="Interview" title="900" footerPara="50% " footdesc="Submission to Offer" ></StatisticsWidget> 
            </Col>
            <Col md={6} xl={3}>
                 <StatisticsWidget description="Offer" title="500" footerPara="50% " footdesc="Submission to Hire" ></StatisticsWidget> 
            </Col>
            <Col md={6} xl={3}>
                 <StatisticsWidget description="Hire" title="100" footerPara="50%" footdesc="Pending Approval"  ></StatisticsWidget> 
            </Col>
            </Row>
            <Row>
                <Col md={12} xl={12}>
                    <Chart/> 
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default TodayDashbord;

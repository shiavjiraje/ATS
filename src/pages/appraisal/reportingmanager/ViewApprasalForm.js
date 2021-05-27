import React, { useEffect, useState } from 'react'; 
import { Row, Col,  Label } from 'reactstrap';
import * as FeatherIcon from 'react-feather';

import config from '../../../helpers/baseurl';
import axios from 'axios';
import swal from 'sweetalert';
var urlpattern = config.baseUrl;
const ViewApprasalForm = (props) => {
useEffect(() => {
    getAllAppraisal();

    // eslint-disable-next-line 
}, []);
var paid = props.apprasalviewdata.paid;
const [apprasalList, setapprasalList]=useState([]);
const getAllAppraisal=()=>{
var axios = require('axios');

var config = {
method: 'get',
url: `${urlpattern}RMAppraisalMaster?paid=${paid}`,
headers: { 
'Content-Type': 'application/json'
}
};

axios(config)
.then(function (response) {
console.log(JSON.stringify(response.data));
var apprasallist =response.data.Data;
setapprasalList(apprasallist);
})
.catch(function (error) {
console.log(error);
});

}
//console.log(apprasalList.empployeereview, "empployeereview");
var employerieviedetails =apprasalList.empployeereview || [];
//var rmrieviedetails =apprasalList.rmreview || [];
const [qualityofworkntaskcompletion, setqualityofworkntaskcompletion]=useState('');
const [goalsntargetachievement, setgoalsntargetachievement]=useState('');
const [writtennverbalcommunicationskills, setwrittennverbalcommunicationskills]=useState('');
const [initiativenmotivation, setinitiativenmotivation]=useState('');
const [teamworknleadershipskills, setteamworknleadershipskills]=useState('');
const [abilitytoproblemsolve, setabilitytoproblemsolve]=useState('');
const [attendancenregualrization, setattendancenregualrization]=useState('');
const [comment, setcomment]=useState('');
const handleSubmit=(e)=>{
    e.preventDefault();
    var rate1 = parseInt(qualityofworkntaskcompletion);
    var rate2 = parseInt(goalsntargetachievement);
    var rate3 = parseInt(writtennverbalcommunicationskills);
    var rate4 = parseInt(initiativenmotivation);
    var rate5 = parseInt(teamworknleadershipskills);
    var rate6 = parseInt(abilitytoproblemsolve);
    var rate7 = parseInt(attendancenregualrization);
    var total = rate1+rate2+rate3+rate4+rate5+rate6+rate7 ;
   const data ={
    paid:paid,
    qualityofworkntaskcompletion:qualityofworkntaskcompletion,
    goalsntargetachievement:goalsntargetachievement,
    writtennverbalcommunicationskills:writtennverbalcommunicationskills,
    initiativenmotivation:initiativenmotivation,
    teamworknleadershipskills:teamworknleadershipskills,
    abilitytoproblemsolve:abilitytoproblemsolve,
    attendancenregualrization:attendancenregualrization,
    comment:comment,
    total:total
   }
   var config = {
    method: 'post',
    url: `${urlpattern}RMAppraisalMaster`,
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    swal("Record Created Successful", "success"); 
  })
  .catch(function (error) {
    swal(error, "error");
  });
 }

console.log('employerieviedetails', apprasalList);
    return (
        <React.Fragment>
            <div className="row"><div className="header-info">EMPLOYEE APPRAISAL</div></div>
            <Row>
            <Col lg={4}>
                    <Label>Employee Name</Label>
                    <input type="text"
                        className="style-input form-control"
                         value={apprasalList.empname}
                    />
            </Col>
            <Col lg={4}>
                    <Label>Date</Label>
                    <input type="text"
                        className="style-input form-control"
                         value={apprasalList.createdOn}
                    />
            </Col>
            </Row>
            <Row className="mt-3">
            <Col lg={4}>
                    <Label>Department</Label>
                    <input type="text"
                        className="style-input form-control"
                         value={apprasalList.createdOn}
                    />
            </Col>
            <Col lg={4}>
                    <Label>Review Date</Label>
                    <input type="text"
                        className="style-input form-control"
                         value={apprasalList.createdOn}
                    />
            </Col>
            </Row>
            <div className="row mt-4">
                <div className="header-info">
                    <Row>
                        <Col lg={6}>SELF RATINGS</Col>
                        <Col lg={6}>APPRAISER'S RATING</Col>
                    </Row>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <Row>
                <Col lg={6} className="mb-4">
                    <Col lg={8}  className="mt-3">
                        <Label>Quality of work & Task Completeion</Label>
                        <input type="text"
                            className="style-input form-control"
                             value={employerieviedetails.qualityofworkntaskcompletion}
                        />
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Goals and Target Achievement</Label>
                        <input type="text"
                            className="style-input form-control"
                            value={employerieviedetails.goalsntargetachievement}
                        />
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Writen and Verbal Comunication Skill</Label>
                        <input type="text"
                            className="style-input form-control"
                            value={employerieviedetails.writtennverbalcommunicationskills}
                        />
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Initiative and Motivation</Label>
                        <input type="text"
                            className="style-input form-control"
                            value={employerieviedetails.initiativenmotivation}
                        />
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Teamwork and Leadership Skills</Label>
                        <input type="text"
                            className="style-input form-control"
                            value={employerieviedetails.teamworknleadershipskills}
                        />
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Ability to Problem Slove</Label>
                        <input type="text"
                            className="style-input form-control"
                            value={employerieviedetails.abilitytoproblemsolve}
                        />
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Attendance & Regualrization</Label>
                        <input type="text"
                            className="style-input form-control"
                            value={employerieviedetails.attendancenregualrization}
                        />
                    </Col>
                </Col>

                <Col lg={6} className="mb-4">
                  
                    <Col lg={8}  className="mt-3">
                        <Label>Quality of work & Task Completeion</Label>
                        <select 
                            className="style-input form-control"
                            name="qualityofworkntaskcompletion"
                            id="qualityofworkntaskcompletion"
                            onChange={(e) => {
                                setqualityofworkntaskcompletion(e.target.value);
                            }} 
                        >
                            <option value="">Select</option>
                            <option value="10">Excellent</option>
                            <option value="8">Very Good</option>
                            <option value="6">Average</option>
                            <option value="4">Below Average</option>
                            <option value="0">Poor</option>
                        </select>
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Goals and Target Achievement</Label>
                        <select 
                            className="style-input form-control"
                            name="goalsntargetachievement"
                            id="goalsntargetachievement"
                            onChange={(e) => {
                                setgoalsntargetachievement(e.target.value);
                            }} 
                        >
                            <option value="">Select</option>
                            <option value="10">Excellent</option>
                            <option value="8">Very Good</option>
                            <option value="6">Average</option>
                            <option value="4">Below Average</option>
                            <option value="0">Poor</option>
                        </select>
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Writen and Verbal Comunication Skill</Label>
                        <select 
                            className="style-input form-control"
                            name="writtennverbalcommunicationskills"
                            id="writtennverbalcommunicationskills"
                            onChange={(e) => {
                                setwrittennverbalcommunicationskills(e.target.value);
                            }} 
                        >
                            <option value="">Select</option>
                            <option value="10">Excellent</option>
                            <option value="8">Very Good</option>
                            <option value="6">Average</option>
                            <option value="4">Below Average</option>
                            <option value="0">Poor</option>
                        </select>
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Initiative and Motivation</Label>
                        <select 
                            className="style-input form-control"
                            name="initiativenmotivation"
                            id="initiativenmotivation"
                            onChange={(e) => {
                                setinitiativenmotivation(e.target.value);
                            }} 
                        >
                            <option value="">Select</option>
                            <option value="10">Excellent</option>
                            <option value="8">Very Good</option>
                            <option value="6">Average</option>
                            <option value="4">Below Average</option>
                            <option value="0">Poor</option>
                        </select>
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Teamwork and Leadership Skills</Label>
                        <select 
                            className="style-input form-control"
                            name="teamworknleadershipskills"
                            id="teamworknleadershipskills"
                            onChange={(e) => {
                                setteamworknleadershipskills(e.target.value);
                            }} 
                        >
                            <option value="">Select</option>
                            <option value="10">Excellent</option>
                            <option value="8">Very Good</option>
                            <option value="6">Average</option>
                            <option value="4">Below Average</option>
                            <option value="0">Poor</option>
                        </select>
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Ability to Problem Slove</Label>
                        <select 
                            className="style-input form-control"
                            name="abilitytoproblemsolve"
                            id="abilitytoproblemsolve"
                            onChange={(e) => {
                                setabilitytoproblemsolve(e.target.value);
                            }} 
                        >
                            <option value="">Select</option>
                            <option value="10">Excellent</option>
                            <option value="8">Very Good</option>
                            <option value="6">Average</option>
                            <option value="4">Below Average</option>
                            <option value="0">Poor</option>
                        </select>
                    </Col>
                    <Col lg={8}  className="mt-3">
                        <Label>Attendance & Regualrization</Label>
                        <select 
                            className="style-input form-control"
                            name="attendancenregualrization"
                            id="attendancenregualrization"
                            onChange={(e) => {
                                setattendancenregualrization(e.target.value);
                            }} 
                        >
                            <option value="">Select</option>
                            <option value="10">Excellent</option>
                            <option value="8">Very Good</option>
                            <option value="6">Average</option>
                            <option value="4">Below Average</option>
                            <option value="0">Poor</option>
                        </select>
                    </Col>
                    
                  
                </Col>
            </Row>
            <div className="row mt-4">
                <div className="header-info">
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col lg={6}>Total</Col>
                                <Col lg={6}>{employerieviedetails.total}</Col>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                {/* <Col lg={6}>Total</Col>
                                <Col lg={6}>{rmrieviedetails.total}</Col> */}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="row mt-4">
                <Col lg={6}>
                    <h5>Employee's Comments :</h5>
                    <lable>{employerieviedetails.comment}</lable>
                </Col>
                <Col lg={6}>
                    <h5>Appraiser Comments :</h5>
                    <textarea className="form-control mt-2" rows="8"
                    name="comment"
                    id="comment"
                    onChange={(e) => {
                        setcomment(e.target.value);
                    }} />
                </Col>
                <Col lg={3}  className="mt-3">
                        <input type="text"
                            className="style-input form-control"
                            
                        />
                        <Label>Date :</Label>
                    </Col>
                    <Col lg={3}  className="mt-3">  
                    </Col>
                    <Col lg={3}  className="mt-3">                        
                        <input type="text"
                            className="style-input form-control"
                            
                        />
                        <Label>Appraiser Signiture :</Label>
                    </Col>
                    
                    <Col lg={3}  className="mt-3">                        
                        <input type="text"
                            className="style-input form-control"
                            
                        />
                        <Label>Date :</Label>
                    </Col>
            </div>
            <Row>
            <Col lg={6}  className="mt-3 text-center"></Col>
            <Col lg={6}  className="mt-3 text-center">
                    <button type="submit" className="btn btn-primary mr-2">
                            Submit
                        </button>
                        </Col>
            </Row>
            </form>
            <hr/>
            {/* <div className="row mt-4">
                        <Col lg={12}>
                            <label>Target/ Training Needs/ Requests </label>
                            <textarea className="form-control" rows="8"/>
                        </Col>
            </div> */}
            <div className="row mt-4">
                        <Col lg={6}>
                           <Row>
                                <Col lg={2}><div className="squire green-bg"></div> </Col><Col lg={10} className="pl-0"><label className="pt-2">Rating <FeatherIcon.ChevronRight /> 60 Outstanding Performance </label></Col>                            
                          </Row> 
                          <Row className="mt-3">
                                <Col lg={2}><div className="squire orange-bg"></div> </Col><Col lg={10} className="pl-0"><label className="pt-2">Rating <FeatherIcon.ChevronLeft /> 40 Average Performance </label></Col>                            
                          </Row>    
                        </Col>
                        <Col lg={6}>
                           <Row>
                                <Col lg={2}><div className="squire yellow-bg"></div> </Col><Col lg={10} className="pl-0"><label className="pt-2">Rating <FeatherIcon.ChevronLeft /> 50 Good Performance </label></Col>                            
                          </Row> 
                          <Row className="mt-3">
                                <Col lg={2}><div className="squire red-bg"></div> </Col><Col lg={10} className="pl-0"><label className="pt-2">Rating <FeatherIcon.ChevronLeft /> 30 Poor Performance </label></Col>                            
                          </Row>    
                        </Col>
            </div>
        </React.Fragment>
    )
}

export default ViewApprasalForm;

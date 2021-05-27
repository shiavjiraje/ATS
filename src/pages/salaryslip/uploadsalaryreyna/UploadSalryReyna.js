import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, FormGroup, Form, Label, Input} from 'reactstrap';
import { getClientList } from '../../../redux/client/actions';
import { setMonth } from '../../../redux/salesmonthreport/actions';
//import axios from 'axios';
// import Select from 'react-select';
const UploadSalryReyna = () => { 
    const dispatch = useDispatch();
    const [months, setmonths]=useState('');
    const [years, setyears]=useState('');
    const [bd, setbd]=useState('');
    const [join, setjoin]=useState('');
    const [client, setclient]=useState('');
    const [position, setposition]=useState('');
    const [passthrough, setpassthrough]=useState('');
    const [business, setbusiness]=useState('');
    const [bulkdeal, setbulkdeal]=useState('');
    const [submission, setsubmission]=useState('');
    const [poextend, setpoextend]=useState('');
    const [intreceived, setintreceived]=useState('');
    const [totrevenue, settotrevenue]=useState('');
    const [attrition, setattrition]=useState('');
    const [feedbackpending, setfeedbackpending]=useState('');
    const [noshow, setnoshow]=useState([]);
    const [remark, setremark]=useState('');
    const [offer, setoffer]=useState('');

    

    
  
    const handleSubmit = e => {
        e.preventDefault();
        const reqBody ={
            months:months,
            years:years,
            bd:bd,
            join:join,
            client:client,
            position:position,
            passthrough:passthrough,
            business:business,
            bulkdeal:bulkdeal,
            submission:submission,
            poextend:poextend,
            intreceived:intreceived,
            totrevenue:totrevenue,
            attrition:attrition,
            feedbackpending:feedbackpending,
            noshow:noshow,
            remark:remark,
            offer:offer,
        };
        dispatch(setMonth(reqBody));
    }
   const  getDropList = () => {
        const year = new Date().getFullYear();
      return (
          Array.from( new Array(50), (v,i) =>
            <option key={i} value={year+i}>{year+i}</option>
        )
      );
    };
    let clientList = useSelector((state) => state.Client.clients || []);
    useEffect( () => {
        dispatch(getClientList());
    
        // eslint-disable-next-line
      }, [] );
      const [selectMonth] = React.useState([
        { label: 'January', value: 'January'},
        { label: 'February', value: 'February' },
        { label: 'March', value: 'March' },
        { label: 'April', value: 'April' },
        { label: 'May', value: 'May' },
        { label: 'June', value: 'June' },
        { label: 'July', value: 'July' },
        { label: 'August', value: 'August' },
        { label: 'September', value: 'September' },
        { label: 'October', value: 'October' },
        { label: 'November', value: 'November' },
        { label: 'December', value: 'December' },

    ]);
    return (
        <React.Fragment>
            
            <Form onSubmit={handleSubmit}>
                                <Row>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select Month <span className="redspan">*</span></Label>
                                    <select className="form-control style-input" required
                                   name="months" id="months" onChange={(e) => {
                                    setmonths (e.target.value);
                                }}>
                                     <option disabled selected value="">Select</option>
                                {selectMonth.map((setmonth) => (
                                    <option key={setmonth.value} value={setmonth.value}>
                                        {setmonth.label}
                                    </option>
                                ))}
                                   </select>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select Year <span className="redspan">*</span></Label>
                                    <select className="form-control style-input" required
                                   name="years" id="years" onChange={(e) => {
                                    setyears (e.target.value);
                                }}>
                                     <option disabled selected value="">Select</option>
                                     {getDropList()}
                                   </select>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">BD</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="bd"
                                        name="bd" onChange={(e) => {
                                            setbd (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row className="mt-3">
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select Client <span className="redspan">*</span></Label>
                                    <select className="form-control style-input" required
                                   name="client" id="client" onChange={(e) => {
                                    setclient (e.target.value);
                                }}>
                                     <option disabled selected value="">Select</option>
                                     {clientList.map((client) => (
                                    <option key={client.cid} value={client.cid}>
                                        {client.cname}
                                    </option>
                                ))}
                                   </select>
                                </FormGroup>
                            </Col>
                           
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Join</Label>
                                    <Input
                                        type="text" 
                                        className="style-input"
                                        id="join"
                                        name="join" onChange={(e) => {
                                            setjoin (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                       
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Open Position </Label>
                                    <Input
                                        type="text"  
                                        className="style-input"
                                        id="position"
                                        name="position" onChange={(e) => {
                                            setposition (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col> 
                            </Row>
                        <Row className="mt-3">
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Passthrough</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="passthrough"
                                        name="passthrough" onChange={(e) => {
                                            setpassthrough (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                       
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Business Recieved</Label>
                                    <Input
                                        type="text" 
                                        className="style-input"
                                        id="business"
                                        name="business" onChange={(e) => {
                                            setbusiness (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Bulkdeal</Label>
                                    <Input
                                        type="text" 
                                        className="style-input"
                                        id="bulkdeal"
                                        name="bulkdeal" onChange={(e) => {
                                            setbulkdeal (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row className="mt-3">
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">No. Of Submission </Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="submission"
                                        name="submission" onChange={(e) => {
                                            setsubmission (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                           
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">PO Extend </Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="poextend"
                                        name="poextend" onChange={(e) => {
                                            setpoextend (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                       
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Interview Recieved</Label>
                                    <Input
                                        type="text"
                                        id="intreceived"
                                        className="style-input"
                                        name="intreceived" onChange={(e) => {
                                            setintreceived (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            </Row>
                        <Row className="mt-3">
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Attrition Saved</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="attrition"
                                        name="attrition" onChange={(e) => {
                                            setattrition (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                       
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Feedback Pending</Label>
                                    <Input
                                        type="text"
                                        id="feedbackpending"
                                        className="style-input"
                                        name="feedbackpending" onChange={(e) => {
                                            setfeedbackpending (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Total Revenue</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="totrevenue"
                                        name="totrevenue" onChange={(e) => {
                                            settotrevenue (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            </Row>
                        <Row className="mt-3">
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">No Show</Label>
                                    <Input
                                        type="text"
                                        id="noshow"
                                        className="style-input"
                                        name="noshow" onChange={(e) => {
                                            setnoshow (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                          
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Remark</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="remark"
                                        name="remark" onChange={(e) => {
                                            setremark (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                       
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Offer</Label>
                                    <Input
                                        type="text"
                                        id="offer"
                                        className="style-input"
                                        name="offer" onChange={(e) => {
                                            setoffer (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={12}>
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button className="btn btn-secondary ml-3">Cancel</button>
                            </Col>
                        </Row>
                        </Form>
        </React.Fragment>
    );
};

export default UploadSalryReyna;



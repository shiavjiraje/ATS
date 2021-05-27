import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, FormGroup, Form, Label, Input} from 'reactstrap';
import { getClientList } from '../../../redux/client/actions';
import { setRevenue } from '../../../redux/salesrevenue/actions';
//import axios from 'axios';
// import Select from 'react-select';
const UploadSalryArche = () => { 
    const dispatch = useDispatch();
    const [srmonth, setsrmonth]=useState([]);
    const [srattrition, setsrattrition]=useState('');
    const [srbd, setsrbd]=useState('');
    const [srclient, setsrclient]=useState('');
    const [srtotgp, setsrtotgp]=useState('');
    const [sractualstart, setsractualstart]=useState('');
    const [sravggpadded, setsravggpadded]=useState('');
    const [srnettotgp, setsrnettotgp]=useState('');
    const [srstart, setsrstart]=useState('');
    const [srnettotgpadded, setsrnettotgpadded]=useState('');
   // const [srmargintype,setsrmargintype]=useState('');
    const [srtypeofemployement, setsrtypeofemployement]=useState('');
    

    
  
    const handleSubmit = e => {
        e.preventDefault();
        const reqBody ={
            srmonth:srmonth,
            srattrition:srattrition,
            srbd:srbd,
            srclient:srclient,
            srtotgp:srtotgp,
            sractualstart:sractualstart,
            sravggpadded:sravggpadded,
            srnettotgp:srnettotgp,
            srstart:srstart,
            srnettotgpadded:srnettotgpadded,
           // srmargintype:srmargintype,
            srtypeofemployement:srtypeofemployement
        };
        dispatch(setRevenue(reqBody));
    }
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
   
    let clientList = useSelector((state) => state.Client.clients || []);
    useEffect( () => {
        dispatch(getClientList());
    
        // eslint-disable-next-line
      }, [] );
    return (
        <React.Fragment>
            
            <Form onSubmit={handleSubmit}>
                                <Row>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select Month <span className="redspan">*</span></Label>
                                    <select className="form-control style-input" required
                                   name="srmonth" id="srmonth" onChange={(e) => {
                                    setsrmonth (e.target.value);
                                }}>
                                     <option disabled selected value="">Select</option>
                                {selectMonth.map((selmonth) => (
                                    <option key={selmonth.value} value={selmonth.value}>
                                        {selmonth.label}
                                    </option>
                                ))}
                                   </select>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Attrition</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="srattrition"
                                        name="srattrition" onChange={(e) => {
                                            setsrattrition (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                       
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select Client <span className="redspan">*</span></Label>
                                    <select className="form-control style-input" required
                                   name="srclient" id="srclient" onChange={(e) => {
                                    setsrclient (e.target.value);
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
                            </Row>
                        <Row className="mt-3">
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">BD </Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="srbd"
                                        name="srbd" onChange={(e) => {
                                            setsrbd (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Total GP </Label>
                                    <Input
                                        type="text"  required
                                        className="style-input"
                                        id="srtotgp"
                                        name="srtotgp" onChange={(e) => {
                                            setsrtotgp (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Actual Start</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="sractualstart"
                                        name="sractualstart" onChange={(e) => {
                                            setsractualstart (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Avg GP Added <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="sravggpadded"
                                        name="sravggpadded" onChange={(e) => {
                                            setsravggpadded (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Net Total GP </Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="srnettotgp"
                                        name="srnettotgp" onChange={(e) => {
                                            setsrnettotgp (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Start </Label>
                                    <Input
                                        type="date" required
                                        className="style-input"
                                        id="srstart"
                                        name="srstart" onChange={(e) => {
                                            setsrstart (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row className="mt-3">
                            {/* <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Total GP Added</Label>
                                    <Input
                                        type="text"
                                        id="srmargintype"
                                        className="style-input"
                                        name="srmargintype" onChange={(e) => {
                                            setsrmargintype (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col> */}
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Net Total GP Added </Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="srnettotgpadded"
                                        name="srnettotgpadded" onChange={(e) => {
                                            setsrnettotgpadded (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                       
                           
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Type Of Employement</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="srtypeofemployement"
                                        name="srtypeofemployement" onChange={(e) => {
                                            setsrtypeofemployement (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                        <Col lg={12}>
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button className="btn btn-secondary ml-3">Cancel</button>
                            </Col>
                        </Row>
                        </Form>
        </React.Fragment>
    );
};

export default UploadSalryArche;



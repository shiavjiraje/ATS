import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, FormGroup, Form, Label} from 'reactstrap';
import { getClientList } from '../../../redux/client/actions';
import { setCall } from '../../../redux/salescallreport/actions';

const AddCall = () => {
    let clientList = useSelector((state) => state.Client.clients || []);
    let loginDetails = useSelector((state)=> state.Auth.user || []);
    //console.log(loginDetails.Username);
    var getUsername = loginDetails.Username;
    const [dt, setdt]=useState('');
    const [client, setclient]=useState('');
    const [poc, setpoc]=useState('');
    const [agenda, setagenda]=useState('');
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(getClientList());
         // eslint-disable-next-line 
     }, []);
     const handleSubmit=(e)=>{
        e.preventDefault();
       const reqBody ={
        dt:dt,
        client:client,
        poc:poc,
        agenda:agenda,
        username:getUsername
       // teammember
       }
       dispatch(setCall(reqBody));
     }
    
    return (
        <React.Fragment>
            
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col className="col-md-6 offset-md-3">
                        <div className="card p-5" style={{height:'600px'}}>
                        <h5 className="text-uppercase  text-center">Create Team</h5>
                    <Row>
                    <Col lg={12}>
                                <FormGroup>
                                <Label for="empleadoApellidos">Call Date</Label>
                                    <input type="date" name="dt" className="form-control" id="dt" 
                                        onChange={(e) => {
                                            setdt (e.target.value);
                                        }} />
                                    
                                   
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select Client</Label>
                                   
                                    <select className="form-control" name="client"
                                    id="client"  onChange={(e) => {
                                        setclient (e.target.value);
                                    }}>
                                         <option selected desabled>Select</option>
                                         {clientList.map((client) => (
                                    <option key={client.cid} value={client.cid}>
                                        {client.cname}
                                    </option>
                                ))}
                                    </select>
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                <Label for="empleadoApellidos">POC</Label>
                                    <input type="text" name="poc" className="form-control" id="poc" 
                                        onChange={(e) => {
                                            setpoc (e.target.value);
                                        }} />
                                    
                                   
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                <Label for="empleadoApellidos">Agenda</Label>
                                    <input type="text" name="agenda" className="form-control" id="agenda" 
                                        onChange={(e) => {
                                            setagenda (e.target.value);
                                        }} />
                                    
                                   
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={12}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button className="btn btn-secondary ml-3">Cancel</button>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
            
                       
                        </Form>
        </React.Fragment>
    );
};

export default AddCall;




import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Label,
    FormGroup,
    Button,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';
import { AvForm, AvGroup, AvFeedback } from 'availity-reactstrap-validation';
import { User } from 'react-feather';
import { getClientList } from '../../redux/client/actions';
import { getSalesUserList } from '../../redux/salesuser/actions';
import { createCws } from '../../redux/clientwisesales/actions';
import moment from 'moment';
const AssignClient =(props)=>{
    const [ cid, setCid] = useState([]);
    const [ uid, setUid]= useState([]);
    let clientList = useSelector((state) => state.Client.clients || []);
    let salesUserList = useSelector((state) => state.SalesUser.salesuser || []);
    let loginDetails = useSelector((state)=> state.Auth.user || []);
    //console.log("cws", salesUserList)
    var currentTime = moment().format('YYYY-MM-DD'); 
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(getClientList());
        dispatch(getSalesUserList());
         // eslint-disable-next-line 
     }, []);
     const handleSubmit = e => {
        var getUsername = loginDetails.Username;
        e.preventDefault();
        const reqBody ={
            cid:cid ,
            uid:uid,
            username:getUsername,
            createdatetime:currentTime
        };
        dispatch(createCws(reqBody));
    }
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <AvForm onSubmit={handleSubmit} className="authentication-form card p-5">
                                
                            <h5 className="text-uppercase  text-center">Assign Client To Sales</h5>
                                <AvGroup className="">
                                    <Label for="fullname">Select Sales User</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <User className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <select
                                className="form-control"
                                name="uid"
                                required onChange={(e,i) => {
                                    setUid(e.target.value);
                                }}>
                                    <option disabled selected>Select</option>
                                {salesUserList.map((salesusers) => (
                                    <option key={salesusers.EId} value={salesusers.EId}>
                                        {salesusers.EFullname}
                                    </option>
                                ))}
                            </select>
                                    </InputGroup>

                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>
                                <AvGroup className="">
                                    <Label for="fullname">Select Client Name</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <User className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <select
                                className="form-control"
                                name="cid"
                                required onChange={(e,i) => {
                                    setCid(e.target.value);
                                }}>
                                    <option disabled selected>Select</option>
                                {clientList.map((client) => (
                                    <option key={client.cid} value={client.cid}>
                                        {client.cname}
                                    </option>
                                ))}
                            </select>
                                    </InputGroup>

                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>
                                <FormGroup className="form-group mb-0 text-center">
                                    <Button type="submit" className="btn-block btn btn-secondary">
                                        Assign Client
                                    </Button>
                                </FormGroup>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

export default AssignClient;

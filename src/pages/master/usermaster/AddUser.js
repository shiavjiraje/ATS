import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, FormGroup, Form, Label, Input} from 'reactstrap';
import { getRoleList } from '../../../redux/role/actions';
import { setUser } from '../../../redux/user/actions';
//import axios from 'axios';
// import Select from 'react-select';
const AddUser = () => { 
    const dispatch = useDispatch();
    const [ECode , setECode]=useState('');
    const [EEtype, setEEtype]=useState([]);
    const [EBankName, setEBankName]=useState('');
    const [EFullname, setEFullname]=useState('');
    const [ECompany_Name, setECompany_Name]=useState('');
    const [EAccountNo, setEAccountNo]=useState('');
    const [EGender, setEGender]=useState([]);
    const [EDepartment, setEDepartment]=useState('');
    const [EBranch, setEBranch]=useState('');
    const [EEmail, setEEmail]=useState('');
    const [EDesignation, setEDesignation]=useState('');
    const [EIFC_Code, setEIFC_Code]=useState('');
    const [EDOB, setEDOB]=useState('');
    const [ELocation, setELocation]=useState('');
    const [EPFAccount, setEPFAccount]=useState('');
    const [EAddress, setEAddress]=useState('');
    const [ECAddress, setECAddress]=useState('');
    const [EOfferDate, setEOfferDate]=useState('');
    const [EPAN_No, setEPAN_No]=useState('');
    const [EJoinDate, setEJoinDate]=useState('');
    const [EAadhar_no, setEAadhar_no]=useState('');
    const [ERole, setERole]=useState([]);
    const [ESalary, setESalary]=useState('');
    const [EPostal, setEPostal]=useState('');
    const [EUserName, setEUserName]=useState('');
    const [EPF, setEPF]=useState('');
    const [EContNo, setEContNo]=useState('');
    const [EPassword, setEPassword]=useState('');
    const [EPT, setEPT]=useState('');
    const [EEmergencyContNo, setEEmergencyContNo]=useState('');
    const [EBloodGroup, setEBloodGroup]=useState('');
    const [EESI, setEESI]=useState('');
    const [EPFApply, setEPFApply]=useState(true);
    const [EPTApply, setEPTApply]=useState(true);
    const [EESIApply, setEESIApply]=useState(true);
    const [Ephoto,setEphoto]=useState('');

    

    
  
    const handleSubmit = e => {
        e.preventDefault();
        const reqBody ={
            ECode:ECode ,
            EEtype:EEtype,
            EBankName:EBankName,
            EFullname:EFullname,
            ECompany_Name:ECompany_Name,
            EAccountNo:EAccountNo,
            EGender:EGender,
            EDepartment:EDepartment,
            EBranch:EBranch,
            EEmail:EEmail,
            EDesignation,
            EIFC_Code:EIFC_Code,
            EDOB:EDOB,
            ELocation:ELocation,
            EPFAccount:EPFAccount,
            EAddress:EAddress,
            ECAddress:ECAddress,
            EOfferDate:EOfferDate,
            EPAN_No:EPAN_No,
            EJoinDate:EJoinDate,
            EAadhar_no:EAadhar_no,
            ERole:ERole,
            ESalary:ESalary,
            EPostal:EPostal,
            EUserName:EUserName,
            EPF:EPF,
            EContNo:EContNo,
            EPassword:EPassword,
            EPT:EPT,
            EEmergencyContNo:EEmergencyContNo,
            EBloodGroup:EBloodGroup,
            EESI:EESI,
            EPFApply:EPFApply,
            EPTApply:EPTApply,
            EESIApply:EESIApply,
            Ephoto:Ephoto
        };
        dispatch(setUser(reqBody));
    }
    const [selectEmpType] = React.useState([
        {
            label: 'CONTRACTUAL',
            value: 'CONTRACTUAL',
        },
        { label: 'PERMANENT', value: 'PERMANENT' },
        { label: 'C2H', value: 'C2H' },
    ]);
    const [selectGender] = React.useState([
        { label: 'Male', value: 'Male',  },
        { label: 'Female', value: 'Female' }
    ]);
    let roleList = useSelector((state) => state.Role.role || []);
    useEffect( () => {
        dispatch(getRoleList());
    
        // eslint-disable-next-line
      }, [] );
    return (
        <React.Fragment>
            
            <Form onSubmit={handleSubmit}>
                                <Row>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Employee Code <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        name="ECode "
                                        id="ECode "
                                        onChange={(e) => {
                                            setECode (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Employee Type <span className="redspan">*</span></Label>
                                   <select className="form-control style-input" required
                                   name="EEtype" id="EEtype" onChange={(e) => {
                                    setEEtype (e.target.value);
                                }}>
                                     <option disabled selected>Select</option>
                                {selectEmpType.map((emptype) => (
                                    <option key={emptype.value} value={emptype.value}>
                                        {emptype.label}
                                    </option>
                                ))}
                                   </select>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Bank Name</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="EBankName"
                                        name="EBankName" onChange={(e) => {
                                            setEBankName (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Full Name <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="EFullname"
                                        name="EFullname" onChange={(e) => {
                                            setEFullname (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Company Name<span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="ECompany_Name"
                                        name="ECompany_Name" onChange={(e) => {
                                            setECompany_Name (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Account Number</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="EAccountNo"
                                        name="EAccountNo" onChange={(e) => {
                                            setEAccountNo (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Gender <span className="redspan">*</span></Label>
                                <select className="form-control style-input" required name="EGender" id="EGender" onChange={(e) => {
                                    setEGender (e.target.value);
                                }}>
                                     <option disabled selected>Select</option>
                                    {selectGender.map((gender) => (
                                    <option key={gender.value} value={gender.value}>
                                        {gender.label}
                                    </option>
                                ))}
                                </select>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Deapartment <span className="redspan">*</span></Label>
                                    <Input
                                        type="text"  required
                                        className="style-input"
                                        id="EDepartment"
                                        name="EDepartment" onChange={(e) => {
                                            setEDepartment (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Branch</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="EBranch"
                                        name="EBranch" onChange={(e) => {
                                            setEBranch (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Email <span className="redspan">*</span></Label>
                                    <Input
                                        type="email" required
                                        className="style-input"
                                        id="EEmail"
                                        name="EEmail" onChange={(e) => {
                                            setEEmail (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Designation <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="EDesignation"
                                        name="EDesignation" onChange={(e) => {
                                            setEDesignation (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">IFSC Code</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="EIFC_Code"
                                        name="EIFC_Code" onChange={(e) => {
                                            setEIFC_Code (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Date Of Birth <span className="redspan">*</span></Label>
                                    <Input
                                        type="date" required
                                        className="style-input"
                                        id="EDOB"
                                        name="EDOB" onChange={(e) => {
                                            setEDOB (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Location <span className="redspan">*</span></Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="ELocation"
                                        name="ELocation" onChange={(e) => {
                                            setELocation (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">PF Account No</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="EPFAccount"
                                        name="EPFAccount" onChange={(e) => {
                                            setEPFAccount (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={6}>
                            <Label>Permanent Address</Label>
                            <textarea
                                className="form-control style-input"
                                rows="3"
                                name="EAddress" id="EAddress" onChange={(e) => {
                                    setEAddress (e.target.value);
                                }}></textarea>
                        </Col>
                        <Col lg={6}>
                            <Label>Current Address</Label>
                            <textarea
                                className="form-control style-input"
                                rows="3"
                                name="ECAddress" id="ECAddress" onChange={(e) => {
                                    setECAddress (e.target.value);
                                }}></textarea>
                        </Col>
                    </Row>
                        
                        <Row className="mt-3">
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Offer Date <span className="redspan">*</span></Label>
                                    <Input
                                        type="date"
                                        id="EOfferDate"
                                        className="style-input"
                                        name="EOfferDate" onChange={(e) => {
                                            setEOfferDate (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">PAN Card Number</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="EPAN_No"
                                        name="EPAN_No" onChange={(e) => {
                                            setEPAN_No (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Join Date<span className="redspan">*</span></Label>
                                    <Input
                                        type="date" required
                                        className="style-input"
                                        id="EJoinDate"
                                        name="EJoinDate" onChange={(e) => {
                                            setEJoinDate (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Adhar Card Number</Label>
                                    <Input
                                        type="text"
                                        id="EAadhar_no"
                                        className="style-input"
                                        name="EAadhar_no" onChange={(e) => {
                                            setEAadhar_no (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Role <span className="redspan">*</span></Label>
                                    <select
                                        type="text" required
                                        className="style-input form-control"
                                        id="ERole"
                                        name="ERole" onChange={(e) => {
                                            setERole (e.target.value);
                                        }}>
                                             <option disabled selected>Select</option>
                                            {roleList.map((roles, i) => (
                                                <option key={i ++}  value={roles.role}>
                                                    {roles.role}
                                                </option>
                                            ))}
                                        </select>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Salary</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="ESalary"
                                        name="ESalary" onChange={(e) => {
                                            setESalary (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">PostCode</Label>
                                    <Input
                                        type="text"
                                        id="EPostal"
                                        className="style-input"
                                        name="EPostal" onChange={(e) => {
                                            setEPostal (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Username <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        id="EUserName"
                                        className="style-input"
                                        name="EUserName" onChange={(e) => {
                                            setEUserName (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Provident Fund</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="EPF"
                                        name="EPF" onChange={(e) => {
                                            setEPF (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Phone Number</Label>
                                    <Input
                                        type="text"
                                        id="EContNo"
                                        className="style-input"
                                        name="EContNo" onChange={(e) => {
                                            setEContNo (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Password <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        id="EPassword"
                                        className="style-input"
                                        name="EPassword" onChange={(e) => {
                                            setEPassword (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Professional Tax (%)</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="EPT"
                                        name="EPT" onChange={(e) => {
                                            setEPT (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Emergancy Contact Number</Label>
                                    <Input
                                        type="text"
                                        id="EEmergencyContNo"
                                        className="style-input"
                                        name="EEmergencyContNo" onChange={(e) => {
                                            setEEmergencyContNo (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Blood Group</Label>
                                    <Input
                                        type="text"
                                        id="EBloodGroup"
                                        className="style-input"
                                        name="EBloodGroup" onChange={(e) => {
                                            setEBloodGroup (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">ESI</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="EESI"
                                        name="EESI" onChange={(e) => {
                                            setEESI (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={6}>
                        <Row>
                        <label className="col-sm-12 m-0">What Applied</label>
                            <Col lg={4}>
                        <div className="form-group form-check">                            
                            <label className="form-check-label">
                            <input className="form-check-input" type="checkbox"  id="EPFApply"
                                        name="EPFApply" value={EPFApply || true} 
                                        defaultChecked={EPFApply} onClick={(e) => {
                                            setEPFApply (e.target.value);
                                        }}/> PF Apply 
                            </label>
                        </div>
                        </Col>
                        <Col lg={4}>
                        <div className="form-group form-check">                            
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"  id="EPTApply"
                                        name="EPTApply" value={EPTApply || true}  
                                        defaultChecked={EPTApply} onClick={(e) => {
                                            setEPTApply (e.target.value);
                                        }}/> PT Apply
                            </label>
                        </div>
                        </Col>
                        <Col lg={4}>
                        <div className="form-group form-check">                            
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="EESIApply"
                                        name="EESIApply"  value={EESIApply || true} 
                                        defaultChecked={EESIApply} onClick={(e) => {
                                            setEESIApply (e.target.value);
                                        }}/> ESI Apply
                            </label>
                        </div>
                        </Col>
                        </Row>
                        </Col>
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">File Upload</Label>
                                    <Input
                                        type="file"
                                        className="style-input"
                                        id="Ephoto"
                                        name="Ephoto" onChange={(e) => {
                                            setEphoto (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={12}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button className="btn btn-secondary ml-3">Cancel</button>
                            </Col>
                        </Row>
                        </Form>
        </React.Fragment>
    );
};

export default AddUser;



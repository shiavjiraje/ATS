import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { getRequirementList, setRequirement } from '../../redux/requirement/actions';
import { getClientList } from '../../redux/client/actions';
import { getRecruiterList } from '../../redux/recruiter/actions';
import { Row, Col, FormGroup,  Label } from 'reactstrap';
import axios from 'axios';
import { Multiselect } from "multiselect-react-dropdown";
const AddRequirement = (props) => {
    //const [jidPost, setJid] = useState('1000034');
    const [jclientPost, setJclient] = useState([]);
    const [jobcodePost, setJobcode] = useState('');
    const [jskillPost, setJskill] = useState('');
    const [jpositionPost, setJposition] = useState('');
    const [jlocationPost, setJlocation] = useState([]);
    const [jendclientPost, setJendClient] = useState('');
    const [jtotminPost, setJtoMin] = useState('');
    const [jtotmaxPost, setJtoMax] = useState('');
    const [jrelminPost, setJelMin] = useState('');
    const [jrelmaxPost, setJelMax] = useState('');
    const [jbillratePost, setBillRate] = useState('');
    const [jpayratePost, setPayRate] = useState('');
    const [jpocnoPost, setJpocNo] = useState('');
    const [jmandatoryskillPost, setJmandatoryskill] = useState('');
    const [jjdPost, setJobDesc] = useState('');
    const [jcreatedbyPost, setJcreatedby] = useState('');
    
    const [jcategoryPost, setJcategory] = useState([]);
    const [jtypePost, setJtype] = useState([]);
    const [jemptypePost, setJemployementtyp] = useState([]);
    //const [jassignuserPost, setJassignuser] = useState([]);
    const [selectedValue, setSelectedValue] = useState([]);
    const handleMultiChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
      }
    const handleRequirementForm = (e) => {
        e.preventDefault();
        let reqBody = {
            //jid: jidPost,
            jclientid: jclientPost,
            jobcode: jobcodePost,
            jskill: jskillPost,
            jposition: jpositionPost,
            jlocation: jlocationPost,
            jendclient: jendclientPost,
            jtotmin: jtotminPost,
            jtotmax: jtotmaxPost,
            jrelmin: jrelminPost,
            jrelmax: jrelmaxPost,
            jbillrate: jbillratePost,
            jpayrate: jpayratePost,
            jpocno: jpocnoPost,
            jmandatoryskill: jmandatoryskillPost,
            jjd: jjdPost,
            jcategory: jcategoryPost,
            jtype: jtypePost,
            jemployementtyp: jemptypePost,
            jassignuser: selectedValue,
            jcreatedby:jcreatedbyPost
        };
       // console.log(reqBody);
        axios
            .post('http://144.48.250.235:98/api/Requirement_Master', reqBody)

            .then((response) => {
               console.log(response);
            });
        cleanForm();
    };

    
    
    let clientList = useSelector((state) => state.Client.clients || []);
    let recruterList = useSelector((state) => state.Recruiter.recruiters || []);
    //console.log("recruter", recruterList)
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(getClientList());
        dispatch(getRecruiterList());
         // eslint-disable-next-line 
     }, []);
    
    
    const cleanForm = () => {
        alert();
        //setJid('');
        setJobcode('');
        setJskill('');
        setJposition('');
        setJendClient('');
        setJtoMin('');
        setJtoMax('');
        setJelMin('');
        setJelMax('');
        setBillRate('');
        setPayRate('');
        setJpocNo('');
        setJmandatoryskill('');
        setJobDesc('');
    };
    
    const [selectCatagory] = React.useState([
        {
            label: 'IT',
            value: 'IT',
        },
        { label: 'NON IT', value: 'NON IT' }
    ]);
    // const [selectLocation] = React.useState([
    //     {
    //         label: 'Mumbai',
    //         value: 'Mumbai',
    //     },
    //     { label: 'Gujrat', value: 'Gujrat' },
    //     { label: 'Pune', value: 'Pune' },
    // ]);
    const [selectReqType] = React.useState([
        {
            label: 'DRIVE',
            value: 'DRIVE',
        },
        { label: 'PROCESS', value: 'PROCESS' },
        { label: 'EXCLUSIVE', value: 'EXCLUSIVE' },
    ]);
    const [selectEmpType] = React.useState([
        {
            label: 'CONTRACTUAL',
            value: 'CONTRACTUAL',
        },
        { label: 'PERMANENT', value: 'PERMANENT' },
        { label: 'C2H', value: 'C2H' },
    ]);
    // const recruterList=[
    //     {name: 'EFullname', id: 'Eid'}
    // ]
    return (
        <React.Fragment>
            <form onSubmit={handleRequirementForm}>
                <Row>
                    <Col lg={4}>
                        {/* <input
                            type="hidden"
                            value="testUi"
                            onChange={(e) => {
                                setJid(e.target.value);
                            }}
                            name="jid"
                        /> */}
                        <input
                            type="hidden"
                            value="testUi"
                            onChange={(e) => {
                                setJcreatedby (e.target.value);
                            }}
                            name="jcreatedby "
                        />
                        <FormGroup>
                            <Label for="empleadoApellidos">
                                Client <span className="redspan">*</span>
                            </Label>
                            <select
                                className="style-input form-control"
                                name="jclientid"
                                required onChange={(e,i) => {
                                    setJclient(e.target.value);
                                }}>
                                    <option disabled selected>Select</option>
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
                            <Label>
                                Job Code<span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                className="style-input form-control"
                                onChange={(e) => {
                                    setJobcode(e.target.value);
                                }}
                                name="jobcode"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Main Skill<span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {
                                    setJskill(e.target.value);
                                }}
                                className="style-input form-control"
                                name="jskill"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Number of Position <span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {
                                    setJposition(e.target.value);
                                }}
                                className="style-input form-control"
                                name="jposition"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Location <span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {
                                    setJlocation(e.target.value);
                                }}
                                className="style-input form-control"
                                name="jlocation"
                            />
                            {/* <select
                                required
                                className="style-input form-control"
                                required
                                name="jlocation"
                                onChange={(e) => {
                                    setJlocation(e.target.value);
                                }}>
                                {selectLocation.map((sellocation) => (
                                    <option key={sellocation.value} value={sellocation.value}>
                                        {sellocation.label}
                                    </option>
                                ))}
                            </select> */}
                        </FormGroup>
                    </Col>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                End Client <span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {
                                    setJendClient(e.target.value);
                                }}
                                className="style-input form-control"
                                name="jendclient"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Total Minimum Experience <span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {
                                    setJtoMin(e.target.value);
                                }}
                                className="style-input form-control"
                                name="jtotmin"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Total Maximum Experience <span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {
                                    setJtoMax(e.target.value);
                                }}
                                className="style-input form-control"
                                name="jtotmax"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Relvent Minimum Experience <span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {
                                    setJelMin(e.target.value);
                                }}
                                className="style-input form-control"
                                name="jrelmin"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Relvent Maximum Experience <span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {
                                    setJelMax(e.target.value);
                                }}
                                className="style-input form-control"
                                name="jrelmax"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Bill Rate <span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {
                                    setBillRate(e.target.value);
                                }}
                                className="style-input form-control"
                                name="jbillrate"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Pay Rate <span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                className="style-input form-control"
                                onChange={(e) => {
                                    setPayRate(e.target.value);
                                }}
                                name="jpayrate"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>Select Catagory</Label>
                            <select
                                className="style-input form-control"
                                name="jcategory"
                                required
                                onChange={(e) => {
                                    setJcategory(e.target.value);
                                }}>
                                    <option disabled selected>Select</option>
                                {selectCatagory.map((catagory) => (
                                    <option key={catagory.value} value={catagory.value}>
                                        {catagory.label}
                                    </option>
                                ))}
                            </select>
                        </FormGroup>
                    </Col>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Requirments Type <span className="redspan">*</span>
                            </Label>
                            <select
                                className="style-input form-control"
                                name="jtype"
                                required
                                onChange={(e) => {
                                    setJtype(e.target.value);
                                }}>
                                    <option disabled selected>Select</option>
                                {selectReqType.map((reqtype) => (
                                    <option key={reqtype.value} value={reqtype.value}>
                                        {reqtype.label}
                                    </option>
                                ))}
                            </select>
                        </FormGroup>
                    </Col>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Type Of Employement <span className="redspan">*</span>
                            </Label>
                            <select
                                className="style-input form-control"
                                name="jemployementtyp"
                                required
                                onChange={(e) => {
                                    setJemployementtyp(e.target.value);
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
                </Row>
                <Row>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                POC Name <span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                className="style-input form-control"
                                onChange={(e) => {
                                    setJpocNo(e.target.value);
                                }}
                                name="jpocno"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={4}>
                        <FormGroup>
                            <Label>
                                Mandatory Skills <span className="redspan">*</span>
                            </Label>
                            <input
                                type="text"
                                required
                                className="style-input form-control"
                                onChange={(e) => {
                                    setJmandatoryskill(e.target.value);
                                }}
                                name="jmandatoryskill"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Label>Description</Label>
                        <textarea
                            className="form-control style-textarea"
                            rows="7"
                            onChange={(e) => {
                                setJobDesc(e.target.value);
                            }}
                            name="jjd"></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className="mb-5">
                        <h5 className="text-uppercase mt-4">Assign To :</h5>
                        <Multiselect
                            options={recruterList}
                            // onChange={(e) => {
                            //     setJassignuser(e.target.value); console.log(e.target.value)
                            // }}
                            value={recruterList.filter(obj => selectedValue.includes(obj.value))} // set selected values
        //options={data} // set list of the data
        onChange={handleMultiChange}
                            name="jassignuser"
                            displayValue="EFullname"
                            showCheckbox={true}
                            />
                            {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
      </div>}
                        {/* {recruterList.map((recruter, index) => (
                            <div className="form-check mt-1">
                                <label className="form-check-label">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        onChange={(e) => {
                                           // setJassignuser(e.target.value);
                                           handleCheeckboxChange()
                                        }}
                                        value={recruter.Eid}
                                    />
                                    {recruter.EFullname}
                                </label>
                            </div>
                        ))} */}
                    </Col>
                </Row>
                <div className="row">
                    <div className="col-md-12 mt-3 text-right">
                        <button type="submit" className="btn btn-primary mr-2">
                            Submit
                        </button>
                        <button className="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
};

export default AddRequirement;

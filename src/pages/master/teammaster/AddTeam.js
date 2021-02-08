import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, FormGroup, Form, Label} from 'reactstrap';
import { getRecruiterList } from '../../../redux/recruiter/actions';
import { Multiselect } from "multiselect-react-dropdown";
import moment from 'moment';
import { createTeam } from '../../../redux/teammaster/actions';
// import Select from 'react-select';
const AddTeam = () => {
    //const [selectedValue, setSelectedValue] = useState([]);
    var currentTime = moment().format('DD/MM/YYYY HH:mm'); 
    let recruterList = useSelector((state) => state.Recruiter.recruiters || []);
    //console.log("recruter", recruterList)
    const [createdby, setCreatedby]=useState(currentTime);
    const [teamlead, setTeamlead]=useState('');
    const [teammember, setSelectedValue]=useState([]);
    const onSelect=(selectedList, selectedItem)=> {
        setSelectedValue(selectedList.map(x=>x.EFullname));
    }
    
    const onRemove=(selectedList, removedItem)=> {
        setSelectedValue(selectedList.map(x=>x.EFullname));
    }
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(getRecruiterList());
         // eslint-disable-next-line 
     }, []);
     const handleSubmit=(e)=>{
        e.preventDefault();
       const reqBody ={
        createdby,
        teamlead,
        teammember
       }
       dispatch(createTeam(reqBody));
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
                                    <input type="hidden" name="createdby" id="createdby" 
                                        onChange={(e) => {
                                            setCreatedby (e.target.value);
                                        }}value={currentTime} />
                                    <Label for="empleadoApellidos">Select Team Lead</Label>
                                   
                                    <select className="form-control" name="teamlead"
                                    id="teamlead"  onChange={(e) => {
                                        setTeamlead (e.target.value);
                                    }}>
                                         <option selected desabled>Select</option>
                                    {recruterList.map((recruter,i) => (
                                    <option key={i++} value={recruter.EId}>
                                        {recruter.EFullname}
                                    </option>
                                ))}
                                    </select>
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                <Label for="empleadoApellidos">Select Team Member</Label>
                                <Multiselect
                            options={recruterList}
                            onSelect={onSelect}
                            onRemove={onRemove}
                            name="teammember"
                            displayValue="EFullname"
                            showCheckbox={true}
                            />   
                                {/* {recruterList.map((recruter, i, index) => (
                            <div className="form-check mt-1">
                                <label className="form-check-label">
                                    <input
                                        type="checkbox"
                                        key={i ++}
                                        className="form-check-input"
                                        onClick={logToConsole}
                                        value={recruter.Eid}
                                    />
                                    {recruter.EFullname}
                                </label>
                            </div>
                        ))}  */}
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

export default AddTeam;



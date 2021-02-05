import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, FormGroup, Form, Label} from 'reactstrap';
import { getRecruiterList } from '../../../redux/recruiter/actions';
// import Select from 'react-select';
const AddTeam = () => {

    let recruterList = useSelector((state) => state.Recruiter.recruiters || []);
    //console.log("recruter", recruterList)
    const dispatch = useDispatch();
    useEffect(() => {
        // other code
        dispatch(getRecruiterList());
     
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []) ;
    return (
        <React.Fragment>
            
            <Form>
                <Row>
                    <Col className="col-md-6 offset-md-3">
                        <div className="card p-5">
                        <h5 className="text-uppercase  text-center">Create Team</h5>
                    <Row>
                            <Col lg={12}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select Team Lead</Label>
                                   
                                    <select className="form-control">
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
                                {recruterList.map((recruter, i, index) => (
                            <div className="form-check mt-1">
                                <label className="form-check-label">
                                    <input
                                        type="checkbox"
                                        key={i ++}
                                        className="form-check-input"
                                        onChange={(e) => {
                                           ///setJassignuser(e.target.value);
                                          // handleCheeckboxChange()
                                        }}
                                        value={recruter.Eid}
                                    />
                                    {recruter.EFullname}
                                </label>
                            </div>
                        ))} 
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={12}>
                            <button className="btn btn-primary">Submit</button>
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



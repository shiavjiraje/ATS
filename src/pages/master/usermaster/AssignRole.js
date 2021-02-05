import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, FormGroup, Form, Label} from 'reactstrap';
//import { getRecruiterList } from '../../../redux/recruiter/actions';
import { getUserList } from '../../../redux/user/actions';
import { getRoleList } from '../../../redux/role/actions';
// import Select from 'react-select';
const AssignRole = () => {

    const [uid	, setUid]=useState([]);
    const [role, setRole]=useState([]);

    let userList = useSelector((state) => state.Users.users || []);
    let roleList = useSelector((state) => state.Role.role || []);
    //console.log("recruter", recruterList)
    const dispatch = useDispatch();
    useEffect(() => {
        // other code
        dispatch(getUserList());
        dispatch(getRoleList());
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []) ;
     const handleSubmit = e => {
        e.preventDefault();
        const reqBody ={
            uid:uid ,
            role:role
        };
        axios
            .post('http://144.48.250.235:98/api/UserRole_Master', reqBody)
            .then((response) => {
               console.log(response);
            });
           e.target.reset();
    }
    
    return (
        <React.Fragment>
            
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col className="col-md-6 offset-md-3">
                        <div className="card p-5">
                        <h5 className="text-uppercase  text-center">Assign User Role</h5>
                    <Row>
                            <Col lg={12}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select User</Label>
                                    <select className="form-control style-input"
                                    name="uid "
                                    id="uid "
                                    onChange={(e) => {
                                        setUid (e.target.value);
                                    }}>
                                    <option selected disabled>Select</option>
                                    {userList.map((user,i) => (
                                    <option key={i++} value={user.EId}>
                                        {user.EFullname}
                                    </option>
                                ))}
                                    </select>
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select Role</Label>
                                    <select className="form-control style-input"
                                    name="role "
                                    id="role "
                                    onChange={(e) => {
                                        setRole (e.target.value);
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

export default AssignRole;



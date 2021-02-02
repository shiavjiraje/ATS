import React from 'react';
import { Row, Col, FormGroup, Form, Label} from 'reactstrap';
// import Select from 'react-select';
const AssignRole = () => {

   
    return (
        <React.Fragment>
            
            <Form>
                <Row>
                    <Col className="col-md-6 offset-md-3">
                        <div className="card p-5">
                        <h5 className="text-uppercase  text-center">Assign User Role</h5>
                    <Row>
                            <Col lg={12}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select User</Label>
                                    <select className="form-control style-input"></select>
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select Role</Label>
                                    <select className="form-control style-input"></select>
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

export default AssignRole;



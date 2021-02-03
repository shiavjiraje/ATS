import React from 'react';
import { Row, Col, FormGroup, Form, Label, Input} from 'reactstrap';
// import Select from 'react-select';
const AddUser = () => {

   
    return (
        <React.Fragment>
            
            <Form>
                                <Row>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Employee ID</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Type</Label>
                                   <select className="form-control style-input"></select>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Bank Name</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Full Name</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Company Name</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Account Number</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Gender</Label>
                                <select className="form-control style-input"></select>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Deapartment</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Branch</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Email</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Designation</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">IFSC Code</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Date Of Birth</Label>
                                    <Input
                                        type="date"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Location</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">PF Account No</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={6}>
                            <Label>Permanent Address</Label>
                            <textarea
                                className="form-control style-input"
                                rows="3"
                                name="jjd"></textarea>
                        </Col>
                        <Col lg={6}>
                            <Label>Current Address</Label>
                            <textarea
                                className="form-control style-input"
                                rows="3"
                                name="jjd"></textarea>
                        </Col>
                    </Row>
                        
                        <Row className="mt-3">
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Offer Date</Label>
                                    <Input
                                        type="date"
                                        id="jobcode"
                                        className="style-input"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">PAN Card Nymber</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Join Date</Label>
                                    <Input
                                        type="date"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Adhar Card Number</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        className="style-input"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Role</Label>
                                    <select
                                        type="text"
                                        className="style-input form-control"
                                        id="jobcode"
                                        name="jobcode" ></select>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Salary</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">PostCode</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        className="style-input"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Username</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        className="style-input"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Provident Fund</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Phone Number</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        className="style-input"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Password</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        className="style-input"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Professional Tax (%)</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Emergancy Contact Number</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        className="style-input"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Blood Group</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        className="style-input"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">ESI</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
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
                            <input className="form-check-input" type="checkbox"/> PF Apply 
                            </label>
                        </div>
                        </Col>
                        <Col lg={4}>
                        <div className="form-group form-check">                            
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"/> PT Apply
                            </label>
                        </div>
                        </Col>
                        <Col lg={4}>
                        <div className="form-group form-check">                            
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"/> ESI Apply
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
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={12}>
                            <button className="btn btn-primary">Submit</button>
                            <button className="btn btn-secondary ml-3">Cancel</button>
                            </Col>
                        </Row>
                        </Form>
        </React.Fragment>
    );
};

export default AddUser;



import React from 'react';
import { Row, Col, FormGroup, Form, Label, Input} from 'reactstrap';
// import Select from 'react-select';
const AddClient = () => {

   
    return (
        <React.Fragment>
            
            <Form>
                                <Row>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Client Name</Label>
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
                                <Label for="empleadoNombre">Contact person 1</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
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
                                <Label for="empleadoNombre">Number</Label>
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
                                <Label for="empleadoNombre">Contact person 2</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
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
                                <Label for="empleadoNombre">Number</Label>
                                    <Input
                                        type="text"
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={12}>
                            <Label>Address</Label>
                            <textarea
                                className="form-control style-input"
                                rows="3"
                                name="jjd"></textarea>
                        </Col>
                    </Row>
                        <Row className="mt-4">                            
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Type</Label>
                                    <select
                                        type="text"
                                        className="style-input form-control"
                                        id="jobcode"
                                        name="jobcode" ></select>
                                </FormGroup>
                            </Col>  
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Segment</Label>
                                    <select
                                        type="text"
                                        className="style-input form-control"
                                        id="jobcode"
                                        name="jobcode" ></select>
                                </FormGroup>
                            </Col>    
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Margin Type</Label>
                                    <select
                                        type="text"
                                        className="style-input form-control"
                                        id="jobcode"
                                        name="jobcode" ></select>
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

export default AddClient;



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
                                    <Label for="empleadoApellidos">Client Name<span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                           
                        </Row>
                        <Row>
                        <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Contact Person <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Email <span className="redspan">*</span></Label>
                                    <Input
                                        type="email" required
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Number <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Contact person <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Email <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Number <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={12}>
                            <Label>Address <span className="redspan">*</span></Label>
                            <textarea
                                className="form-control style-input"
                                rows="3" required
                                name="jjd"></textarea>
                        </Col>
                    </Row>
                        <Row className="mt-4">                            
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Type <span className="redspan">*</span></Label>
                                    <select
                                        type="text" required
                                        className="style-input form-control"
                                        id="jobcode"
                                        name="jobcode" ></select>
                                </FormGroup>
                            </Col>  
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Segment <span className="redspan">*</span></Label>
                                    <select
                                        type="text" required
                                        className="style-input form-control"
                                        id="jobcode"
                                        name="jobcode" ></select>
                                </FormGroup>
                            </Col>    
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Margin Type <span className="redspan">*</span></Label>
                                    <select
                                        type="text" required
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



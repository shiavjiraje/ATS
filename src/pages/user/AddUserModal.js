import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col, FormGroup, Form, Label, Input} from 'reactstrap';
import Select from 'react-select';
class AddUserModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
        this.openModalWithSize = this.openModalWithSize.bind(this);
        this.openModalWithClass = this.openModalWithClass.bind(this);
    }

    /**
     * Show/hide the modal
     */
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    };

    /**
     * Opens large modal
     */
    openModalWithSize = size => {
        this.setState({ size: size, className: null });
        this.toggle();
    };

    /**
     * Opens modal with custom class
     */
    openModalWithClass = className => {
        this.setState({ className: className, size: null });
        this.toggle();
    };

    render() {
        return (
            <React.Fragment>
                        <Button color="primary" className="mr-2" onClick={this.toggle}><i className="uil uil-plus"></i>Add User</Button>
                            <Modal
                                isOpen={this.state.modal}
                                toggle={this.toggle}
                                className={this.state.className}
                                size="lg">
                                <ModalHeader toggle={this.toggle}>Add User Requirment</ModalHeader>
                                <ModalBody>
                                <Form>
                                <Row>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Client</Label>
                                    <Select />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Job Code</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Main Skill</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Number of Position</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Location</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">End Client</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Total Minimum Experience</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Total Maximum Experience</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Relvent Minimum Experience</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Relvent Maximum Experience</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Bill Rate</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Pay Rate</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Select Catagory</Label>
                                    <Select/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Requirments Type</Label>
                                   <Select/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Type Of Employement</Label>
                                    <Select/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">POC Name</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Mandatory Skills</Label>
                                    <Input
                                        type="text"
                                        id="jobcode"
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Add</Button>
                                    <Button color="secondary" className="ml-1" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
            </React.Fragment>
        );
    }
}

export default AddUserModal;

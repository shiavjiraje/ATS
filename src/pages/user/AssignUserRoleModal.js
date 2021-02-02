import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col, FormGroup, Form, Label} from 'reactstrap';
import Select from 'react-select';
class AssignUserRoleModal extends Component {
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
                        <Button color="success" className="mr-2" onClick={this.toggle}><i className="uil-comment-alt-check"></i>Assign Role</Button>
                    
                            <Modal
                                isOpen={this.state.modal}
                                toggle={this.toggle}
                                className={this.state.className}>
                                <ModalHeader toggle={this.toggle}>Assign User Role</ModalHeader>
                                <ModalBody>
                                <Form>
                                <Row>
                            <Col lg={12}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select User</Label>
                                    <Select />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Label for="empleadoApellidos">Select Role</Label>
                                    <Select />
                                </FormGroup>
                            </Col>
                        </Row>
                        </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Create</Button>
                                    <Button color="secondary" className="ml-1" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
            </React.Fragment>
        );
    }
}

export default AssignUserRoleModal;

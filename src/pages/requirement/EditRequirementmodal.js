import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import * as actions from '../../redux/requirement/actions';
const EditRequirementmodal = (props, row) => {
    const {
        //buttonLabel,
        className,
    } = props;
    const dispatch = useDispatch();

    const modal = useSelector((state) => state.Requirements.modal);
    const requirmentStore = useSelector((state) => state.Requirements.requirement);
    const [requirement, setRequirement] = useState( {
      jobcode: '',
      jskill:'',
  } );
  

  const { jobcode, jskill } = requirement;

    useEffect( () => {
      
      setRequirement( {
          ...requirement,
          jobcode: requirmentStore ? requirmentStore.jobcode : '',
          jskill:requirmentStore ? requirmentStore.jskill:'',
      } );
  
      // eslint-disable-next-line
    }, [requirmentStore] );

    //console.log("Edit Requirement id :", requirmentStore);
    const toggle = () => {
        if (!modal) {
            dispatch(actions.getRequirementModal());
           
        } else {
            dispatch(actions.hideRequirementModal());
        }
    }
    return (
        <div>
            <Modal isOpen={modal} size={"lg"} toggle={toggle} className={` ${className} 'modal-lg' `}>
                <ModalHeader toggle={toggle}>Update Requirment</ModalHeader>

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
                                        name="jobcode"
                                        id="jobcode"
                                        value={ jobcode || '' }/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Main Skill</Label>
                                    <Input
                                        type="text"
                                        name="jskill"
                                        id="jskill"
                                        value={ jskill || '' } />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Number of Position</Label>
                                    <Input
                                        type="text"
                                        
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Location</Label>
                                    <Input
                                        type="text"
                                        
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">End Client</Label>
                                    <Input
                                        type="text"
                                        
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
                                        
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Total Maximum Experience</Label>
                                    <Input
                                        type="text"
                                        
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Relvent Minimum Experience</Label>
                                    <Input
                                        type="text"
                                        
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
                                        
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Bill Rate</Label>
                                    <Input
                                        type="text"
                                        
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Pay Rate</Label>
                                    <Input
                                        type="text"
                                        
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
                                        
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Mandatory Skills</Label>
                                    <Input
                                        type="text"
                                        
                                        name="jobcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Add</Button>
                    <Button color="secondary" className="ml-1" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default EditRequirementmodal;

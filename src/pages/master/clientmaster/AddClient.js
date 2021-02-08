import React, { useState } from 'react';
import { Row, Col, FormGroup, Form, Label, Input} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { createClient } from '../../../redux/client/actions';
// import Select from 'react-select';
const AddClient = () => {
    const dispatch = useDispatch();
    const [cname, setCname]=useState('');
    const [cperson1, setCperson1 ]=useState('');
    const [cemail1, setCemail1 ]=useState('');
    const [ccnt1, setCcnt1 ]=useState('');
    const [cperson2, setCperson2]=useState('');
    const [cemail2, setCemail2 ]=useState('');
    const [ccnt2, setCcnt2 ]=useState('');
    const [caddress, setCaddress ]=useState('');
    const [ctype, setCtype ]=useState('');
    const [csegment, setCsegment ]=useState('');
    const [cmargintype, setCmargintype ]=useState('');
    const [ccategory, setCcategory]=useState('');
    const [cuser, setCuser]=useState('username');
   const handleSubmit=(e)=>{
       e.preventDefault();
       const reqBody ={
        cname,
        cperson1,
        cemail1,
        ccnt1,
        cperson2,
        cemail2,
        ccnt2,
        caddress,
        ctype,
        csegment,
        cmargintype,
        ccategory,
        cuser
       }
       dispatch(createClient(reqBody));
   }
    return (
        <React.Fragment>
            
            <Form onSubmit={handleSubmit}>
                                <Row>
                            <Col lg={4}>
                                <FormGroup>
                                <Input
                                        type="hidden" required
                                        className="style-input"
                                        id="cuser"
                                        name="cuser"
                                         onChange={(e) => {
                                            setCuser (e.target.value);
                                        }} />
                                    <Label for="empleadoApellidos">Client Name<span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="cname"
                                        name="cname"
                                         onChange={(e) => {
                                            setCname (e.target.value);
                                        }} />
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
                                        id="cperson1"
                                        name="cperson1"
                                         onChange={(e) => {
                                            setCperson1 (e.target.value);
                                        }} />
                                </FormGroup>
                            </Col>
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Email <span className="redspan">*</span></Label>
                                    <Input
                                        type="email" required
                                        className="style-input"
                                        id="cemail1"
                                        name="cemail1" 
                                         onChange={(e) => {
                                            setCemail1 (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Number <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="ccnt1"
                                        name="ccnt1" 
                                         onChange={(e) => {
                                            setCcnt1 (e.target.value);
                                        }}/>
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
                                        id="cperson2"
                                        name="cperson2" 
                                         onChange={(e) => {
                                            setCperson2 (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Email <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="cemail2"
                                        name="cemail2" 
                                         onChange={(e) => {
                                            setCemail2 (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup>
                                <Label for="empleadoNombre">Number <span className="redspan">*</span></Label>
                                    <Input
                                        type="text" required
                                        className="style-input"
                                        id="ccnt2"
                                        name="ccnt2" 
                                         onChange={(e) => {
                                            setCcnt2 (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={12}>
                            <Label>Address <span className="redspan">*</span></Label>
                            <textarea
                                className="form-control style-input"
                                rows="3" required
                                name="caddress" id="caddress"
                                 onChange={(e) => {
                                    setCaddress (e.target.value);
                                }}></textarea>
                        </Col>
                    </Row>
                        <Row className="mt-4">         
                        <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Category <span className="redspan">*</span></Label>
                                    <input 
                                        type="text" required
                                        className="style-input form-control"
                                        id="ccategory"
                                        name="ccategory"  onChange={(e) => {
                                            setCcategory (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>                     
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Type <span className="redspan">*</span></Label>
                                    <input 
                                        type="text" required
                                        className="style-input form-control"
                                        id="ctype"
                                        name="ctype"  onChange={(e) => {
                                            setCtype (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>  
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Segment <span className="redspan">*</span></Label>
                                    <input
                                        type="text" required
                                        className="style-input form-control"
                                        id="csegment"
                                        name="csegment"  onChange={(e) => {
                                            setCsegment (e.target.value);
                                        }}/>
                                </FormGroup>
                            </Col>    
                            <Col lg={4}>
                                <FormGroup>
                                    <Label for="empleadoNombre">Margin Type <span className="redspan">*</span></Label>
                                    <input
                                        type="text" required
                                        className="style-input form-control"
                                        id="cmargintype"
                                        name="cmargintype"  onChange={(e) => {
                                            setCmargintype (e.target.value);
                                        }} />
                                </FormGroup>
                            </Col>                              
                        </Row>
                        <Row>
                        <Col lg={12}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button className="btn btn-secondary ml-3">Cancel</button>
                            </Col>
                        </Row>
                        </Form>
        </React.Fragment>
    );
};

export default AddClient;



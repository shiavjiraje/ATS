import React, { Component } from 'react';

import {
    Label,
    FormGroup,
    Button,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Mail, User, Phone, Slack } from 'react-feather';

class SearchResume extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <AvForm onValidSubmit={this.handleValidSubmit} className="authentication-form card p-5">
                                
                            <h5 className="text-uppercase  text-center">Search By Resume</h5>
                                <AvGroup className="">
                                    <Label for="fullname">Search By Name</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <User className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <AvInput
                                            type="text"
                                            name="fullname"
                                            id="fullname"
                                            required
                                        />
                                    </InputGroup>

                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>
                                <AvGroup className="">
                                    <Label for="email">search By Email</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <Mail className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <AvInput
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                        />
                                    </InputGroup>

                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>

                                <AvGroup className="mb-3">
                                    <Label for="password">Search By Number</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <Phone className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <AvInput
                                            type="text"
                                            name="password"
                                            id="password"
                                            required
                                        />
                                    </InputGroup>
                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>
                                <AvGroup className="mb-3">
                                    <Label for="password">Search By Skill</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <Slack className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <AvInput
                                            type="text"
                                            name="password"
                                            id="password"
                                            required
                                        />
                                    </InputGroup>
                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>
                                <FormGroup className="form-group mb-0 text-center">
                                    <Button className="btn-block btn btn-secondary">
                                        Search
                                    </Button>
                                </FormGroup>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchResume;

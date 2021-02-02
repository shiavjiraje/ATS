import React, { Component } from 'react';
import { Row, Col,Input } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
const records = [
    
    {
        employeename: 'Jigar jadav',
        role:"Manager",
    },
    {
        employeename: 'Sanajay Shah',
        role:"Devloper",
    },
    {
        employeename: 'Ajay Zala',
        role:"User",
    },
    {
        employeename: 'Priyanka Trivedi',
        role:"Hr",
    },
    {
        employeename:"User",
        role:'User',
    },
    {
        id: 6,
        employeename:"Admin",
        role:'Admin',
    }
];

const columns = [
    {
        dataField: 'employeename',
        text: 'Employee Name.',
        sort: true,
    },
    {
        dataField: 'role',
        text: 'Role',
        sort: true,
    }
];

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];

const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    
    <React.Fragment>
        <label className="d-inline mr-1">Show To</label>
        <Input type="select" name="select" id="no-entries" className="custom-select custom-select-sm d-inline col-2"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>
            })}
        </Input>
        <label className="d-inline ml-1">Records</label>
    </React.Fragment>
);


class ViewRoleModal extends Component {
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
        const { SearchBar } = Search;
        return (
            <React.Fragment>
                        <Button color="secondary" onClick={this.toggle}><i className="uil uil-eye"></i>Vew Role</Button>
                            <Modal
                                isOpen={this.state.modal}
                                toggle={this.toggle}
                                className={this.state.className}
                                size="md">
                                <ModalHeader toggle={this.toggle}>View User Role</ModalHeader>
                                <ModalBody>
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={records}
                    columns={columns}
                    search>
                    {props => (
                        <React.Fragment>
                            <Row>
                                <Col className="text-right">
                                    <SearchBar {...props.searchProps} />
                                </Col>                                
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={true}
                                defaultSorted={defaultSorted}
                                pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '50', value: 50 }, { text: 'Todos', value: records.length }] })}
                                
                                wrapperClasses="table-responsive"
                            />
                        </React.Fragment>
                    )}
                </ToolkitProvider>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" className="ml-1" onClick={this.toggle}>Close</Button>
                                </ModalFooter>
                            </Modal>
            </React.Fragment>
        );
    }
}

export default ViewRoleModal;

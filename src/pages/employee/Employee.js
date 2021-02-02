import React from 'react';
import { Row, Col, Card, CardBody, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
//import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import PageTitle from '../../components/PageTitle';

const records = [
    {
        id: 1,
        nombre: 'Burt',        
        puesto: 32,
        department: 'Kaggle',
    },
    {
        id: 2,
        nombre: 'Burt1',        
        puesto: 32,
        department: 'Kagglerfg',
    },
    {
        id: 3,
        nombre: 'Burt3',        
        puesto: 302,
        department: 'Kaggle4',
    },
    {
        id: 4,
        nombre: 'Burt',        
        puesto: 32,
        department: 'Kaggle',
    },
    {
        id: 5,
        nombre: 'Burt1',        
        puesto: 32,
        department: 'Kagglerfg',
    },
    {
        id: 6,
        nombre: 'Burt3',        
        puesto: 302,
        department: 'Kaggle4',
    },
]
const columns = [
    {
        dataField: 'id',
        text: '#',
        sort: true,
    },
    {
        dataField: 'nombre',
        text: 'Nombre',
        sort: true,
    },
    {
        dataField: 'puesto',
        text: 'Puesto',
        sort: false,
    },
    {
        dataField: 'department',
        text: 'Centro de trabajo',
        sort: true,
    }
];

const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
        <Input type="select" name="select" id="no-entries" className="custom-select custom-select-sm d-inline col-2"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>
            })}
        </Input>
        <label className="d-inline ml-1">Entry</label>
    </React.Fragment>
);


const TableWithSeletableRows = () => {
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        style: { backgroundColor: '#727cf5', color: '#fff' },
    };

    return (
        <Card>
            <CardBody>
            <div className="row">
                <h4 className="header-title mt-0 mb-1 col-sm-6"><i className="uil uil-users-alt"></i> Listado de Empleados</h4>
    
                </div>

                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    bordered={false}
                    data={records}
                    columns={columns}
                    pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
                    selectRow={selectRow}
                    wrapperClasses="table-responsive"
                />
            </CardBody>
        </Card>
    );
};

const Employee = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Empleados', path: '/Empleados' },
                            { label: 'Empleados', path: '/Empleados', active: true },
                        ]}
                        title={'Empleados'}
                    />
                </Col>
            </Row>

            

            <Row>
                <Col>
                    <TableWithSeletableRows />
                </Col>
            </Row>

        </React.Fragment>
    );
};

export default Employee;

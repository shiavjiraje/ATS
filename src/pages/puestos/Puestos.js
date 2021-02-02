import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPuestosRequest, setPuestos, getPuestosModal } from '../../redux/requirement copy/actions';
import { Row, Col, Card, CardBody, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import AddNewPostsModals from './AddNewPosts';

import PageTitle from '../../components/PageTitle';


const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Mostrar</label>
        <Input
            type="select"
            name="select"
            id="no-entries"
            className="custom-select custom-select-sm d-inline col-2"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>;
            })}
        </Input>
        <label className="d-inline ml-1">entradas</label>
    </React.Fragment>
);

const TableWithSearch = (props) => {
    const { SearchBar } = Search;
    const dispatch = useDispatch();

    const rowEvent = {
        onDoubleClick: ( e, row, index ) => {

            dispatch( setPuestos( row ) );

            dispatch( getPuestosModal() );
        }
    }
    
    return (
        <Card>
            <CardBody>
                <div className="row">
                    <h4 className="header-title mt-0 mb-1 col-sm-6">
                        <i className="uil uil-user-check"></i>Listado de puestos
                    </h4>
                    <div className="sub-header col-sm-6">
                        <AddNewPostsModals />
                    </div>
                </div>
                <ToolkitProvider bootstrap4 keyField="ROW_NUMBER" data={props.records} columns={props.columns} search>
                    {(props) => (
                        <React.Fragment>
                            <Row>
                                <Col className="text-right">
                                    <SearchBar placeholder='Buscar' {...props.searchProps} />
                                </Col>
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                rowEvents={rowEvent}
                                //defaultSorted={defaultSorted}
                                pagination={paginationFactory({
                                    sizePerPage: 10,
                                    sizePerPageRenderer: sizePerPageRenderer,
                                    sizePerPageList: [
                                        { text: '10', value: 10 },
                                        { text: '20', value: 20 },
                                        { text: '50', value: 50 }
                                    ],
                                })}
                                wrapperClasses="table-responsive"
                            />
                        </React.Fragment>
                    )}
                </ToolkitProvider>
            </CardBody>
        </Card>
    );
};

const Puestos = () => {
    const dispatch = useDispatch();
    let records = useSelector((state) => state.Puestos.puestos);
    console.log(records);
    useEffect(() => {
        dispatch(getPuestosRequest());

        // eslint-disable-next-line
    }, []);
    
    const columns = [
        {
            dataField: 'jobcode',
            text: 'Job Code.'
        }
    ];

    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Puestos', path: '/Puestos' },
                            { label: 'Puestos', path: '/Puestos', active: true },
                        ]}
                        title={'Puestos'}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <TableWithSearch  columns={columns} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Puestos;

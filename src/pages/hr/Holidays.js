import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import {UncontrolledDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
//import * as FeatherIcon from 'react-feather';
import { getListList } from '../../redux/list/actions';
//import PageTitle from '../../components/PageTitle';

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];
//const { ExportCSVButton } = CSVExport;
const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
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
        <label className="d-inline ml-1">Entry</label>
    </React.Fragment>
);

const TableWithSearch = (props) => {
   // const { SearchBar } = Search;
    // const dispatch = useDispatch();

    // const rowEvent = {
    //     onDoubleClick: ( e, row, index ) => {

    //         //dispatch( setList( row ) );

    //        // dispatch( getHolidaysModal() );
    //         //console.log(props.result)
    //     }
    // }
    const NoDataIndication = () => (
        <div className="spinner">
          <div className="rect1" />
          <div className="rect2" />
          <div className="rect3" />
          <div className="rect4" />
          <div className="rect5" />
        </div>
      );
    return (
            
                <ToolkitProvider bootstrap4 keyField="ROW_NUMBER" data={props.records} columns={props.columns} search>
                    {(props) => (
                        <React.Fragment>
                            <Row>
                                <Col md={12} className="">
                                <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                <button class="btn btn-primary pl-5 pr-5" type="button">Create</button>
                                </div>
                                <input type="text" class="form-control search-style" placeholder="Holiday Name :"/>
                                <input type="date" class="form-control search-style" placeholder="Date :"/>
                                <input type="text" class="form-control search-style" placeholder="Day"/>
                                </div>
                                </Col>                            
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                defaultSorted={defaultSorted}
                               // rowEvents={rowEvent}
                                noDataIndication={ () => <NoDataIndication /> }
                                pagination={
                                    paginationFactory( 
                                        { 
                                            sizePerPage: 10, 
                                            sizePerPageRenderer: sizePerPageRenderer, 
                                            sizePerPageList: [
                                                { text: '10', value: 10, }, 
                                                { text: '20', value: 20 }, 
                                                { text: '50', value: 50 }, 
                                                { text: 'Todos', value: ( props.records ? props.records.length : 0 ) }
                                            ] 
                                        } 
                                    )
                                }
                                
                            />
                        </React.Fragment>
                    )}
                </ToolkitProvider>
    );
};

const Holidays = () => {

    const dispatch = useDispatch(); 
   let records = useSelector((state) => state.List.list);
   console.log(records)
    useEffect(() => {
        dispatch(getListList());

        // eslint-disable-next-line 
    }, []);

    const columns = [
        {
            dataField: 'd.R_Name',
            text: 'Holiday Name.',
        },
        {
            dataField:'e.J_Skill',
            text:"Date"
        },
        {
            dataField: 'e.J_Skill',
            text: 'Day',
        },
        {
            dataField: 'e.J_Location',
            text: 'Type',
        }
    ];
 
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Holidays;



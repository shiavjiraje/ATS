import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search,CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {UncontrolledDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import * as FeatherIcon from 'react-feather';
import { getBDList } from '../../redux/list/actions';
//import PageTitle from '../../components/PageTitle';

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];
const { ExportCSVButton } = CSVExport;
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
    const { SearchBar } = Search;
    // const dispatch = useDispatch();

    // const rowEvent = {
    //     onDoubleClick: ( e, row, index ) => {

    //         dispatch( setList( row ) );

    //        // dispatch( getJoinListModal() );
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
                                <Col md={6} className="">
                                    <SearchBar {...props.searchProps} />
                                </Col>    
                                <Col md={6} className="text-right">
                                <UncontrolledDropdown className=" profile-dropdown-menu">
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
                    className="btn btn-secondary dropdown-toggle bg-secondary  mr-0">
                    Dropdown <FeatherIcon.ChevronDown />
                </DropdownToggle>
                <DropdownMenu right className="topbar-dropdown-menu profile-dropdown-items">
                    <div className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export CSV</ExportCSVButton>
                    </div>
                    <div  className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export PDF</ExportCSVButton>
                    </div>
                    <div  className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export EXCEL</ExportCSVButton>
                    </div>
                </DropdownMenu>
            </UncontrolledDropdown>
                                {/* <ExportCSVButton className="btn-primary" { ...props.csvProps }>Export CSV!!</ExportCSVButton> */}
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

const ViewBd = () => {

    const dispatch = useDispatch(); 
   let records = useSelector((state) => state.List.bdlist);
    useEffect(() => {
        dispatch(getBDList());

        // eslint-disable-next-line 
    }, []);

    const columns = [
        {
            dataField: 'd.R_Name',
            text: 'Name.',
        },
        {
            dataField:'e.J_Client_Id',
            text:"Client"
        },
        {
            dataField: 'e.J_Skill',
            text: 'Skill',
        },
        {
            dataField: 'e.J_Location',
            text: 'Location',
        },
        {
            dataField: 'c.O_Sel_Date',
            text: 'Select Date',
        },
        {
            dataField: 'c.O_Off_Date',
            text: 'Oferr Date',
        },
        {
            dataField: 'c.O_Join_Date',
            text: 'Start Date',
        },
        {
            dataField: 'g.E_Fullname',
            text: 'Recruiter',
            
        },  
        {
            dataField: 'c.O_Status',
            text: 'Status',
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

export default ViewBd;



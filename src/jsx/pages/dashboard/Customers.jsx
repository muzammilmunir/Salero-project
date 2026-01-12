import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { SVGICON } from '../../constant/theme';
import { Dropdown, Tab, Nav, Modal } from 'react-bootstrap';
import InactiveTab from '../../component/dashboard/InactiveTab';
import { options, tableData2 } from '../../constant/alldata';

function Customers() {
    const [data, setData] = useState(
        document.querySelectorAll("#orderlist-table tbody tr")
    );
    const sort = 10;
    const activePag = useRef(0);
    const [test, settest] = useState(0);
    const chageData = (frist, sec) => {
        for (var i = 0; i < data.length; ++i) {
            if (i >= frist && i < sec) {
                data[i].classList.remove("d-none");
            } else {
                data[i].classList.add("d-none");
            }
        }
    };

    useEffect(() => {
        setData(document.querySelectorAll("#orderlist-table tbody tr"));
    }, [test]);

    activePag.current === 0 && chageData(0, sort);
    let paggination = Array(Math.ceil(data.length / sort))
        .fill()
        .map((_, i) => i + 1);
    const onClick = (i) => {
        activePag.current = i;
        chageData(activePag.current * sort, (activePag.current + 1) * sort);
        settest(i);
    };

    const checkboxFun = (type) => {
        setTimeout(() => {
            const checkbox = document.querySelectorAll(".sorting_25 input");
            const motherCheckBox = document.querySelector(".sorting_asc_15 input");
            for (let i = 0; i < checkbox.length; i++) {
                const element = checkbox[i];
                if (type === "all") {
                    if (motherCheckBox.checked) {
                        element.checked = true;
                    } else {
                        element.checked = false;
                    }
                } else {
                    if (!element.checked) {
                        motherCheckBox.checked = false;
                        break;
                    } else {
                        motherCheckBox.checked = true;
                    }
                }
            }
        }, 100);
    };

    const [customModal, setCustomModal] = useState(false);
    return (
        <div className="container">
            <Tab.Container defaultActiveKey={'Active'}>
                <div className="d-flex justify-content-between mb-4 flex-wrap">
                    <Nav as="ul" className="revnue-tab nav nav-tabs">
                        <Nav.Item as="li">
                            <Nav.Link eventKey={'Active'}>Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey={'Inactive'}>Inactive</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className='d-flex align-items-center'>
                        <Link to={"#"} className="btn btn-primary me-2" onClick={() => setCustomModal(true)}>+ New Customer</Link>
                        <Select
                            options={options}
                            className="custom-react-drop-btn"
                            defaultValue={options[0]}
                            isSearchable={false}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Tab.Content>
                            <Tab.Pane eventKey={'Active'}>
                                <div className="card mt-2">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting ">
                                            <div id="orderlist-table" className="dataTables_wrapper no-footer">
                                                <table id="empoloyees-tbl" className="table dataTable no-footer">
                                                    <thead>
                                                        <tr>
                                                            <th className='sorting_asc_15'>
                                                                <div className="form-check custom-checkbox ms-0">
                                                                    <input type="checkbox" className="form-check-input checkAllInput" id="checkAll2" required=""
                                                                        onClick={() => checkboxFun("all")}
                                                                    />
                                                                    <label className="form-check-label" htmlFor="checkAll2"></label>
                                                                </div>
                                                            </th>
                                                            <th>Seller ID</th>
                                                            <th>Join Date</th>
                                                            <th>Customer</th>
                                                            <th>Location</th>
                                                            <th>Total Spendings</th>
                                                            <th>Last Order</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tableData2.map((item, index) => (
                                                            <tr key={index}>
                                                                <td className="sorting_25">
                                                                    <div className="form-check custom-checkbox">
                                                                        <input type="checkbox" className="form-check-input"
                                                                            required=""
                                                                            onClick={() => checkboxFun()}
                                                                            id={`customer${index + 11}`}
                                                                        />
                                                                        <label className="form-check-label" htmlFor={`customer${index + 11}`}></label>
                                                                    </div>
                                                                </td>
                                                                <td><span>#000123456</span></td>
                                                                <td><span>Nov 21th 2023 09:21 AM</span></td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <img src={item.image} className="avatar avatar-xxs rounded" alt="" />
                                                                        <p className="mb-0 ms-2">{item.name}</p>
                                                                    </div>
                                                                </td>
                                                                <td><span>{item.location}</span></td>
                                                                <td><span className="badge badge-rounded badge-outline-primary badge-lg">$ {item.amount}</span></td>
                                                                <td><span className="text-primary font-w500">$ {item.lastorder}</span></td>
                                                                <td>
                                                                    <Dropdown className="dropdown">
                                                                        <Dropdown.Toggle as="div" className="btn-link i-false">
                                                                            {SVGICON.ThreeDot}
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu className="dropdown-menu-right">
                                                                            <Dropdown.Item>Edit</Dropdown.Item>
                                                                            <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <div className="d-sm-flex text-center justify-content-between align-items-center">
                                                    <div className="dataTables_info">
                                                        Showing {activePag.current * sort + 1} to{" "}
                                                        {data.length > (activePag.current + 1) * sort
                                                            ? (activePag.current + 1) * sort
                                                            : data.length}{" "}
                                                        of {data.length} entries
                                                    </div>
                                                    <div
                                                        className="dataTables_paginate paging_simple_numbers justify-content-center"
                                                        id="example2_paginate"
                                                    >
                                                        <Link
                                                            className="paginate_button previous disabled"
                                                            to="#"
                                                            onClick={() =>
                                                                activePag.current > 0 &&
                                                                onClick(activePag.current - 1)
                                                            }
                                                        >                                                            
                                                            Prev
                                                        </Link>
                                                        <span>
                                                            {paggination.map((number, i) => (
                                                                <Link
                                                                    key={i}
                                                                    to="#"
                                                                    className={`paginate_button  ${activePag.current === i ? "current" : ""
                                                                        } `}
                                                                    onClick={() => onClick(i)}
                                                                >
                                                                    {number}
                                                                </Link>
                                                            ))}
                                                        </span>
                                                        <Link
                                                            className="paginate_button next"
                                                            to="#"
                                                            onClick={() =>
                                                                activePag.current + 1 < paggination.length &&
                                                                onClick(activePag.current + 1)
                                                            }
                                                        >
                                                            Next
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey={'Inactive'}>
                                <InactiveTab />
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </div>
            </Tab.Container>
            <Modal show={customModal} onHide={setCustomModal} centered>
                <div className="modal-content">
                    <div className="modal-header ">
                        <h5 className="modal-title">Add Customer</h5>
                        <button type="button" className="btn-close" onClick={() => setCustomModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label className="form-label">Customer Name</label>
                            <input type="text" className="form-control mb-3" id="exampleInputEmail1" placeholder="Name" />
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control mb-3" id="exampleInputEmail2" placeholder=" Email" />
                            <label className="form-label">Location</label>
                            <input type="text" className="form-control mb-3" id="exampleInputEmail3" placeholder="Location" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger light" onClick={() => setCustomModal(false)}>Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Customers;
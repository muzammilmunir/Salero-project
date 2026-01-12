import { useState, } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Dropdown } from 'react-bootstrap';
import Select from 'react-select';

import { SVGICON } from '../../constant/theme';
import { options, tableData } from '../../constant/alldata';

function OrderList() {
    const [tableBlog, setTableBlog] = useState(tableData);
    const [addActive, setActive] = useState('All');
    const OrderListData = (fiterItem) => {
        if (fiterItem === 'All') {
            setActive(fiterItem);
            setTableBlog(tableData)
        } else {
            setActive(fiterItem);
            let updateItems = tableData.filter((ele) => {
                return ele.status === fiterItem;
            });
            setTableBlog(updateItems)
        }
    }

    const [unchecked, setUnChecked] = useState(true);
    const handleChecked = (id) => {
        let temp = tableBlog.map((data) => {
            if (id === data.id) {
                return { ...data, inputchecked: !data.inputchecked };
            }
            return data;
        });
        setTableBlog(temp);
    };
    const handleCheckedAll = (value) => {
        let temp = tableBlog.map((data) => {
            return { ...data, inputchecked: value };
        });
        setTableBlog(temp);
        setUnChecked(!unchecked);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPage = 10;
    const lastIndex = currentPage * recordsPage;
    const firstIndex = lastIndex - recordsPage;
    const records = tableBlog.slice(firstIndex, lastIndex);
    const npage = Math.ceil(tableBlog.length / recordsPage)
    const number = [...Array(npage + 1).keys()].slice(1)
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function changeCPage(id) {
        setCurrentPage(id);
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const [newOrder, setNewOrder] = useState(false);
    return (
        <div className="container">            
            <div className="d-flex justify-content-between mb-4 flex-wrap">
                <ul className="revnue-tab nav nav-tabs" id="myTab" >
                    <li className='nav-item'
                        onClick={() => { OrderListData('All') }}
                    >
                        <Link to={"#"} className={`nav-link ${addActive === 'All' ? 'active' : ''}`} >All Status</Link>
                    </li>
                    <li className='nav-item'
                        onClick={() => { OrderListData('On Delivery') }}
                    >
                        <Link to={"#"} className={`nav-link ${addActive === 'On Delivery' ? 'active' : ''}`} >On Delivery</Link>
                    </li>
                    <li className='nav-item'
                        onClick={() => { OrderListData('Delivered') }}
                    >
                        <Link to={"#"} className={`nav-link ${addActive === 'Delivered' ? 'active' : ''}`}  >Delivered</Link>
                    </li>
                    <li className='nav-item'
                        onClick={() => { OrderListData('Canceled') }}
                    >
                        <Link to={"#"} className={`nav-link ${addActive === 'Canceled' ? 'active' : ''}`} >Canceled</Link>
                    </li>
                </ul>
                <div className='d-flex align-items-center'>
                    <Link to={"#"} className="btn btn-primary me-2" onClick={() => setNewOrder(true)}>+ New Order</Link>
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
                    <div className='tab-content'>
                        <div className='tab-pane fade active show'>
                            <div className="card mt-2">
                                <div className="card-body p-0">
                                    <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting ">
                                        <div id="orderlist-table" className="dataTables_wrapper no-footer">
                                            <table id="empoloyees-tbl" className="table dataTable no-footer">
                                                <thead>
                                                    <tr>
                                                        <th className="d-flex align-items-center sorting_asc_15">
                                                            <div className="form-check custom-checkbox ms-0">
                                                                <input type="checkbox" className="form-check-input checkAllInput" id="checkAll" required=""
                                                                    // onClick={() => checkboxFun("all")}
                                                                    onClick={() => handleCheckedAll(unchecked)}
                                                                />
                                                                <label className="form-check-label" htmlFor="checkAll"></label>
                                                            </div>
                                                        </th>
                                                        <th>Order ID</th>
                                                        <th>Date</th>
                                                        <th>Customer</th>
                                                        <th>Location</th>
                                                        <th>Amount</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={index}>
                                                            <td className="sorting_25">
                                                                <div className="form-check custom-checkbox">
                                                                    <input type="checkbox" className="form-check-input"
                                                                        required=""
                                                                        id={`order${item.id}`}
                                                                        checked={item.inputchecked}
                                                                        // checked={item.inputchecked}
                                                                        // onClick={() => checkboxFun()}
                                                                        onChange={() => handleChecked(item.id)}
                                                                    />
                                                                    <label className="form-check-label" htmlFor={`order${item.id}`}></label>
                                                                </div>
                                                            </td>
                                                            <td><span>#000123456</span></td>
                                                            <td><span>Nov 21th 2020 09:21 AM</span></td>
                                                            <td><span>{item.name}</span></td>
                                                            <td><span>{item.location}</span></td>
                                                            <td><span>$ {item.amount}</span></td>
                                                            <td><span className={`badge badge-rounded badge-lg badge-outline-${item.statuscolor}`}>{item.status}</span></td>
                                                            <td>

                                                                {
                                                                    index % 3 === 0 ?
                                                                        <div>
                                                                            <Link to={"#"} className="btn-link me-1">Track</Link>
                                                                            <Link to={"#"} className="btn-link text-dark ms-1">Cancel</Link>
                                                                        </div>
                                                                        :
                                                                        <Link to={"#"} className="btn-link me-1">View details</Link>
                                                                }

                                                            </td>
                                                            <td>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle as="div" className="i-false btn-link" data-bs-toggle="dropdown" >
                                                                        {SVGICON.ThreeDot}
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu align="end" >
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
                                                <div className='dataTables_info'>
                                                    Showing {lastIndex - recordsPage + 1} to{" "}
                                                    {tableData.length < lastIndex ? tableData.length : lastIndex}
                                                    {" "}of {tableData.length} entries
                                                </div>
                                                <div
                                                    className="dataTables_paginate paging_simple_numbers justify-content-center"
                                                    id="example2_paginate"
                                                >
                                                    <Link
                                                        className="paginate_button previous disabled"
                                                        to="#"
                                                        onClick={prePage}
                                                    >
                                                        <i className="fa-solid fa-angle-left" />
                                                    </Link>
                                                    <span>
                                                        {number.map((n, i) => (
                                                            <Link className={`paginate_button ${currentPage === n ? 'current' : ''} `} key={i}
                                                                onClick={() => changeCPage(n)}
                                                            >
                                                                {n}
                                                            </Link>
                                                        ))}
                                                    </span>
                                                    <Link
                                                        className="paginate_button next"
                                                        to="#"
                                                        onClick={nextPage}
                                                    >
                                                        <i className="fa-solid fa-angle-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>            
            <Modal show={newOrder} onHide={setNewOrder} centered>
                <div className="modal-content">
                    <div className="modal-header ">
                        <h5 className="modal-title">Add Order</h5>
                        <button type="button" className="btn-close" onClick={() => setNewOrder(false)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label className="form-label">Order ID</label>
                            <input type="number" className="form-control mb-3" id="exampleInputEmail1" placeholder="Order Id" />
                            <label className="form-label">Gmail</label>
                            <input type="email" className="form-control mb-3" id="exampleInputEmail2" placeholder=" Email" />
                            <label className="form-label">Amount</label>
                            <input type="number" className="form-control mb-3" id="exampleInputEmail3" placeholder="Amount" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger light" onClick={() => setNewOrder(false)}>Close</button>
                        <button type="button" className="btn btn-primary">Done</button>
                    </div>
                </div>
            </Modal>
        </div>

    );
};

export default OrderList;
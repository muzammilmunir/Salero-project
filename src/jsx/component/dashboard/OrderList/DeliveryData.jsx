import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { SVGICON } from '../../../constant/theme';

const tableData = [
    { id: '1', name: 'James Sitepu', location: 'Park London', amount: '214', status: 'On Delivery', statuscolor: 'primary' },
    { id: '2', name: 'Richard Elijah', location: 'Maharashtra (India) ', amount: '325', status: 'On Delivery', statuscolor: 'primary' },
    { id: '3', name: 'Joseph David', location: 'Yucatán (Mexico)', amount: '325', status: 'On Delivery', statuscolor: 'primary' },
    { id: '4', name: 'Joseph David', location: 'Center Park St', amount: '250', status: 'On Delivery', statuscolor: 'primary' },
    { id: '5', name: 'Richard Elijah', location: 'Maharashtra (India) ', amount: '325', status: 'On Delivery', statuscolor: 'primary' },
    { id: '6', name: 'James John', location: 'Sao Paulo (Brazil)', amount: '401', status: 'On Delivery', statuscolor: 'primary' },
    { id: '7', name: 'James Sitepu', location: 'Tokyo (Japan)', amount: '245', status: 'On Delivery', statuscolor: 'primary' },
    { id: '8', name: 'Marquez Silaban', location: 'Alberta (Canada)', amount: '260', status: 'On Delivery', statuscolor: 'primary' },
];

const DeliveryData = () => {
    const [data, setData] = useState(
        document.querySelectorAll("#delivery-table tbody tr")
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
        setData(document.querySelectorAll("#delivery-table tbody tr"));
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
            const checkbox = document.querySelectorAll(".sorting_2 input");
            const motherCheckBox = document.querySelector(".sorting_asc_2 input");
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
    return (
        <div className="card mt-2">
            <div className="card-body p-0">
                <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting ">
                    <div id="delivery-table" className="dataTables_wrapper no-footer">
                        <table id="empoloyees-tbl" className="table dataTable no-footer">
                            <thead>
                                <tr>
                                    <th className="d-flex align-items-center sorting_asc_2">
                                        <div className="form-check custom-checkbox ms-0">
                                            <input type="checkbox" className="form-check-input checkAllInput" id="checkAll" required=""
                                                onClick={() => checkboxFun("all")}
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
                                {tableData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="sorting_2">
                                            <div className="form-check custom-checkbox">
                                                <input type="checkbox" className="form-check-input"
                                                    required=""
                                                    id={`order${index + 201}`}
                                                    onClick={() => checkboxFun()}
                                                />
                                                <label className="form-check-label" htmlFor={`order${index + 201}`}></label>
                                            </div>
                                        </td>
                                        <td><span>#000123456</span></td>
                                        <td><span>Nov 21th 2020 09:21 AM</span></td>
                                        <td><span>{item.name}</span></td>
                                        <td><span>{item.location}</span></td>
                                        <td><span>$ {item.amount}</span></td>
                                        <td><span className={`badge badge-rounded badge-lg badge-outline-${item.statuscolor}`}>{item.status}</span></td>
                                        <td>
                                            <div>
                                                <Link to={"#"} className="btn-link me-1">Track</Link>
                                                <Link to={"#"} className="btn-link text-dark ms-1">Cancel</Link>
                                            </div>
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
    );
};

export default DeliveryData;
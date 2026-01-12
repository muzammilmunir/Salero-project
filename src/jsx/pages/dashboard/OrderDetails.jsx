import { Link } from 'react-router-dom';
import { IMAGES, SVGICON } from '../../constant/theme';
import { Dropdown } from 'react-bootstrap';
import { foodItem, historyData } from '../../constant/alldata';

function OrderDetails() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-9">
                    <div className="food-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14448.885880295826!2d75.81852004999999!3d25.128202399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682845569584!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-header border-0 pb-0">
                                    <h4 className="title">History</h4>
                                </div>
                                <div className="card-body pt-2 px-0">
                                    <div className="history-box dz-scroll" style={{ height: "300px" }}>
                                        {historyData.map((item, index) => (
                                            <ul className="history" key={index}>
                                                <li>
                                                    <div className="history-dot"></div>
                                                    <div className="history-deatils">
                                                        <h6 className="font-w600">{item.title}</h6>
                                                        <span className="text-primary">{item.timing}</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-6">
                            <div className="card">
                                <div className="card-header border-0 pb-0">
                                    <h4 className="h-title">Items</h4>
                                    <Dropdown className=" custom-dropdown mb-0">
                                        <Dropdown.Toggle as="div" className="btn sharp tp-btn dark-btn i-false">
                                            {SVGICON.DropDots}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right" align="end">
                                            <Dropdown.Item >Details</Dropdown.Item>
                                            <Dropdown.Item className="text-danger">Cancel</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="card-body pt-2">
                                    {foodItem.map((item, ind) => (
                                        <div className="food-items-bx" key={ind}>
                                            <div className="food-items-media">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="d-flex align-items-end">
                                                <div className="food-items-info">
                                                    <span className="text-primary">FOOD</span>
                                                    <h6>{item.title}</h6>
                                                    <span>x2</span>
                                                </div>
                                                <div className="d-inline-flex text-nowrap">
                                                    <span className="me-2">$8,6</span>
                                                    <h6 className="mb-0 text-primary">$ {item.amount}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <hr />
                                    <div className="food-totle">
                                        <ul className="d-flex align-items-center justify-content-between">
                                            <li><span>Subtotal</span></li>
                                            <li><h6>$ 33.00</h6></li>
                                        </ul>
                                        <ul className="d-flex align-items-center justify-content-between">
                                            <li><span>PPN (10%)</span></li>
                                            <li><h6>$ 2,58</h6></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card bg-primary h-auto">
                                <div className="card-body text-center">
                                    <h3 className="mb-0 text-white">On Delivery</h3>
                                    <span className="text-white">Estimated Time 2 - 6 min</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-sm-6">
                            <div className="card h-auto">
                                <div className="card-body">
                                    <div className="profile-bx text-center">
                                        <img src={IMAGES.coustomer3} className="avatar avatar-lg mb-3" alt="" />
                                        <h4 className="title mb-0">David D Goa</h4>
                                        <p>Customer</p>
                                        <ul className="d-inline-flex">
                                            <li>
                                                <Link to={"#"} className="icon-bx icon-bx-md bg-primary-light">
                                                    {SVGICON.CallIcon}
                                                </Link>
                                            </li>
                                            <li className="mx-3">
                                                <Link to={"#"} className="icon-bx icon-bx-md bg-primary-light">
                                                    {SVGICON.MessageNote}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"#"} className="icon-bx icon-bx-md bg-primary-light">
                                                    {SVGICON.NotificationHome}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-sm-6">
                            <div className="card h-auto">
                                <div className="card-body">
                                    <ul className="d-flex mb-3">
                                        <li>
                                            <img src={IMAGES.coustomer5} className="avatar avatar-md" alt="avat" />
                                        </li>
                                        <li className="ms-2">
                                            <h6 className="mb-0">James Sukardi</h6>
                                            <p className="mb-0 text-primary">#SAL-111234125</p>
                                        </li>
                                    </ul>
                                    <ul className="d-flex mb-3">
                                        <li>
                                            <Link to={"#"} className="icon-bx icon-outline-bx ">
                                                {SVGICON.CallIcon}
                                            </Link>
                                        </li>
                                        <li className="ms-2">
                                            <span className="mb-0">Telephone</span>
                                            <h6 className="mb-0">021 2346 664</h6>
                                        </li>
                                    </ul>
                                    <ul className="d-flex mb-3">
                                        <li>
                                            <Link to={"#"} className="icon-bx icon-outline-bx">
                                                {SVGICON.MessageNote}
                                            </Link>
                                        </li>
                                        <li className="ms-2">
                                            <span className="mb-0">Email</span>
                                            <h6 className="mb-0">info@mail.com	</h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OrderDetails;
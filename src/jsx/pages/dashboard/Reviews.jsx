import { Link } from 'react-router-dom';
import { SVGICON } from '../../constant/theme';
import { Dropdown } from 'react-bootstrap';
import { reviewCard } from '../../constant/alldata';


function Reviews() {
    return (
        <div className="container">
            <div className="row">
                {reviewCard.map((item, index) => (
                    <div className="col-xl-12" key={index}>
                        <div className="card">
                            <div className="card-header justify-content-end border-0 pb-0">
                                <Dropdown>
                                    <Dropdown.Toggle as="div" className="btn-link i-false">
                                        {SVGICON.ThreeDot}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-right">
                                        <Dropdown.Item >Edit</Dropdown.Item>
                                        <Dropdown.Item >Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="card-body pt-0">
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="d-flex align-items-center">
                                            <img src={item.image} alt={item.name} className="avatar avatar-md" />
                                            <div className="ms-3">
                                                <h6 className="mb-0"><Link to={"/app-profile-2"} className="text-primary">{item.name}</Link></h6>
                                                <h6>{item.location}</h6>
                                                <span>{item.followers} Followers, {item.reviews} Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8">
                                        <div className="d-flex">
                                            <ul className="star-rating s-rieview me-3">
                                                <li><i className="fa fa-star" /></li>{" "}
                                                <li><i className="fa fa-star" /></li>{" "}
                                                <li><i className="fa fa-star" /></li>{" "}
                                                <li><i className="fa-solid fa-star-half-stroke" /></li>{" "}
                                                <li><i className="fa-solid fa-star-half-stroke" /></li>
                                            </ul>
                                            <span>25/05/2025</span>
                                        </div>
                                        <p className="review">We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                                        <div className="d-flex justify-content-between flex-wrap align-items-center">
                                            <div className="sm-mb-0 mb-2">
                                                <Link to={"#"} className="btn btn-primary light me-1">PUBLIC COMMENT</Link>
                                                <Link to={"#"} className="btn btn-primary light ms-1">DIRECT MESSAGE</Link>
                                            </div>
                                            <Link to={"#"} className="btn btn-primary ms-1">REPLY</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
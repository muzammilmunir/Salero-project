import { lazy, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import DottedMap from "dotted-map";
import { ThemeContext } from "../../../context/ThemeContext";
import { SVGICON } from '../../constant/theme';
import OrderSummaryChart from '../../component/dashboard/OrderSummaryChart';
import { Nav, Dropdown, Modal, Tab } from 'react-bootstrap';
import MenuSlider from '../../component/dashboard/MenuSlider';
import MenuTabData from '../../component/dashboard/MenuTabData';
import { customerBlog, iconBoxcard, options, progressData, recentBlog } from '../../constant/alldata';

const RevenueChart = lazy(() => import('../../component/dashboard/RevenueChart'));

function DropBtnBlog() {
	return (
		<>
			<Dropdown className="custom-dropdown mb-0">
				<Dropdown.Toggle className="btn sharp tp-btn dark-btn i-false" as="div" >
					{SVGICON.DropDots}
				</Dropdown.Toggle>
				<Dropdown.Menu className="dropdown-menu-right" align="end">
					<Dropdown.Item eventKey="All" >Details</Dropdown.Item>
					<Dropdown.Item className="text-danger" eventKey="All">Cancel</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
}


function DashboardDark() {
	const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
	}, []);
	const [customModal, setCustomModal] = useState(false);

	// svg map
	const map = new DottedMap({ height: 23, grid: "vertical" });
	map.addPin({
		lat: 40.73061,
		lng: -73.935242,
		svgOptions: { color: "#e9e9e9", radius: 0.35 }
	});

	const svgMap = map.getSVG({
		radius: 0.35,
		color: "#e9e9e9",
		shape: "circle",
		backgroundColor: "#23202f"
	});
	return (
		<>
			<div className='container'>
				<div className="row">
					{iconBoxcard.map((item, ind) => (
						<div className="col-xl-3 col-sm-6" key={ind}>
							<div className="card">
								<div className="card-body d-flex justify-content-between">
									<div className="card-menu">
										<span>{item.title}</span>
										<h2 className="mb-0">{item.number}</h2>
									</div>
									<div className="icon-box icon-box-lg bg-primary-light">
										{item.icon}
									</div>
								</div>
							</div>
						</div>
					))}
					<div className="col-xl-6 custome-width">
						<div className="card">
							<RevenueChart />
						</div>
					</div>
					<div className="col-xl-6 custome-width">
						<div className="card">
							<div className="card-header border-0 pb-0">
								<h3 className="h-title">Order Summary</h3>
								<div className='d-flex align-items-center'>
									<Select
										options={options}
										className="custom-react-drop-btn"
										defaultValue={options[0]}
										isSearchable={false}
									/>
									<DropBtnBlog />
								</div>
							</div>
							<div className="card-body ">
								<p
									style={{ width: "90%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscing elit
								</p>
								<div className="row">
									<div className="col-xl-6">
										<div id="piechart"></div>
										<OrderSummaryChart />
									</div>
									<div className="col-xl-6">
										{progressData.map((item, index) => (
											<div className="mb-4" key={index}>
												<div className="progress">
													<div className={`progress-bar linear ${item.color}`} style={{ width: item.status, height: "13px" }}>
														<span className="sr-only">60% Complete</span>
													</div>
												</div>
												<span className="d-flex align-items-center mt-2">
													<span>
														<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<rect y="0.420288" width="13" height="13" rx="4" fill={item.iconColoe} />
														</svg>{" "}
														<span className="mb-0  text-dark">{item.title}</span>
													</span>
													<span className="ms-auto font-w600">${item.data}</span>
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-9">
						<div className="card h-auto">
							<div className="card-header border-0 pb-0 flex-wrap">
								<div className="d-flex flex-wrap">
									<h3 className="h-title mb-0 me-4">Customer Map</h3>
									<div className="form-check form-switch mx-3">
										<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
										<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Customer</label>
									</div>
									<div className="form-check form-switch">
										<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault1" />
										<label className="form-check-label" htmlFor="flexSwitchCheckDefault1">Location</label>
									</div>
								</div>
								<div className='d-flex align-items-center'>
									<Link to={"#"} className="btn btn-primary me-2"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14 13.125C14 13.6082 13.6082 14 13.125 14H0.875C0.391754 14 0 13.6082 0 13.125C0 12.6418 0.391754 12.25 0.875 12.25H13.125C13.6082 12.25 14 12.6418 14 13.125ZM6.38129 10.3531C6.55216 10.524 6.77605 10.6094 7 10.6094C7.22389 10.6094 7.44789 10.524 7.61871 10.3531L10.7189 7.25296C11.0606 6.91124 11.0606 6.35723 10.7189 6.01552C10.3772 5.6738 9.82316 5.6738 9.48144 6.01552L7.875 7.62196V0.875C7.875 0.391754 7.48324 0 7 0C6.51675 0 6.125 0.391754 6.125 0.875V7.62196L4.51855 6.01552C4.17684 5.6738 3.62283 5.6738 3.28111 6.01552C2.9394 6.35723 2.9394 6.91124 3.28111 7.25296L6.38129 10.3531Z" fill="white" />
									</svg>
										Save Report</Link>
									<Select
										options={options}
										className="custom-react-drop-btn"
										defaultValue={options[0]}
										isSearchable={false}
									/>
									<DropBtnBlog />
								</div>
							</div>
							<div className="card-body px-0">
								<div className="row">
									<div className="col-xl-4">
										<div className="dz-scroll" style={{ height: "306px" }}>
											{customerBlog.map((item, index) => (
												<div className="d-flex customer-map-list" key={index}>
													<div className={`icon-bx ${item.color2}`}>
														<svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M14.9106 11.0599C12.0443 11.0599 9.71212 13.3901 9.70862 16.2556H20.1127C20.1091 13.3901 17.7769 11.0599 14.9106 11.0599Z" fill={item.color1} />
															<path d="M14.9107 0.726442C7.1031 0.726442 0.751099 7.07845 0.751099 14.886C0.751099 17.9904 1.73728 20.9375 3.60293 23.4087C5.32766 25.6933 7.74746 27.4287 10.4499 28.3272L14.0532 34.3499C14.2336 34.6516 14.5593 34.8362 14.9107 34.8362C15.2621 34.8362 15.5878 34.6516 15.7682 34.3499L19.3716 28.3272C22.0739 27.4287 24.4938 25.6933 26.2185 23.4087C28.0841 20.9375 29.0703 17.9904 29.0703 14.886C29.0703 7.07845 22.7183 0.726442 14.9107 0.726442ZM22.5437 18.2542H7.27772C6.72584 18.2542 6.27841 17.8068 6.27841 17.2549C6.27841 16.703 6.72584 16.2556 7.27772 16.2556H7.71002C7.71328 12.627 10.4144 9.61869 13.9115 9.13096V9.00778C13.9115 8.45589 14.3589 8.00847 14.9108 8.00847C15.4627 8.00847 15.9101 8.45589 15.9101 9.00778V9.13096C19.4072 9.61862 22.1083 12.627 22.1115 16.2556H22.5438C23.0957 16.2556 23.5431 16.703 23.5431 17.2549C23.5431 17.8068 23.0956 18.2542 22.5437 18.2542Z" fill={item.color1} />
														</svg>
													</div>
													<div className="ms-3">
														<h6 className="mb-0">{item.title}</h6>
														<p className="mb-0">28 Customers</p>
													</div>
												</div>
											))}

										</div>
									</div>
									<div className="col-xl-8">
										<div className="map-wrapper">											
											<img
												src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
												alt=""
											/>

											<div className="all-locations">
												<div className="">
													<svg className="location1" width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M14.9106 11.0599C12.0443 11.0599 9.71212 13.3901 9.70862 16.2556H20.1127C20.1091 13.3901 17.7769 11.0599 14.9106 11.0599Z" fill="#6E6E6E" />
														<path d="M14.9107 0.726442C7.1031 0.726442 0.751099 7.07845 0.751099 14.886C0.751099 17.9904 1.73728 20.9375 3.60293 23.4087C5.32766 25.6933 7.74746 27.4287 10.4499 28.3272L14.0532 34.3499C14.2336 34.6516 14.5593 34.8362 14.9107 34.8362C15.2621 34.8362 15.5878 34.6516 15.7682 34.3499L19.3716 28.3272C22.0739 27.4287 24.4938 25.6933 26.2185 23.4087C28.0841 20.9375 29.0703 17.9904 29.0703 14.886C29.0703 7.07845 22.7183 0.726442 14.9107 0.726442ZM22.5437 18.2542H7.27772C6.72584 18.2542 6.27841 17.8068 6.27841 17.2549C6.27841 16.703 6.72584 16.2556 7.27772 16.2556H7.71002C7.71328 12.627 10.4144 9.61869 13.9115 9.13096V9.00778C13.9115 8.45589 14.3589 8.00847 14.9108 8.00847C15.4627 8.00847 15.9101 8.45589 15.9101 9.00778V9.13096C19.4072 9.61862 22.1083 12.627 22.1115 16.2556H22.5438C23.0957 16.2556 23.5431 16.703 23.5431 17.2549C23.5431 17.8068 23.0956 18.2542 22.5437 18.2542Z" fill="#6E6E6E" />
													</svg>
												</div>
												<div className="onlive">
													<svg className="location2" width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M14.9106 11.0599C12.0443 11.0599 9.71212 13.3901 9.70862 16.2556H20.1127C20.1091 13.3901 17.7769 11.0599 14.9106 11.0599Z" fill="var(--secondary)"></path>
														<path d="M14.9107 0.726442C7.1031 0.726442 0.751099 7.07845 0.751099 14.886C0.751099 17.9904 1.73728 20.9375 3.60293 23.4087C5.32766 25.6933 7.74746 27.4287 10.4499 28.3272L14.0532 34.3499C14.2336 34.6516 14.5593 34.8362 14.9107 34.8362C15.2621 34.8362 15.5878 34.6516 15.7682 34.3499L19.3716 28.3272C22.0739 27.4287 24.4938 25.6933 26.2185 23.4087C28.0841 20.9375 29.0703 17.9904 29.0703 14.886C29.0703 7.07845 22.7183 0.726442 14.9107 0.726442ZM22.5437 18.2542H7.27772C6.72584 18.2542 6.27841 17.8068 6.27841 17.2549C6.27841 16.703 6.72584 16.2556 7.27772 16.2556H7.71002C7.71328 12.627 10.4144 9.61869 13.9115 9.13096V9.00778C13.9115 8.45589 14.3589 8.00847 14.9108 8.00847C15.4627 8.00847 15.9101 8.45589 15.9101 9.00778V9.13096C19.4072 9.61862 22.1083 12.627 22.1115 16.2556H22.5438C23.0957 16.2556 23.5431 16.703 23.5431 17.2549C23.5431 17.8068 23.0956 18.2542 22.5437 18.2542Z" fill="var(--secondary)"></path>
													</svg>
												</div>
												<div className="onlive2">
													<svg className="location3" width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M14.9106 11.0599C12.0443 11.0599 9.71212 13.3901 9.70862 16.2556H20.1127C20.1091 13.3901 17.7769 11.0599 14.9106 11.0599Z" fill="var(--primary)"></path>
														<path d="M14.9107 0.726442C7.1031 0.726442 0.751099 7.07845 0.751099 14.886C0.751099 17.9904 1.73728 20.9375 3.60293 23.4087C5.32766 25.6933 7.74746 27.4287 10.4499 28.3272L14.0532 34.3499C14.2336 34.6516 14.5593 34.8362 14.9107 34.8362C15.2621 34.8362 15.5878 34.6516 15.7682 34.3499L19.3716 28.3272C22.0739 27.4287 24.4938 25.6933 26.2185 23.4087C28.0841 20.9375 29.0703 17.9904 29.0703 14.886C29.0703 7.07845 22.7183 0.726442 14.9107 0.726442ZM22.5437 18.2542H7.27772C6.72584 18.2542 6.27841 17.8068 6.27841 17.2549C6.27841 16.703 6.72584 16.2556 7.27772 16.2556H7.71002C7.71328 12.627 10.4144 9.61869 13.9115 9.13096V9.00778C13.9115 8.45589 14.3589 8.00847 14.9108 8.00847C15.4627 8.00847 15.9101 8.45589 15.9101 9.00778V9.13096C19.4072 9.61862 22.1083 12.627 22.1115 16.2556H22.5438C23.0957 16.2556 23.5431 16.703 23.5431 17.2549C23.5431 17.8068 23.0956 18.2542 22.5437 18.2542Z" fill="var(--primary)"></path>
													</svg>
												</div>
												<svg className="location4" width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M14.9106 11.0599C12.0443 11.0599 9.71212 13.3901 9.70862 16.2556H20.1127C20.1091 13.3901 17.7769 11.0599 14.9106 11.0599Z" fill="#3CD860"></path>
													<path d="M14.9107 0.726442C7.1031 0.726442 0.751099 7.07845 0.751099 14.886C0.751099 17.9904 1.73728 20.9375 3.60293 23.4087C5.32766 25.6933 7.74746 27.4287 10.4499 28.3272L14.0532 34.3499C14.2336 34.6516 14.5593 34.8362 14.9107 34.8362C15.2621 34.8362 15.5878 34.6516 15.7682 34.3499L19.3716 28.3272C22.0739 27.4287 24.4938 25.6933 26.2185 23.4087C28.0841 20.9375 29.0703 17.9904 29.0703 14.886C29.0703 7.07845 22.7183 0.726442 14.9107 0.726442ZM22.5437 18.2542H7.27772C6.72584 18.2542 6.27841 17.8068 6.27841 17.2549C6.27841 16.703 6.72584 16.2556 7.27772 16.2556H7.71002C7.71328 12.627 10.4144 9.61869 13.9115 9.13096V9.00778C13.9115 8.45589 14.3589 8.00847 14.9108 8.00847C15.4627 8.00847 15.9101 8.45589 15.9101 9.00778V9.13096C19.4072 9.61862 22.1083 12.627 22.1115 16.2556H22.5438C23.0957 16.2556 23.5431 16.703 23.5431 17.2549C23.5431 17.8068 23.0956 18.2542 22.5437 18.2542Z" fill="#3CD860"></path>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card">
							<div className="card-header border-0 pb-0">
								<h3 className="h-title">Recent Customer</h3>
								<DropBtnBlog />
							</div>
							<div className="card-body px-0 pb-0">
								<div className="dz-scroll recent-customer">
									{recentBlog.map((item, ind) => (
										<ul className="d-flex custome-list" key={ind}>
											<li>
												<img src={item.image} className="avatar" alt="" />
											</li>
											<li className="ms-2">
												<h6 className="mb-0"><Link to={"#"}>{item.title}</Link></h6>
												<p className="mb-0">Alexandria St. London Park</p>
											</li>
										</ul>
									))}
								</div>
							</div>
							<div className="card-footer pt-0 border-0">
								<button type="button" className="btn btn-primary btn-block mb-2" onClick={() => setCustomModal(true)}>
									+ New Customer
								</button>
								<Link to={"/app-profile-2"} className="text-primary font-w600 text-center d-block">View More</Link>
							</div>
						</div>
					</div>
					<div className="col-xl-12">
						<div className="card">
							<Tab.Container defaultActiveKey={'All'}>
								<div className="card-header border-0 flex-wrap">
									<h3 className="h-title">Favourites Menus</h3>
									<Nav as="ul" className="revnue-tab-1 nav nav-tabs ms-auto me-3">
										<Nav.Item as="li">
											<Nav.Link eventKey="All" >All Categories</Nav.Link>
										</Nav.Item>
										<Nav.Item as="li">
											<Nav.Link eventKey="Breakfast">Breakfast Menus</Nav.Link>
										</Nav.Item>
										<Nav.Item as="li">
											<Nav.Link eventKey="Lunch">Lunch Menus</Nav.Link>
										</Nav.Item>
										<Nav.Item as="li">
											<Nav.Link eventKey="Dinner">Dinner Menus</Nav.Link>
										</Nav.Item>
									</Nav>
									<div className='d-flex alig-items-center mt-md-0 mt-sm-2 mt-0 '>
										<Select
											options={options}
											className="custom-react-drop-btn"
											defaultValue={options[0]}
											isSearchable={false}
										/>
										<DropBtnBlog />
									</div>
								</div>
								<div className="card-body pt-0">
									<Tab.Content >
										<Tab.Pane eventKey="All">
											<MenuTabData />
										</Tab.Pane>
										<Tab.Pane eventKey="Breakfast">
											<MenuTabData />
										</Tab.Pane>
										<Tab.Pane eventKey="Lunch">
											<MenuTabData />
										</Tab.Pane>
										<Tab.Pane eventKey="Dinner">
											<MenuTabData />
										</Tab.Pane>
									</Tab.Content>
									<div className="swiper-box">
										<MenuSlider />
									</div>
								</div>
							</Tab.Container>
						</div>
					</div>
				</div>
			</div>
			<Modal show={customModal} onHide={setCustomModal} centered>
				<div className="modal-content">
					<div className="modal-header ">
						<h5 className="modal-title">Add Customer</h5>
						<button type="button" className="btn-close" onClick={() => setCustomModal(false)}></button>
					</div>
					<div className="modal-body">
						<div className="form-group">
							<label className="form-label">Seller Mobile Number</label>
							<input type="number" className="form-control mb-3" id="exampleInputEmail1" placeholder="Number" />
							<label className="form-label">Email</label>
							<input type="email" className="form-control mb-3" id="exampleInputEmail2" placeholder=" Email" />
							<label className="form-label">Amount</label>
							<input type="number" className="form-control mb-3" id="exampleInputEmail3" placeholder="Amount" />
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-danger light" onClick={() => setCustomModal(false)}>Close</button>
						<button type="button" className="btn btn-primary">Save changes</button>
					</div>
				</div>
			</Modal>
		</>
	)
}
export default DashboardDark;
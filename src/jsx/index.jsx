import { useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

//Css
import "./index.css";
import "./chart.css";
import "./step.css";

//Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
import ScrollToTop from "./layouts/ScrollToTop";

//Dashboard
import Home from "./pages/dashboard/Home";
// import DashboardDark from "./pages/dashboard/DashboardDark";
import OrderList from "./pages/dashboard/OrderList";
import OrderDetails from "./pages/dashboard/OrderDetails";
import Analytics from "./pages/dashboard/Analytics";
import Reviews from "./pages/dashboard/Reviews";
import HomeCustomers from "./pages/dashboard/Customers";
import Blog from "./pages/dashboard/Blog";

//Apps
import Chat from "./pages/apps/Chat";
import AppProfile from "./pages/apps/AppProfile";
import AppProfile2 from "./pages/apps/AppProfile2";
import EditProfile from "./pages/apps/EditProfile";
import PostDetails from "./pages/apps/PostDetails";
import Compose from "./pages/email/Compose";
import Inbox from "./pages/email/Inbox";
import Read from "./pages/email/Read";
import Calendar from "./pages/apps/Calendar";

//Product List
import ProductGrid from "./pages/ecommers/ProductGrid";
import ProductList from "./pages/ecommers/ProductList";
import ProductDetail from "./pages/ecommers/ProductDetail";
import ProductOrder from "./pages/ecommers/ProductOrder";
import Checkout from "./pages/ecommers/Checkout";
import Invoice from "./pages/ecommers/Invoice";
import Customers from "./pages/ecommers/Customers";

//Charts
import RechartJs from "./pages/charts/rechart";
import ChartChartjs from "./pages/charts/chartjs";
import ChartSparkline from "./pages/charts/saprkline";
import ApexChart from "./pages/charts/apexchart";

//Bootstrap
import UiAccordion from "./pages/bootstrap/Accordion";
import UiAlert from "./pages/bootstrap/Alert";
import UiBadge from "./pages/bootstrap/Badge";
import UiButton from "./pages/bootstrap/Button";
import UiModal from "./pages/bootstrap/Modal";
import UiButtonGroup from "./pages/bootstrap/ButtonGroup";
import UiListGroup from "./pages/bootstrap/ListGroup";
import UiCards from "./pages/bootstrap/Cards";
import UiCarousel from "./pages/bootstrap/Carousel";
import UiDropDown from "./pages/bootstrap/DropDown";
import UiPopOver from "./pages/bootstrap/PopOver";
import UiProgressBar from "./pages/bootstrap/ProgressBar";
import UiTab from "./pages/bootstrap/Tab";
import UiTypography from "./pages/bootstrap/Typography";
import UiPagination from "./pages/bootstrap/Pagination";
import UiGrid from "./pages/bootstrap/Grid";

//Plugins
import Select2 from "./pages/plugins/Select2";
import MainSweetAlert from "./pages/plugins/SweetAlert";
import Toastr from "./pages/plugins/Toastr";
// import JqvMap from "./pages/plugins/JqvMap";
import Lightgallery from "./pages/plugins/Lightgallery";

//Widget
import Widget from "./pages/widget/Widget";

//Form
import Element from "./pages/forms/Element";
import Wizard from "./pages/forms/Wizard";
import CkEditor from "./pages/forms/CkEditor";
import Pickers from "./pages/forms/Pickers";
import FormValidation from "./pages/forms/FormValidation";

//Table
// import FilteringTable from "./pages/table/FilteringTable";
import SortingTable from "./pages/table/SortingTable";
import BootstrapTable from "./pages/table/BootstrapTable";

//Svg Icon
import SvgIcon from "./pages/svgicon/SvgIcon";

//Pages
import Error400 from "./pages/error/Error400";
import Error403 from "./pages/error/Error403";
import Error404 from "./pages/error/Error404";
import Error500 from "./pages/error/Error500";
import Error503 from "./pages/error/Error503";
import LockScreen from "./pages/LockScreen";

import { ThemeContext } from "../context/ThemeContext";

const Markup = () => {
  const allroutes = [
    // Dashboard
    { url: "", component: <Home /> },
    // { url: "dashboard", component: <Home /> },
    // { url: "dashboard-dark", component: <DashboardDark /> },
    { url: "order-list", component: <OrderList /> },
    { url: "order-details", component: <OrderDetails /> },
    { url: "analytics", component: <Analytics /> },
    { url: "customers", component: <HomeCustomers /> },
    { url: "reviews", component: <Reviews /> },
    { url: "blog", component: <Blog /> },
    //Apps
    { url: "chat", component: <Chat /> },
    { url: "app-profile", component: <AppProfile /> },
    { url: "app-profile-2", component: <AppProfile2 /> },
    { url: "edit-profile", component: <EditProfile /> },
    { url: "post-details", component: <PostDetails /> },
    { url: "email-compose", component: <Compose /> },
    { url: "email-inbox", component: <Inbox /> },
    { url: "email-read", component: <Read /> },
    { url: "app-calender", component: <Calendar /> },
    //Shop
    { url: "ecom-product-grid", component: <ProductGrid /> },
    { url: "ecom-product-list", component: <ProductList /> },
    { url: "ecom-product-detail", component: <ProductDetail /> },
    { url: "ecom-product-order", component: <ProductOrder /> },
    { url: "ecom-checkout", component: <Checkout /> },
    { url: "ecom-invoice", component: <Invoice /> },
    { url: "ecom-customers", component: <Customers /> },
    // // Chart
    { url: "chart-rechart", component: <RechartJs /> },
    { url: "chart-chartjs", component: <ChartChartjs /> },
    { url: "chart-sparkline", component: <ChartSparkline /> },
    { url: "chart-apexchart", component: <ApexChart /> },
    // // Bootstrap
    { url: "ui-accordion", component: <UiAccordion /> },
    { url: "ui-alert", component: <UiAlert /> },
    { url: "ui-badge", component: <UiBadge /> },
    { url: "ui-button", component: <UiButton /> },
    { url: "ui-modal", component: <UiModal /> },
    { url: "ui-button-group", component: <UiButtonGroup /> },
    { url: "ui-list-group", component: <UiListGroup /> },
    { url: "ui-card", component: <UiCards /> },
    { url: "ui-carousel", component: <UiCarousel /> },
    { url: "ui-dropdown", component: <UiDropDown /> },
    { url: "ui-popover", component: <UiPopOver /> },
    { url: "ui-progressbar", component: <UiProgressBar /> },
    { url: "ui-tab", component: <UiTab /> },
    { url: "ui-typography", component: <UiTypography /> },
    { url: "ui-pagination", component: <UiPagination /> },
    { url: "ui-grid", component: <UiGrid /> },
    // Plugin
    { url: "uc-select2", component: <Select2 /> },
    { url: "uc-sweetalert", component: <MainSweetAlert /> },
    { url: "uc-toastr", component: <Toastr /> },
    // { url: "map-jqvmap", component: <JqvMap /> },
    { url: "uc-lightgallery", component: <Lightgallery /> },
    //Widget
    { url: "widget-basic", component: <Widget /> },
    //Form
    { url: "form-element", component: <Element /> },
    { url: "form-wizard", component: <Wizard /> },
    { url: "form-ckeditor", component: <CkEditor /> },
    { url: "form-pickers", component: <Pickers /> },
    { url: "form-validation", component: <FormValidation /> },
    //table
    // { url: 'table-filtering', component: <FilteringTable /> },
    { url: 'table-sorting', component: <SortingTable /> },
    { url: "table-bootstrap-basic", component: <BootstrapTable /> },
    //Svg Icon 
    { url: "svg-icons", component: <SvgIcon /> },
    { url: "*", component: <Home /> },

  ];


  function NotFound() {
    const url = allroutes.map((route) => route.url);
    let path = window.location.pathname
    path = path.split('/')
    path = path[path.length - 1]

    if (url.indexOf(path) <= 0) {
      // return <Error404 />
    }
  }

  return (
    <>
      <Routes>
        <Route path='/page-error-400' element={<Error400 />} />
        <Route path='/page-error-403' element={<Error403 />} />
        <Route path='/page-error-404' element={<Error404 />} />
        <Route path='/page-error-500' element={<Error500 />} />
        <Route path='/page-error-503' element={<Error503 />} />
        <Route path='/page-lock-screen' element={<LockScreen />} />
        <Route element={<MainLayout />} >
          {allroutes.map((data, i) => (
            <Route
              key={i}
              exact
              path={`${data.url}`}
              element={data.component}
            />
          ))}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />      
    </>
  );
};


function MainLayout() {
  const { menuToggle, sidebariconHover } = useContext(ThemeContext);
  return (
    <div id="main-wrapper" className={`show ${sidebariconHover ? "iconhover-toggle" : ""} ${menuToggle ? "menu-toggle" : ""}`}>
      <Nav />
      <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
};



export default Markup;

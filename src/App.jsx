import { lazy, Suspense, useEffect } from 'react';
import PropTypes from "prop-types";
/// Components
import Index from "./jsx";
import { connect, useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
// action
import { checkAutoLogin } from './services/AuthService';
// import { isLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';
/// Style

import "./assets/css/style.css";


const SignUp = lazy(() => import('./jsx/pages/Registration'));
const Login = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./jsx/pages/Login')), 500);
  });
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}



function App({isAuthenticated}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    checkAutoLogin(dispatch, navigate);
  }, [dispatch,navigate]);


  let routeblog = (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/page-register' element={<SignUp />} />
    </Routes>
  );
  if (isAuthenticated) {
    return (
      <>
        <Suspense fallback={
          <div id="preloader">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>
        }
        >
          <Index />
        </Suspense>
      </>
    );
  } else {
    return (
      <div className="vh-100">
        <Suspense fallback={
          <div id="preloader">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>
        }
        >
          {routeblog}

        </Suspense>
      </div>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

App.propTypes = {
  isAuthenticated: PropTypes.node.isRequired,
};

//export default connect((mapStateToProps)(App)); 
export default withRouter(connect(mapStateToProps)(App));


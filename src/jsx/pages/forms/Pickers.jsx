import { useState, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Gradient from '../../component/forms/pickers/LinearGradientPicker';
import TimePicker, { CurrentTimePicker } from '../../component/forms/pickers/TimePicker';
// import "bootstrap-daterangepicker/daterangepicker.css";
import { DateRangePicker } from 'rsuite';
import 'rsuite/DateRangePicker/styles/index.css';


function Pickers() {
  const [colorChange, setColorChange] = useState(null);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Date Picker</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="example rangeDatePicker">
                      <p className="mb-1">Date Range Pick</p>
                      <DateRangePicker className="d-block" hoverRange="week" weekStart={3} ranges={[]}>
                        <input type="text" className="form-control input-daterange-timepicker" />
                      </DateRangePicker>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="example rangeDatePicker">
                      <p className="mb-1">Date Range With Time</p>
                      <DateRangePicker className="d-block" hoverRange="week" weekStart={3} ranges={[]}>
                        <input type="text" className="form-control input-daterange-timepicker" />
                      </DateRangePicker>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Pick-Date picker</h4>
              </div>
              <div className="card-body">
                <p className="mb-1">Default picker</p>
                <DatePicker className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Time picker</h4>
              </div>
              <div className="card-body">
                <div className="row picker-data">
                  <div className="col-md-6 col-xl-3 col-xxl-6 mb-3">
                    <div className="color-time-picker">
                      <p className="mb-1">Complex mode</p>
                      <CurrentTimePicker />
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 col-xxl-6 mb-3">
                    <div className="color-time-picker style-1">
                      <p className="mb-1">Auto close Clock Picker</p>
                      <TimePicker />
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 col-xxl-6 mb-3">
                    <div className="color-time-picker">
                      <p className="mb-1">Now time</p>
                      <TimePicker />
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 col-xxl-6 mb-3">
                    <div className="color-time-picker style-1">
                      <p className="mb-1">Left Placement</p>
                      <TimePicker />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Color Picker</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 mb-3">
                    <div className="example">
                      <p className="mb-1">Default Color Picker</p>
                      <input
                        type="color"
                        className="as_colorpicker"
                        value={colorChange}
                        onChange={(e) => setColorChange(e.target.value)}
                        style={{ width: "50%" }}
                      />
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-6 mb-3">
                    <div className="color-gradian-tixia">
                      <p className="mb-1">Gradiant mode</p>
                      <Gradient />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pickers;

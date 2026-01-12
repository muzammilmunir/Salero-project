import { Fragment, useReducer } from "react";
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
import { Row, Card, Col, Alert, Button, Tab, Nav } from "react-bootstrap";
import { reducer } from "../../component/bootstrap/alertReducer";
import AlertList from "../../component/bootstrap/AlertList";
import { SVGICON } from "../../constant/theme";

const initial = true;

function UiAlert() {

  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <Fragment>

      <div className="container">
        <div className="element-area">
          <div className="demo-view">
            <div className="container-fluid pt-0 ps-0 pe-lg-4 pe-0">
              <Row>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="basic-alerts" className="dz-card">
                      <Card.Header className=" d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Basic Alerts</Card.Title>
                          <Card.Text className="subtitle mb-0">
                            Bootstrap default style
                          </Card.Text>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Alert variant="primary" dismissible show={state.primary}>
                              {SVGICON.welcome}
                              {" "}<strong>Welcome! </strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'primary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="secondary" dismissible show={state.secondary}>
                              {SVGICON.done}
                              {" "}<strong>Done! </strong> Your profile photo updated.
                              <button className="btn-close" onClick={() => dispatch({ type: 'secondary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="success" dismissible show={state.success}>
                              {SVGICON.success}
                              {" "}<strong>Success! </strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'success' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="info" dismissible show={state.info}>
                              {SVGICON.info}
                              {" "}<strong>Info!  </strong> You have got 5 new email.
                              <button className="btn-close" onClick={() => dispatch({ type: 'info' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="warning" dismissible show={state.warning}>
                              {SVGICON.warning}
                              {" "}<strong>Warning! </strong> Something went wrong. Please check.
                              <button className="btn-close" onClick={() => dispatch({ type: 'warning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="danger" dismissible show={state.danger}>
                              {SVGICON.error}
                              {" "}<strong>Error! </strong> Message sending failed.
                              <button className="btn-close" onClick={() => dispatch({ type: 'danger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="dark" dismissible show={state.dark}>
                              {SVGICON.error}
                              {" "}<strong>Error!  </strong> You successfully read this important alert message.
                              <button className="btn-close" onClick={() => dispatch({ type: 'dark' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="light" dismissible show={state.light}>
                              {SVGICON.error}
                              {" "}<strong>Error!  </strong> You successfully read this message..
                              <button className="btn-close" onClick={() => dispatch({ type: 'light' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary" dismissible show={state.primary}>
      {SVGICON.welcome}
      <strong>Welcome! </strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'primary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="secondary" dismissible show={state.secondary}>
      {SVGICON.done}
      <strong>Done! </strong> Your profile photo updated. 
      <button className="btn-close" onClick={()=>dispatch({type:'secondary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="success" dismissible show={state.success}>
      {SVGICON.success}
      <strong>Success! </strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'success'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="info" dismissible show={state.info}>
      {SVGICON.info}
      <strong>Info!  </strong> You have got 5 new email. 
      <button className="btn-close" onClick={()=>dispatch({type:'info'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="warning" dismissible show={state.warning}>
      {SVGICON.warning}
      <strong>Warning! </strong> Something went wrong. Please check.
      <button className="btn-close" onClick={()=>dispatch({type:'warning'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="danger" dismissible show={state.danger}>
      {SVGICON.error}
      <strong>Error! </strong> Message sending failed.
      <button className="btn-close" onClick={()=>dispatch({type:'danger'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="dark" dismissible show={state.dark}>
      {SVGICON.error}
      <strong>Error!  </strong> You successfully read this important alert message.
      <button className="btn-close" onClick={()=>dispatch({type:'dark'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="light" dismissible show={state.light}>
      {SVGICON.error}
      <strong>Error!  </strong> You successfully read this message..
      <button className="btn-close" onClick={()=>dispatch({type:'light'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>

                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="color-alerts" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Solid color alerts</Card.Title>
                          <Card.Text className="subtitle mb-0">
                            add <code>.solid</code> class to change the solid color.
                          </Card.Text>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>

                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>

                            <Alert variant="primary" dismissible show={state.solidprimary} className="solid">
                              {SVGICON.welcome}
                              {" "}<strong>Welcome! </strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'solidprimary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="secondary" dismissible show={state.solidsecondary} className="solid">
                              {SVGICON.done}
                              {" "}<strong>Done! </strong> Your profile photo updated.
                              <button className="btn-close" onClick={() => dispatch({ type: 'solidsecondary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="success" dismissible show={state.solidsuccess} className="solid">
                              {SVGICON.success}
                              {" "}  <strong>Success!</strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'solidsuccess' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="info" dismissible show={state.solidinfo} className="solid">
                              {SVGICON.info}
                              {" "}<strong>Info! </strong> You have got 5 new email.
                              <button className="btn-close" onClick={() => dispatch({ type: 'solidinfo' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="warning" dismissible show={state.solidwarning} className="solid">
                              {SVGICON.warning}
                              {" "}<strong>Warning! </strong> Something went wrong. Please check.
                              <button className="btn-close" onClick={() => dispatch({ type: 'solidwarning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="danger" dismissible show={state.soliddanger} className="solid">
                              {SVGICON.error}
                              {" "}<strong>Error! </strong> Message sending failed.
                              <button className="btn-close" onClick={() => dispatch({ type: 'soliddanger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="dark" dismissible show={state.soliddark} className="solid">
                              {SVGICON.error}
                              {" "}<strong>Error! </strong> You successfully read this important alert message.
                              <button className="btn-close" onClick={() => dispatch({ type: 'soliddark' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="light" dismissible show={state.solidlight} className="solid">
                              {SVGICON.error}
                              {" "}
                              <strong>Error! </strong> You successfully read this message..
                              <button className="btn-close" onClick={() => dispatch({ type: 'solidlight' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary" dismissible show={state.solidprimary} className="solid">						
      <strong>Welcome! </strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'solidprimary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="secondary" dismissible show={state.solidsecondary} className="solid">						
      <strong>Done! </strong> Your profile photo updated. 
      <button className="btn-close" onClick={()=>dispatch({type:'solidsecondary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="success" dismissible show={state.solidsuccess} className="solid">						
      <strong>Success!</strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'solidsuccess'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="info" dismissible show={state.solidinfo} className="solid">						
      <strong>Info! </strong> You have got 5 new email. 
      <button className="btn-close" onClick={()=>dispatch({type:'solidinfo'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="warning" dismissible show={state.solidwarning} className="solid">						
      <strong>Error! </strong> Something went wrong. Please check. 
      <button className="btn-close" onClick={()=>dispatch({type:'solidwarning'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="danger" dismissible show={state.soliddanger} className="solid">						
      <strong>Error! </strong> Message sending failed.
      <button className="btn-close" onClick={()=>dispatch({type:'soliddanger'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="dark" dismissible show={state.soliddark} className="solid">						
      <strong>Error! </strong> You successfully read this important alert message.
      <button className="btn-close" onClick={()=>dispatch({type:'soliddark'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="light" dismissible show={state.solidlight} className="solid">						
      <strong>Error! </strong> You successfully read this message..
      <button className="btn-close" onClick={()=>dispatch({type:'solidlight'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="square-alerts" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Square alerts</Card.Title>
                          <p className="mb-0 subtitle">
                            add <code>.alert-square</code> class to change the solid color.
                          </p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Alert variant="primary" className="solid alert-square">
                              <strong>Welcome! </strong> 	Message has been sent.
                            </Alert>
                            <Alert variant="secondary" className="solid alert-square">
                              <strong>Done! </strong> Your profile photo updated.
                            </Alert>
                            <Alert variant="success" className="solid alert-square">
                              <strong>Success!</strong> Message has been sent.
                            </Alert>
                            <Alert variant="info" className="solid alert-square">
                              <strong>Info! </strong> You have got 5 new email.
                            </Alert>
                            <Alert variant="warning" className="solid alert-square">
                              <strong>Error! </strong> Something went wrong. Please check.

                            </Alert>
                            <Alert variant="danger" className="solid alert-square">
                              <strong>Error! </strong> Message sending failed.

                            </Alert>
                            <Alert variant="dark" className="solid alert-square">
                              <strong>Error! </strong> You successfully read this important alert message.

                            </Alert>
                            <Alert variant="light" className="solid alert-square">
                              <strong>Error! </strong> You successfully read this message..
                            </Alert>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary"   className="solid alert-square">						
      <strong>Welcome! </strong> 	Message has been sent.						
    </Alert>
    <Alert  variant="secondary"  className="solid alert-square">						
      <strong>Done! </strong> Your profile photo updated. 						
    </Alert>
    <Alert  variant="success" className="solid alert-square">						
      <strong>Success!</strong> Message has been sent.
    </Alert>
    <Alert  variant="info"  className="solid alert-square">						
      <strong>Info! </strong> You have got 5 new email. 						
    </Alert>
    <Alert  variant="warning"  className="solid alert-square">						
      <strong>Error! </strong> Something went wrong. Please check. 
    </Alert>
    <Alert  variant="danger"  className="solid alert-square">						
      <strong>Error! </strong> Message sending failed.
    </Alert>
    <Alert  variant="dark"  className="solid alert-square">						
      <strong>Error! </strong> You successfully read this important alert message.
    </Alert>
    <Alert  variant="light"  className="solid alert-square">						
      <strong>Error! </strong> You successfully read this message..						
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="rounded-alerts" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Rounded alerts</Card.Title>
                          <p className="mb-0 subtitle">
                            add <code>.alert-rounded</code> class to change the solid color.
                          </p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Alert variant="primary" className="solid alert-rounded">
                              <strong>Welcome! </strong> Message has been sent.
                            </Alert>
                            <Alert variant="secondary" className="solid alert-rounded">
                              <strong>Done! </strong> Your profile photo updated.
                            </Alert>
                            <Alert variant="success" className="solid alert-rounded">
                              <strong>Success!</strong> Message has been sent.
                            </Alert>
                            <Alert variant="info" className="solid alert-rounded">
                              <strong>Info! </strong> You have got 5 new email.
                            </Alert>
                            <Alert variant="warning" className="solid alert-rounded">
                              <strong>Error! </strong> Something went wrong. Please check.

                            </Alert>
                            <Alert variant="danger" className="solid alert-rounded">
                              <strong>Error! </strong> Message sending failed.

                            </Alert>
                            <Alert variant="dark" className="solid alert-rounded">
                              <strong>Error! </strong> You successfully read this important alert message.

                            </Alert>
                            <Alert variant="light" className="solid alert-rounded">
                              <strong>Error! </strong> You successfully read this message..
                            </Alert>

                          </Card.Body>
                        </Tab.Pane >
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary"   className="solid alert-rounded">						
      <strong>Welcome! </strong> Message has been sent.						
    </Alert>
    <Alert  variant="secondary"  className="solid alert-rounded">						
      <strong>Done! </strong> Your profile photo updated. 						
    </Alert>
    <Alert  variant="success" className="solid alert-rounded">						
      <strong>Success!</strong> Message has been sent.
    </Alert>
    <Alert  variant="info"  className="solid alert-rounded">						
      <strong>Info! </strong> You have got 5 new email. 						
    </Alert>
    <Alert  variant="warning"  className="solid alert-rounded">						
      <strong>Error! </strong> Something went wrong. Please check. 
    </Alert>
    <Alert  variant="danger"  className="solid alert-rounded">						
      <strong>Error! </strong> Message sending failed.
    </Alert>
    <Alert  variant="dark"  className="solid alert-rounded">						
      <strong>Error! </strong> You successfully read this important alert message.
    </Alert>
    <Alert  variant="light"  className="solid alert-rounded">						
      <strong>Error! </strong> You successfully read this message..						
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="dismissable-alerts" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>

                          <Card.Title>Dismissable Alerts</Card.Title>
                          <Card.Text className="subtitle mb-0">
                            Bootstrap default style
                          </Card.Text>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Alert variant="primary" dismissible show={state.disprimary}>
                              {SVGICON.welcome}
                              <strong>Welcome! </strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'disprimary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="secondary" dismissible show={state.dissecondary}>
                              {SVGICON.done}
                              <strong>Done! </strong> Your profile photo updated.
                              <button className="btn-close" onClick={() => dispatch({ type: 'dissecondary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="success" dismissible show={state.dissuccess}>
                              {SVGICON.success}
                              <strong>Success! </strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'dissuccess' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="info" dismissible show={state.disinfo}>
                              {SVGICON.info}
                              <strong>Info!  </strong> You have got 5 new email.
                              <button className="btn-close" onClick={() => dispatch({ type: 'disinfo' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="warning" dismissible show={state.diswarning}>
                              {SVGICON.error}
                              <strong>Error! </strong> Something went wrong. Please check.
                              <button className="btn-close" onClick={() => dispatch({ type: 'diswarning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="danger" dismissible show={state.disdanger}>
                              {SVGICON.error}
                              <strong>Error! </strong> Message sending failed.
                              <button className="btn-close" onClick={() => dispatch({ type: 'disdanger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="dark" dismissible show={state.disdark}>
                              {SVGICON.error}
                              <strong>Error!  </strong> You successfully read this important alert message.
                              <button className="btn-close" onClick={() => dispatch({ type: 'disdark' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="light" dismissible show={state.dislight}>
                              {SVGICON.error}
                              <strong>Error!  </strong> You successfully read this message..
                              <button className="btn-close" onClick={() => dispatch({ type: 'dislight' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary" dismissible show={state.disprimary}>
      {SVGICON.welcome}
      <strong>Welcome! </strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'disprimary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="secondary" dismissible show={state.dissecondary}>
      {SVGICON.done}
      <strong>Done! </strong> Your profile photo updated. 
      <button className="btn-close" onClick={()=>dispatch({type:'dissecondary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="success" dismissible show={state.dissuccess}>
      {SVGICON.success}
      <strong>Success! </strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'dissuccess'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="info" dismissible show={state.disinfo}>
      {SVGICON.info}
      <strong>Info!  </strong> You have got 5 new email. 
      <button className="btn-close" onClick={()=>dispatch({type:'disinfo'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="warning" dismissible show={state.diswarning}>
      {SVGICON.error}
      <strong>Error! </strong> Something went wrong. Please check.
      <button className="btn-close" onClick={()=>dispatch({type:'diswarning'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="danger" dismissible show={state.disdanger}>
      {SVGICON.error}
      <strong>Error! </strong> Message sending failed.
      <button className="btn-close" onClick={()=>dispatch({type:'disdanger'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="dark" dismissible show={state.disdark}>
      {SVGICON.error}
      <strong>Error!  </strong> You successfully read this important alert message.
      <button className="btn-close" onClick={()=>dispatch({type:'disdark'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="light" dismissible show={state.dislight}>
      {SVGICON.error}
      <strong>Error!  </strong> You successfully read this message..
      <button className="btn-close" onClick={()=>dispatch({type:'dislight'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="alerts-alt" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Alerts alt</Card.Title>
                          <p className="mb-0 subtitle">
                            add <code>.alert-alt</code> class to change the solid color.
                          </p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Alert variant="primary" dismissible show={state.altprimary} className='alert-alt'>
                              {SVGICON.welcome}
                              <strong>Welcome! </strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altprimary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="secondary" dismissible show={state.altsecondary} className='alert-alt'>
                              {SVGICON.done}
                              <strong>Done! </strong> Your profile photo updated.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altsecondary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="success" dismissible show={state.altsuccess} className='alert-alt'>
                              {SVGICON.success}
                              <strong>Success! </strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altsuccess' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="info" dismissible show={state.disinfo} className='alert-alt'>
                              {SVGICON.info}
                              <strong>Info!  </strong> You have got 5 new email.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altinfo' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="warning" dismissible show={state.altwarning} className='alert-alt'>
                              {SVGICON.error}
                              <strong>Error! </strong> Something went wrong. Please check.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altwarning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="danger" dismissible show={state.altdanger} className='alert-alt'>
                              {SVGICON.error}
                              <strong>Error! </strong> Message sending failed.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altdanger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="dark" dismissible show={state.altdark} className='alert-alt'>
                              {SVGICON.error}
                              <strong>Error!  </strong> You successfully read this important alert message.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altdark' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="light" dismissible show={state.altlight} className='alert-alt'>
                              {SVGICON.error}
                              <strong>Error!  </strong> You successfully read this message..
                              <button className="btn-close" onClick={() => dispatch({ type: 'altlight' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>

                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary" dismissible show={state.altprimary} className='alert-alt'>
      {SVGICON.welcome}
      <strong>Welcome! </strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'altprimary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="secondary" dismissible show={state.altsecondary} className='alert-alt'>
      {SVGICON.done}
      <strong>Done! </strong> Your profile photo updated. 
      <button className="btn-close" onClick={()=>dispatch({type:'altsecondary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="success" dismissible show={state.altsuccess} className='alert-alt'>
      {SVGICON.success}
      <strong>Success! </strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'altsuccess'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="info" dismissible show={state.disinfo} className='alert-alt'>
      {SVGICON.info}
      <strong>Info!  </strong> You have got 5 new email. 
      <button className="btn-close" onClick={()=>dispatch({type:'altinfo'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="warning" dismissible show={state.altwarning} className='alert-alt'>
      {SVGICON.error}
      <strong>Error! </strong> Something went wrong. Please check.
      <button className="btn-close" onClick={()=>dispatch({type:'altwarning'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="danger" dismissible show={state.altdanger} className='alert-alt'>
      {SVGICON.error}
      <strong>Error! </strong> Message sending failed.
      <button className="btn-close" onClick={()=>dispatch({type:'altdanger'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="dark" dismissible show={state.altdark} className='alert-alt'>
      {SVGICON.error}
      <strong>Error!  </strong> You successfully read this important alert message.
      <button className="btn-close" onClick={()=>dispatch({type:'altdark'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="light" dismissible show={state.altlight} className='alert-alt'>
      {SVGICON.error}
      <strong>Error!  </strong> You successfully read this message..
      <button className="btn-close" onClick={()=>dispatch({type:'altlight'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="solid-alt" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Solid Alt</Card.Title>
                          <p className="mb-0 subtitle">
                            add <code>.alert-alt.solid</code> class to change the solid
                            color.
                          </p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Alert variant="primary" dismissible show={state.altsolidprimary} className="solid alert-alt">
                              {SVGICON.welcome}
                              <strong>Welcome! </strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altsolidprimary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="secondary" dismissible show={state.altsolidsecondary} className="solid alert-alt">
                              {SVGICON.done}
                              <strong>Done! </strong> Your profile photo updated.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altsolidsecondary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="success" dismissible show={state.altsolidsucces} className="solid alert-alt">
                              {SVGICON.success}
                              <strong>Success!</strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altsolidsuccess' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="info" dismissible show={state.altsolidinfo} className="solid alert-alt">
                              {SVGICON.info}
                              <strong>Info! </strong> You have got 5 new email.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altsolidinfo' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="warning" dismissible show={state.altsolidwarning} className="solid alert-alt">
                              {SVGICON.error}
                              <strong>Error! </strong> Something went wrong. Please check.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altsolidwarning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="danger" dismissible show={state.altsoliddanger} className="solid alert-alt">
                              {SVGICON.error}
                              <strong>Error! </strong> Message sending failed.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altsoliddanger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="dark" dismissible show={state.altsoliddark} className="solid alert-alt">
                              {SVGICON.error}
                              <strong>Error! </strong> You successfully read this important alert message.
                              <button className="btn-close" onClick={() => dispatch({ type: 'altsoliddark' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="light" dismissible show={state.altsolidlight} className="solid alert-alt">
                              {SVGICON.error}
                              <strong>Error! </strong> You successfully read this message..
                              <button className="btn-close" onClick={() => dispatch({ type: 'altsolidlight' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary" dismissible show={state.altsolidprimary} className="solid alert-alt">	
      {SVGICON.welcome}	
      <strong>Welcome! </strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'altsolidprimary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="secondary" dismissible show={state.altsolidsecondary} className="solid alert-alt">						
      {SVGICON.done}
      <strong>Done! </strong> Your profile photo updated. 
      <button className="btn-close" onClick={()=>dispatch({type:'altsolidsecondary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="success" dismissible show={state.altsolidsucces} className="solid alert-alt">						
      {SVGICON.success}
      <strong>Success!</strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'altsolidsuccess'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="info" dismissible show={state.altsolidinfo} className="solid alert-alt">						
      {SVGICON.info}
      <strong>Info! </strong> You have got 5 new email. 
      <button className="btn-close" onClick={()=>dispatch({type:'altsolidinfo'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="warning" dismissible show={state.altsolidwarning} className="solid alert-alt">						
      {SVGICON.error}
      <strong>Error! </strong> Something went wrong. Please check. 
      <button className="btn-close" onClick={()=>dispatch({type:'altsolidwarning'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="danger" dismissible show={state.altsoliddanger} className="solid alert-alt">						
      {SVGICON.error}
      <strong>Error! </strong> Message sending failed.
      <button className="btn-close" onClick={()=>dispatch({type:'altsoliddanger'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="dark" dismissible show={state.altsoliddark} className="solid alert-alt">						
      {SVGICON.error}
      <strong>Error! </strong> You successfully read this important alert message.
      <button className="btn-close" onClick={()=>dispatch({type:'altsoliddark'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="light" dismissible show={state.altsolidlight} className="solid alert-alt">						
      {SVGICON.error}
      <strong>Error! </strong> You successfully read this message..
      <button className="btn-close" onClick={()=>dispatch({type:'altsolidlight'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="dismissable-solid" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Dismissable with solid</Card.Title>
                          <p className="mb-0 subtitle">
                            add <code>.solid</code> class to change the solid color.
                          </p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Alert variant="primary" dismissible show={state.soliddisprimary} className="solid">
                              {SVGICON.welcome}
                              <strong>Welcome! </strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'soliddisprimary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="secondary" dismissible show={state.soliddissecondary} className="solid">
                              {SVGICON.done}
                              <strong>Done! </strong> Your profile photo updated.
                              <button className="btn-close" onClick={() => dispatch({ type: 'soliddissecondary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="success" dismissible show={state.soliddissuccess} className="solid">
                              {SVGICON.success}
                              <strong>Success!</strong> Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'soliddissuccess' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="info" dismissible show={state.soliddisinfo} className="solid">
                              {SVGICON.info}
                              <strong>Info! </strong> You have got 5 new email.
                              <button className="btn-close" onClick={() => dispatch({ type: 'soliddisinfo' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="warning" dismissible show={state.soliddiswarning} className="solid">
                              {SVGICON.error}
                              <strong>Error! </strong> Something went wrong. Please check.
                              <button className="btn-close" onClick={() => dispatch({ type: 'soliddiswarning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="danger" dismissible show={state.soliddisdanger} className="solid">
                              {SVGICON.error}
                              <strong>Error! </strong> Message sending failed.
                              <button className="btn-close" onClick={() => dispatch({ type: 'soliddisdanger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="dark" dismissible show={state.soliddisdark} className="solid">
                              {SVGICON.error}
                              <strong>Error! </strong> You successfully read this important alert message.
                              <button className="btn-close" onClick={() => dispatch({ type: 'soliddisdark' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="light" dismissible show={state.soliddislight} className="solid">
                              {SVGICON.error}
                              <strong>Error! </strong> You successfully read this message..
                              <button className="btn-close" onClick={() => dispatch({ type: 'soliddislight' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary" dismissible show={state.soliddisprimary} className="solid">	
      {SVGICON.welcome}	
      <strong>Welcome! </strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'soliddisprimary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="secondary" dismissible show={state.soliddissecondary} className="solid">						
      {SVGICON.done}
      <strong>Done! </strong> Your profile photo updated. 
      <button className="btn-close" onClick={()=>dispatch({type:'soliddissecondary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="success" dismissible show={state.soliddissuccess} className="solid">						
      {SVGICON.success}
      <strong>Success!</strong> Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'soliddissuccess'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="info" dismissible show={state.soliddisinfo} className="solid">						
      {SVGICON.info}
      <strong>Info! </strong> You have got 5 new email. 
      <button className="btn-close" onClick={()=>dispatch({type:'soliddisinfo'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="warning" dismissible show={state.soliddiswarning} className="solid">						
      {SVGICON.error}
      <strong>Error! </strong> Something went wrong. Please check. 
      <button className="btn-close" onClick={()=>dispatch({type:'soliddiswarning'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="danger" dismissible show={state.soliddisdanger} className="solid">						
      {SVGICON.error}
      <strong>Error! </strong> Message sending failed.
      <button className="btn-close" onClick={()=>dispatch({type:'soliddisdanger'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="dark" dismissible show={state.soliddisdark} className="solid">						
      {SVGICON.error}
      <strong>Error! </strong> You successfully read this important alert message.
      <button className="btn-close" onClick={()=>dispatch({type:'soliddisdark'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="light" dismissible show={state.soliddislight} className="solid">						
      {SVGICON.error}
      <strong>Error! </strong> You successfully read this message..
      <button className="btn-close" onClick={()=>dispatch({type:'soliddislight'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="alert-link-with" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Alert with Link</Card.Title>
                          <p className="mb-0 subtitle">Bootstrap default style</p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Alert variant="primary" dismissible show={state.linkprimary}>
                              <strong>WOW! Eveything looks OK. </strong>
                              <Link to={"#"}>Please check this one as well. <button className="btn-close" onClick={() => dispatch({ type: 'linkprimary' })}><span><i className="fa-solid fa-xmark" /></span></button></Link>
                            </Alert>
                            <Alert variant="secondary" dismissible show={state.linksecondary}>
                              <strong>WOW! Eveything looks OK. </strong>
                              <Link to={"#"}>Please check this one as well. <button className="btn-close" onClick={() => dispatch({ type: 'linksecondary' })}><span><i className="fa-solid fa-xmark" /></span></button></Link>
                            </Alert>
                            <Alert variant="success" dismissible show={state.linksuccess}>
                              <strong>WOW! Eveything looks OK. </strong>
                              <Link to={"#"}>Please check this one as well. <button className="btn-close" onClick={() => dispatch({ type: 'linksuccess' })}><span><i className="fa-solid fa-xmark" /></span></button></Link>
                            </Alert>
                            <Alert variant="info" dismissible show={state.linkinfo}>
                              <strong>WOW! Eveything looks OK. </strong>
                              <Link to={"#"}>My birthday party <button className="btn-close" onClick={() => dispatch({ type: 'linkinfo' })}><span><i className="fa-solid fa-xmark" /></span></button></Link>
                            </Alert>
                            <Alert variant="warning" dismissible show={state.linkwarning}>
                              <strong>WOW! Eveything looks OK. </strong>
                              <Link to={"#"}>Check this out <button className="btn-close" onClick={() => dispatch({ type: 'linkwarning' })}><span><i className="fa-solid fa-xmark" /></span></button></Link>
                            </Alert>
                            <Alert variant="danger" dismissible show={state.linkdanger}>
                              <strong>WOW! Eveything looks OK. </strong>
                              <Link to={"#"}>Click here for details. <button className="btn-close" onClick={() => dispatch({ type: 'linkdanger' })}><span><i className="fa-solid fa-xmark" /></span></button></Link>
                            </Alert>
                            <Alert variant="dark" dismissible show={state.linkdark}>
                              <strong>WOW! Eveything looks OK. </strong>
                              <Link to={"#"}>Click here for details. <button className="btn-close" onClick={() => dispatch({ type: 'linkdark' })}><span><i className="fa-solid fa-xmark" /></span></button></Link>
                            </Alert>
                            <Alert variant="light" dismissible show={state.linklight}>
                              <strong>WOW! Eveything looks OK. </strong>
                              <Link to={"#"}>Click here for details. <button className="btn-close" onClick={() => dispatch({ type: 'linklight' })}><span><i className="fa-solid fa-xmark" /></span></button></Link>
                            </Alert>

                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary" dismissible show={state.linkprimary}>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"}>Please check this one as well. <button className="btn-close" onClick={()=>dispatch({type:'linkprimary'})}><span><i className="fa-solid fa-xmark"/></span></button></Link>
    </Alert>
    <Alert  variant="secondary" dismissible show={state.linksecondary}>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"}>Please check this one as well. <button className="btn-close" onClick={()=>dispatch({type:'linksecondary'})}><span><i className="fa-solid fa-xmark"/></span></button></Link>
    </Alert>
    <Alert  variant="success" dismissible show={state.linksuccess}>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"}>Please check this one as well. <button className="btn-close" onClick={()=>dispatch({type:'linksuccess'})}><span><i className="fa-solid fa-xmark"/></span></button></Link>
    </Alert>
    <Alert  variant="info" dismissible show={state.linkinfo}>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"}>My birthday party <button className="btn-close" onClick={()=>dispatch({type:'linkinfo'})}><span><i className="fa-solid fa-xmark"/></span></button></Link>
    </Alert>
    <Alert  variant="warning" dismissible show={state.linkwarning}>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"}>Check this out <button className="btn-close" onClick={()=>dispatch({type:'linkwarning'})}><span><i className="fa-solid fa-xmark"/></span></button></Link>
    </Alert>
    <Alert  variant="danger" dismissible show={state.linkdanger}>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"}>Click here for details. <button className="btn-close" onClick={()=>dispatch({type:'linkdanger'})}><span><i className="fa-solid fa-xmark"/></span></button></Link>
    </Alert>
    <Alert  variant="dark" dismissible show={state.linkdark}>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"}>Click here for details. <button className="btn-close" onClick={()=>dispatch({type:'linkdark'})}><span><i className="fa-solid fa-xmark"/></span></button></Link>
    </Alert>
    <Alert  variant="light" dismissible show={state.linklight}>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"}>Click here for details. <button className="btn-close" onClick={()=>dispatch({type:'linklight'})}><span><i className="fa-solid fa-xmark"/></span></button></Link>
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>

                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="alert-link-color" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Alert with Link and solid color</Card.Title>
                          <p className="mb-0 subtitle">
                            add <code>.solid</code> class to change the solid color.
                          </p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Alert variant="primary" dismissible show={state.linkprimary} className='solid'>
                              <strong>WOW!</strong> Eveything looks OK.
                              <Link to={"#"} className='badge badge-sm light badge-primary ms-1'>upgrade</Link>
                              <button className="btn-close" onClick={() => dispatch({ type: 'linkprimary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="secondary" dismissible show={state.linksecondary} className='solid'>
                              <strong>WOW!</strong> Eveything looks OK.
                              <Link to={"#"} className='badge-sm light ms-1 badge badge-secondary'>upgrade</Link>
                              <button className="btn-close" onClick={() => dispatch({ type: 'linksecondary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="success" dismissible show={state.linksuccess} className='solid'>
                              <strong>WOW!</strong> Eveything looks OK.
                              <Link to={"#"} className='badge badge-sm light badge-success ms-1'>upgrade</Link>
                              <button className="btn-close" onClick={() => dispatch({ type: 'linksuccess' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="info" dismissible show={state.linkinfo} className='solid'>
                              <strong>Hey!</strong> Take a quick look. .
                              <Link to={"#"} className='badge-sm light ms-1 badge badge-info'>upgrade</Link>
                              <button className="btn-close" onClick={() => dispatch({ type: 'linkinfo' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="warning" dismissible show={state.linkwarning} className='solid'>
                              <strong>Warning!</strong>Why you did it to me! .
                              <Link to={"#"} className='badge-sm light ms-1 badge badge-warning'>upgrade</Link>
                              <button className="btn-close" onClick={() => dispatch({ type: 'linkwarning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="danger" dismissible show={state.linkdanger} className='solid'>
                              <strong>Error!</strong>Something Went wrong.
                              <Link to={"#"} className='badge-sm light ms-1 badge badge-danger'>upgrade</Link>
                              <button className="btn-close" onClick={() => dispatch({ type: 'linkdanger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="dark" dismissible show={state.linkdark} className='solid'>
                              <strong>Error!</strong>Something Went wrong.
                              <Link to={"#"} className='badge-sm light ms-1 badge badge-dark'>upgrade</Link>
                              <button className="btn-close" onClick={() => dispatch({ type: 'linkdark' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="light" dismissible show={state.linklight} className='solid'>
                              <strong>Error!</strong>Something Went wrong.
                              <Link to={"#"} className='badge-sm light ms-1 badge badge-light'>upgrade</Link>
                              <button className="btn-close" onClick={() => dispatch({ type: 'linklight' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary" dismissible show={state.linkprimary} className='solid'>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"} ></Link>   
      <button className="btn-close" onClick={()=>dispatch({type:'linkprimary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="secondary" dismissible show={state.linksecondary} className='solid'>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"} className='badge-sm light ms-1 badge badge-secondary'>upgrade</Link>   
      <button className="btn-close" onClick={()=>dispatch({type:'linksecondary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="success" dismissible show={state.linksuccess} className='solid'>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"} className='badge-sm light ms-1 badge badge-succes'>upgrade</Link>   
      <button className="btn-close" onClick={()=>dispatch({type:'linksuccess'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="info" dismissible show={state.linkinfo} className='solid'>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"} className='badge-sm light ms-1 badge badge-info'>upgrade</Link>   
      <button className="btn-close" onClick={()=>dispatch({type:'linkinfo'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="warning" dismissible show={state.linkwarning} className='solid'>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"} className='badge-sm light ms-1 badge badge-warning'>upgrade</Link>   
      <button className="btn-close" onClick={()=>dispatch({type:'linkwarning'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="danger" dismissible show={state.linkdanger} className='solid'>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"} className='badge-sm light ms-1 badge badge-danger'>upgrade</Link>   
      <button className="btn-close" onClick={()=>dispatch({type:'linkdanger'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="dark" dismissible show={state.linkdark} className='solid'>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"} className='badge-sm light ms-1 badge badge-dark'>upgrade</Link>   
      <button className="btn-close" onClick={()=>dispatch({type:'linkdark'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="light" dismissible show={state.linklight} className='solid'>               
      <strong>WOW! Eveything looks OK. </strong>
      <Link to={"#"} className='badge-sm light ms-1 badge badge-light'>upgrade</Link>   
      <button className="btn-close" onClick={()=>dispatch({type:'linklight'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>

                <Col lg={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="notifications" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>

                          <Card.Title>Inline Notifications</Card.Title>
                          <p className="mb-0 subtitle">Default inline notification</p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Row>
                              <Col xl={6}>
                                <Alert variant="primary" className="notification">
                                  <p className="notificaiton-title mb-2">
                                    <strong>Success!</strong> Vampires The Romantic Ideology
                                    Behind Them
                                  </p>
                                  <p>
                                    The following article covers a topic that has recently
                                    moved to center stage-at lease it seems that way.
                                  </p>
                                  <Button variant="primary" size="sm">
                                    Confirm
                                  </Button>
                                  <Button variant="link" size="sm">
                                    Cancel
                                  </Button>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="secondary" className="notification">
                                  <p className="notificaiton-title mb-2">
                                    <strong>Success!</strong> Vampires The Romantic Ideology
                                    Behind Them
                                  </p>
                                  <p>
                                    The following article covers a topic that has recently
                                    moved to center stage-at lease it seems that way.
                                  </p>
                                  <Button variant="secondary" size="sm">
                                    Confirm
                                  </Button>
                                  <Button variant="link" size="sm">
                                    Cancel
                                  </Button>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="success" className="notification">
                                  <p className="notificaiton-title mb-2">
                                    <strong>Success!</strong> Vampires The Romantic Ideology
                                    Behind Them
                                  </p>
                                  <p>
                                    The following article covers a topic that has recently
                                    moved to center stage-at lease it seems that way.
                                  </p>
                                  <Button variant="success" size="sm">
                                    Confirm
                                  </Button>
                                  <Button variant="link" size="sm">
                                    Cancel
                                  </Button>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="info" className="notification">
                                  <p className="notificaiton-title mb-2">
                                    <strong>Success!</strong> Vampires The Romantic Ideology
                                    Behind Them
                                  </p>
                                  <p>
                                    The following article covers a topic that has recently
                                    moved to center stage-at lease it seems that way.
                                  </p>
                                  <Button variant="info" size="sm">
                                    Confirm
                                  </Button>
                                  <Button variant="link" size="sm">
                                    Cancel
                                  </Button>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="warning" className="notification">
                                  <p className="notificaiton-title mb-2">
                                    <strong>Success!</strong> Vampires The Romantic Ideology
                                    Behind Them
                                  </p>
                                  <p>
                                    The following article covers a topic that has recently
                                    moved to center stage-at lease it seems that way.
                                  </p>
                                  <Button variant="warning" size="sm">
                                    Confirm
                                  </Button>
                                  <Button variant="link" size="sm">
                                    Cancel
                                  </Button>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="danger" className="notification">
                                  <p className="notificaiton-title mb-2">
                                    <strong>Success!</strong> Vampires The Romantic Ideology
                                    Behind Them
                                  </p>
                                  <p>
                                    The following article covers a topic that has recently
                                    moved to center stage-at lease it seems that way.
                                  </p>
                                  <Button variant="danger" size="sm">
                                    Confirm
                                  </Button>
                                  <Button variant="link" size="sm">
                                    Cancel
                                  </Button>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="dark" className="notification">
                                  <p className="notificaiton-title mb-2">
                                    <strong>Success!</strong> Vampires The Romantic Ideology
                                    Behind Them
                                  </p>
                                  <p>
                                    The following article covers a topic that has recently
                                    moved to center stage-at lease it seems that way.
                                  </p>
                                  <Button variant="dark" size="sm">
                                    Confirm
                                  </Button>
                                  <Button variant="link" size="sm">
                                    Cancel
                                  </Button>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="light" className="notification">
                                  <p className="notificaiton-title mb-2">
                                    <strong>Success!</strong> Vampires The Romantic Ideology
                                    Behind Them
                                  </p>
                                  <p>
                                    The following article covers a topic that has recently
                                    moved to center stage-at lease it seems that way.
                                  </p>
                                  <Button variant="light" size="sm">
                                    Confirm
                                  </Button>
                                  <Button variant="link" size="sm">
                                    Cancel
                                  </Button>
                                </Alert>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Row>                         
      <Col xl={6}>
        <Alert  variant="primary"  className="notification">
            <p className="notificaiton-title mb-2">
                <strong>Success!</strong> Vampires The Romantic Ideology
                Behind Them
            </p>
            <p>
                The following article covers a topic that has recently
              moved to center stage-at lease it seems that way.
            </p>
            <Button variant="primary" size="sm">
                Confirm
            </Button>
            <Button variant="link" size="sm">
                Cancel
            </Button>
        </Alert>
      </Col>
      <Col xl={6}>
          <Alert  variant="secondary"  className="notification">
              <p className="notificaiton-title mb-2">
                  <strong>Success!</strong> Vampires The Romantic Ideology
                  Behind Them
              </p>
              <p>
                  The following article covers a topic that has recently
                moved to center stage-at lease it seems that way.
              </p>
              <Button variant="secondary" size="sm">
                  Confirm
              </Button>
              <Button variant="link" size="sm">
                  Cancel
              </Button>
          </Alert>
        </Col>
        <Col xl={6}>
          <Alert  variant="success"  className="notification">
              <p className="notificaiton-title mb-2">
                  <strong>Success!</strong> Vampires The Romantic Ideology
                  Behind Them
              </p>
              <p>
                  The following article covers a topic that has recently
                moved to center stage-at lease it seems that way.
              </p>
              <Button variant="success" size="sm">
                  Confirm
              </Button>
              <Button variant="link" size="sm">
                  Cancel
              </Button>
          </Alert>
        </Col>
        <Col xl={6}>
          <Alert  variant="info"  className="notification">
              <p className="notificaiton-title mb-2">
                  <strong>Success!</strong> Vampires The Romantic Ideology
                  Behind Them
              </p>
              <p>
                  The following article covers a topic that has recently
                moved to center stage-at lease it seems that way.
              </p>
              <Button variant="info" size="sm">
                  Confirm
              </Button>
              <Button variant="link" size="sm">
                  Cancel
              </Button>
          </Alert>
        </Col>
        <Col xl={6}>
          <Alert  variant="warning"  className="notification">
              <p className="notificaiton-title mb-2">
                  <strong>Success!</strong> Vampires The Romantic Ideology
                  Behind Them
              </p>
              <p>
                  The following article covers a topic that has recently
                moved to center stage-at lease it seems that way.
              </p>
              <Button variant="warning" size="sm">
                  Confirm
              </Button>
              <Button variant="link" size="sm">
                  Cancel
              </Button>
          </Alert>
        </Col>
        <Col xl={6}>
          <Alert  variant="danger"  className="notification">
              <p className="notificaiton-title mb-2">
                  <strong>Success!</strong> Vampires The Romantic Ideology
                  Behind Them
              </p>
              <p>
                  The following article covers a topic that has recently
                moved to center stage-at lease it seems that way.
              </p>
              <Button variant="danger" size="sm">
                  Confirm
              </Button>
              <Button variant="link" size="sm">
                  Cancel
              </Button>
          </Alert>
        </Col>
        <Col xl={6}>
          <Alert  variant="dark"  className="notification">
              <p className="notificaiton-title mb-2">
                  <strong>Success!</strong> Vampires The Romantic Ideology
                  Behind Them
              </p>
              <p>
                  The following article covers a topic that has recently
                moved to center stage-at lease it seems that way.
              </p>
              <Button variant="dark" size="sm">
                  Confirm
              </Button>
              <Button variant="link" size="sm">
                  Cancel
              </Button>
          </Alert>
        </Col>
        <Col xl={6}>
          <Alert  variant="light"  className="notification">
              <p className="notificaiton-title mb-2">
                  <strong>Success!</strong> Vampires The Romantic Ideology
                  Behind Them
              </p>
              <p>
                  The following article covers a topic that has recently
                moved to center stage-at lease it seems that way.
              </p>
              <Button variant="light" size="sm">
                  Confirm
              </Button>
              <Button variant="link" size="sm">
                  Cancel
              </Button>
          </Alert>
        </Col>
    </Row>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="alert-icon-left" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Alert Icon Left</Card.Title>
                          <p className="mb-0 subtitle">
                            add <code>.alert-right-icon</code> to change the style
                          </p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Alert variant="primary" dismissible show={state.iconprimary} className="solid alert-right-icon">
                              <span><i className='mdi mdi-account-search' /></span>{" "}
                              Welcome! {" "} Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'iconprimary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="secondary" dismissible show={state.iconsecondary} className="solid alert-right-icon">
                              <span><i className='icon icon-bell-53' /></span>{" "}
                              Done! {" "} Your profile photo updated.
                              <button className="btn-close" onClick={() => dispatch({ type: 'iconsecondary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="success" dismissible show={state.iconsuccess} className="solid alert-right-icon">
                              <span><i className='mdi mdi-check' /></span>{" "}
                              Success!{" "} Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'iconsuccess' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="info" dismissible show={state.iconinfo} className="solid alert-right-icon">
                              <span><i className='mdi mdi-email' /></span>{" "}
                              Info! {" "} You have got 5 new email.
                              <button className="btn-close" onClick={() => dispatch({ type: 'iconinfo' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="warning" dismissible show={state.iconwarning} className="solid alert-right-icon">
                              <span><i className='mdi mdi-alert' /></span>{" "}
                              Error! {" "} Something went wrong. Please check.
                              <button className="btn-close" onClick={() => dispatch({ type: 'iconwarning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="danger" dismissible show={state.icondanger} className="solid alert-right-icon">
                              <span><i className='mdi mdi-help' /></span>{" "}
                              Error! {" "} Message sending failed.
                              <button className="btn-close" onClick={() => dispatch({ type: 'icondanger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="dark" dismissible show={state.icondark} className="solid alert-right-icon">
                              <span><i className='mdi mdi-settings' /></span>{" "}
                              Error! {" "} You successfully read this important alert message.
                              <button className="btn-close" onClick={() => dispatch({ type: 'icondark' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="light" dismissible show={state.iconlight} className="solid alert-right-icon">
                              <span><i className='mdi mdi-cogs' /></span>{" "}
                              Error! {" "} You successfully read this message..
                              <button className="btn-close" onClick={() => dispatch({ type: 'iconlight' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary" dismissible show={state.iconprimary} className="solid alert-right-icon">						
      <span><i className='mdi mdi-account-search'/></span>{" "}
        Welcome! {" "} Message has been sent. 
      <button className="btn-close" onClick={()=>dispatch({type:'iconprimary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="secondary" dismissible show={state.iconsecondary} className="solid alert-right-icon">						
      <span><i className='icon icon-bell-53'/></span>{" "}
      Done! {" "} Your profile photo updated. 
    <button className="btn-close" onClick={()=>dispatch({type:'iconsecondary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="success" dismissible show={state.iconsuccess} className="solid alert-right-icon">						
    <span><i className='mdi mdi-check'/></span>{" "}
      Success!{" "} Message has been sent. 
    <button className="btn-close" onClick={()=>dispatch({type:'iconsuccess'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="info" dismissible show={state.iconinfo} className="solid alert-right-icon">						
    <span><i className='mdi mdi-email'/></span>{" "}
      Info! {" "} You have got 5 new email. 
    <button className="btn-close" onClick={()=>dispatch({type:'iconinfo'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="warning" dismissible show={state.iconwarning} className="solid alert-right-icon">						
      <span><i className='mdi mdi-alert'/></span>{" "}
        Error! {" "} Something went wrong. Please check. 
      <button className="btn-close" onClick={()=>dispatch({type:'iconwarning'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="danger" dismissible show={state.icondanger} className="solid alert-right-icon">						
      <span><i className='mdi mdi-help'/></span>{" "}
        Error! {" "} Message sending failed.
      <button className="btn-close" onClick={()=>dispatch({type:'icondanger'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="dark" dismissible show={state.icondark} className="solid alert-right-icon">						
      <span><i className='mdi mdi-settings'/></span>{" "}
        Error! {" "} You successfully read this important alert message.
      <button className="btn-close" onClick={()=>dispatch({type:'icondark'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="light" dismissible show={state.iconlight} className="solid alert-right-icon">						
      <span><i className='mdi mdi-cogs'/></span>{" "} 
        Error! {" "} You successfully read this message..
      <button className="btn-close" onClick={()=>dispatch({type:'iconlight'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="alert-outline" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Alert outline</Card.Title>
                          <p className="mb-0 subtitle">
                            add <code>.alert-outline-primary,secondary,success...</code> to
                            change the style
                          </p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Alert variant="primary" dismissible show={state.outlineprimary} className="alert-outline-primary">
                              Welcome! {" "} Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'outlineprimary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="secondary" dismissible show={state.outlinesecondary} className="alert-outline-secondary">
                              Done! {" "} Your profile photo updated.
                              <button className="btn-close" onClick={() => dispatch({ type: 'outlinesecondary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="success" dismissible show={state.outlinesuccess} className="alert-outline-success">
                              Success!{" "} Message has been sent.
                              <button className="btn-close" onClick={() => dispatch({ type: 'outlinesuccess' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="info" dismissible show={state.outlineinfor} className="alert-outline-info">
                              Info! {" "} You have got 5 new email.
                              <button className="btn-close" onClick={() => dispatch({ type: 'outlineinfor' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="warning" dismissible show={state.outlinewarning} className="alert-outline-warning">
                              Error! {" "} Something went wrong. Please check.
                              <button className="btn-close" onClick={() => dispatch({ type: 'outlinewarning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="danger" dismissible show={state.outlinedanger} className="alert-outline-danger">
                              Error! {" "} Message sending failed.
                              <button className="btn-close" onClick={() => dispatch({ type: 'outlinedanger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="dark" dismissible show={state.outlinedark} className="alert-outline-dark">
                              Error! {" "} You successfully read this important alert message.
                              <button className="btn-close" onClick={() => dispatch({ type: 'outlinedark' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                            <Alert variant="light" dismissible show={state.outlinelight} className="alert-outline-light">
                              Error! {" "} You successfully read this message..
                              <button className="btn-close" onClick={() => dispatch({ type: 'outlinelight' })}><span><i className="fa-solid fa-xmark" /></span></button>
                            </Alert>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Alert  variant="primary" dismissible show={state.outlineprimary} className="alert-outline-primary">						
      Welcome! {" "} Message has been sent. 
    <button className="btn-close" onClick={()=>dispatch({type:'outlineprimary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="secondary" dismissible show={state.outlinesecondary} className="alert-outline-secondary">						
    Done! {" "} Your profile photo updated.  
    <button className="btn-close" onClick={()=>dispatch({type:'outlinesecondary'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="success" dismissible show={state.outlinesuccess} className="alert-outline-success">						
      Success!{" "} Message has been sent.  
    <button className="btn-close" onClick={()=>dispatch({type:'outlinesuccess'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="info" dismissible show={state.outlineinfor} className="alert-outline-info">						
    Info! {" "} You have got 5 new email. 
    <button className="btn-close" onClick={()=>dispatch({type:'outlineinfor'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="warning" dismissible show={state.outlinewarning} className="alert-outline-warning">						
    Error! {" "} Something went wrong. Please check. 
    <button className="btn-close" onClick={()=>dispatch({type:'outlinewarning'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="danger" dismissible show={state.outlinedanger} className="alert-outline-danger">						
      Error! {" "} Message sending failed. 
    <button className="btn-close" onClick={()=>dispatch({type:'outlinedanger'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="dark" dismissible show={state.outlinedark} className="alert-outline-dark">						
      Error! {" "} You successfully read this important alert message. 
    <button className="btn-close" onClick={()=>dispatch({type:'outlinedark'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    <Alert  variant="light" dismissible show={state.outlinelight} className="alert-outline-light">						
    Error! {" "} You successfully read this message..
    <button className="btn-close" onClick={()=>dispatch({type:'outlinelight'})}><span><i className="fa-solid fa-xmark"/></span></button>
    </Alert>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="alert-social" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Alert Social</Card.Title>
                          <p className="mb-0 subtitle">
                            add{" "}
                            <code>
                              .alert-social .facebook,.twitter,.linkedin,.google-plus
                            </code>{" "}
                            to change the style
                          </p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Row>
                              <Col xl={6}>
                                <Alert variant="warning" dismissible show={state.socialefacebook} className="facebook alert-social">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'socialefacebook' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="alert-social-icon">
                                      <span><i className="mdi mdi-facebook" /></span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 text-white">Facebook</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="warning" dismissible show={state.socialtwitter} className="twitter alert-social">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'socialtwitter' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="alert-social-icon">
                                      <span><i className="mdi mdi-twitter" /></span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 text-white">Twitter</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="warning" dismissible show={state.sociallinkdin} className="linkedin  alert-social">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'sociallinkdin' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="alert-social-icon">
                                      <span><i className="mdi mdi-linkedin" /></span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 text-white">Linkedin</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="warning" dismissible show={state.socialgoogle} className="google-plus alert-social">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'socialgoogle' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="alert-social-icon">
                                      <span><i className="mdi mdi-google-plus" /></span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 text-white">Google Plus</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Row>
      <Col xl={6}>
        <Alert  variant="warning" dismissible show={state.socialefacebook} className="facebook alert-social">
            <button className="btn-close" onClick={()=>dispatch({type:'socialefacebook'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="alert-social-icon">
                    <span><i className="mdi mdi-facebook" /></span>
                  </div>
                  <div className="media-body">  
                    <h5 className="mt-1 mb-2 text-white">Facebook</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
              </div>
        </Alert>
      </Col>
      <Col xl={6}>
        <Alert  variant="warning" dismissible show={state.socialtwitter} className="twitter alert-social">
            <button className="btn-close" onClick={()=>dispatch({type:'socialtwitter'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="alert-social-icon">
                    <span><i className="mdi mdi-twitter" /></span>
                  </div>
                  <div className="media-body">  
                    <h5 className="mt-1 mb-2 text-white">Twitter</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
              </div>
        </Alert>
      </Col>
      <Col xl={6}>
        <Alert  variant="warning" dismissible show={state.sociallinkdin} className="linkedin  alert-social">
            <button className="btn-close" onClick={()=>dispatch({type:'sociallinkdin'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="alert-social-icon">
                    <span><i className="mdi mdi-linkedin" /></span>
                  </div>
                  <div className="media-body">  
                    <h5 className="mt-1 mb-2 text-white">Linkedin</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
              </div>
        </Alert>
      </Col>
      <Col xl={6}>
        <Alert  variant="warning" dismissible show={state.socialgoogle} className="google-plus alert-social">
            <button className="btn-close" onClick={()=>dispatch({type:'socialgoogle'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="alert-social-icon">
                    <span><i className="mdi mdi-google-plus" /></span>
                  </div>
                  <div className="media-body">  
                    <h5 className="mt-1 mb-2 text-white">Google Plus</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
              </div>
        </Alert>
      </Col>
    </Row>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="message-alert" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Message Alert</Card.Title>
                          <Card.Text className="subtitle mb-0">
                            Bootstrap default style
                          </Card.Text>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Row>

                              <Col xl={6}>
                                <Alert variant="primary" dismissible show={state.messageprimary} className="">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'messageprimary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-1">Notifications</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="secondary" dismissible show={state.messagesecondary} className="">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'messagesecondary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-1">Notifications</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="success" dismissible show={state.messagesuccess} className="">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'messagesuccess' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-1">Notifications</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="info" dismissible show={state.messageinfo} className="">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'messageinfo' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-1">Notifications</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="warning" dismissible show={state.messagewarning} className="">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'messagewarning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-1">Notifications</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="danger" dismissible show={state.messagedanger} className="">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'messagedanger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-1">Notifications</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="dark" dismissible show={state.messagedark} className="">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'messagedark' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-1">Notifications</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="light" dismissible show={state.messagelight} className="">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'messagelight' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-1">Notifications</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Row>                                
      <Col xl={6}>
          <Alert  variant="primary" dismissible show={state.messageprimary} className="">
              <button className="btn-close" onClick={()=>dispatch({type:'messageprimary'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="media-body">
                      <h5 className="mt-1 mb-1">Notifications</h5>
                      <p className="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. tempus
                        viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                      </p>
                  </div>
              </div>
          </Alert>
        </Col>  
        <Col xl={6}>    
          <Alert  variant="secondary" dismissible show={state.messagesecondary} className="">
              <button className="btn-close" onClick={()=>dispatch({type:'messagesecondary'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="media-body">
                      <h5 className="mt-1 mb-1">Notifications</h5>
                      <p className="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. tempus
                        viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                      </p>
                  </div>
              </div>
          </Alert>
        </Col>  
        <Col xl={6}>  
          <Alert  variant="success" dismissible show={state.messagesuccess} className="">
              <button className="btn-close" onClick={()=>dispatch({type:'messagesuccess'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="media-body">
                      <h5 className="mt-1 mb-1">Notifications</h5>
                      <p className="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. tempus
                        viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                      </p>
                  </div>
              </div>
          </Alert>
        </Col>  
        <Col xl={6}>
          <Alert  variant="info" dismissible show={state.messageinfo} className="">
              <button className="btn-close" onClick={()=>dispatch({type:'messageinfo'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="media-body">
                      <h5 className="mt-1 mb-1">Notifications</h5>
                      <p className="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. tempus
                        viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                      </p>
                  </div>
              </div>
          </Alert>
        </Col>  
        <Col xl={6}>
          <Alert  variant="warning" dismissible show={state.messagewarning} className="">
              <button className="btn-close" onClick={()=>dispatch({type:'messagewarning'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="media-body">
                      <h5 className="mt-1 mb-1">Notifications</h5>
                      <p className="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. tempus
                        viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                      </p>
                  </div>
              </div>
          </Alert>
        </Col>  
        <Col xl={6}>
          <Alert  variant="danger" dismissible show={state.messagedanger} className="">
              <button className="btn-close" onClick={()=>dispatch({type:'messagedanger'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="media-body">
                      <h5 className="mt-1 mb-1">Notifications</h5>
                      <p className="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. tempus
                        viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                      </p>
                  </div>
              </div>
          </Alert>
        </Col>  
        <Col xl={6}>
          <Alert  variant="dark" dismissible show={state.messagedark} className="">
              <button className="btn-close" onClick={()=>dispatch({type:'messagedark'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="media-body">
                      <h5 className="mt-1 mb-1">Notifications</h5>
                      <p className="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. tempus
                        viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                      </p>
                  </div>
              </div>
          </Alert>
        </Col>  
        <Col xl={6}>
          <Alert  variant="light" dismissible show={state.messagelight} className="">
              <button className="btn-close" onClick={()=>dispatch({type:'messagelight'})}><span><i className="fa-solid fa-xmark"/></span></button>
              <div className='media'>
                  <div className="media-body">
                      <h5 className="mt-1 mb-1">Notifications</h5>
                      <p className="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. tempus
                        viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                      </p>
                  </div>
              </div>
          </Alert>
      </Col> 
    </Row>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="message-alert-color" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>

                          <Card.Title>Message Alert with Solid color</Card.Title>
                          <p className="mb-0 subtitle">
                            add <code>.solid</code> to change the style
                          </p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Row>
                              <Col xl={6}>
                                <Alert variant="primary" dismissible show={state.solidmessageprimary} className="solid">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'solidmessageprimary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                                      <p className="mb-0 text-white">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="secondary" dismissible show={state.solidmessagesecondary} className="solid">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'solidmessagesecondary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                                      <p className="mb-0 text-white">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="success" dismissible show={state.solidmessagesuccess} className="solid">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'solidmessagesuccess' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                                      <p className="mb-0 text-white">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="info" dismissible show={state.solidmessageinfo} className="solid">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'solidmessageinfo' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                                      <p className="mb-0 text-white">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="warning" dismissible show={state.solidmessagewarning} className="solid">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'solidmessagewarning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                                      <p className="mb-0 text-white">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="danger" dismissible show={state.solidmessagedanger} className="solid">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'solidmessagedanger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                                      <p className="mb-0 text-white">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="dark" dismissible show={state.solidmessagedark} className="solid">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'solidmessagedark' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                                      <p className="mb-0 text-white">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="light" dismissible show={state.solidmessagelight} className="solid">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'solidmessagelight' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2 ">Notifications</h5>
                                      <p className="mb-0">
                                        Cras sit amet nibh libero, in gravida nulla. tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. Donec lacinia congue felis in
                                        faucibus.
                                      </p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Row>
      <Col xl={6}>
        <Alert  variant="primary" dismissible show={state.solidmessageprimary} className="solid">
            <button className="btn-close" onClick={()=>dispatch({type:'solidmessageprimary'})}><span><i className="fa-solid fa-xmark"/></span></button>
            <div className='media'>
                <div className="media-body">
                    <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
            </div>
        </Alert>
      </Col>  
      <Col xl={6}>    
        <Alert  variant="secondary" dismissible show={state.solidmessagesecondary} className="solid">
            <button className="btn-close" onClick={()=>dispatch({type:'solidmessagesecondary'})}><span><i className="fa-solid fa-xmark"/></span></button>
            <div className='media'>
                <div className="media-body">
                    <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
            </div>
        </Alert>
      </Col>  
      <Col xl={6}>  
        <Alert  variant="success" dismissible show={state.solidmessagesuccess} className="solid">
            <button className="btn-close" onClick={()=>dispatch({type:'solidmessagesuccess'})}><span><i className="fa-solid fa-xmark"/></span></button>
            <div className='media'>
                <div className="media-body">
                    <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
            </div>
        </Alert>
      </Col>  
      <Col xl={6}>
        <Alert  variant="info" dismissible show={state.solidmessageinfo} className="solid">
            <button className="btn-close" onClick={()=>dispatch({type:'solidmessageinfo'})}><span><i className="fa-solid fa-xmark"/></span></button>
            <div className='media'>
                <div className="media-body">
                    <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
            </div>
        </Alert>
      </Col>  
      <Col xl={6}>
        <Alert  variant="warning" dismissible show={state.solidmessagewarning} className="solid">
            <button className="btn-close" onClick={()=>dispatch({type:'solidmessagewarning'})}><span><i className="fa-solid fa-xmark"/></span></button>
            <div className='media'>
                <div className="media-body">
                    <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
            </div>
        </Alert>
      </Col>  
      <Col xl={6}>
        <Alert  variant="danger" dismissible show={state.solidmessagedanger} className="solid">
            <button className="btn-close" onClick={()=>dispatch({type:'solidmessagedanger'})}><span><i className="fa-solid fa-xmark"/></span></button>
            <div className='media'>
                <div className="media-body">
                    <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
            </div>
        </Alert>
      </Col>  
      <Col xl={6}>
        <Alert  variant="dark" dismissible show={state.solidmessagedark} className="solid">
            <button className="btn-close" onClick={()=>dispatch({type:'solidmessagedark'})}><span><i className="fa-solid fa-xmark"/></span></button>
            <div className='media'>
                <div className="media-body">
                    <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
            </div>
        </Alert>
      </Col>  
      <Col xl={6}>
        <Alert  variant="light" dismissible show={state.solidmessagelight} className="solid">
            <button className="btn-close" onClick={()=>dispatch({type:'solidmessagelight'})}><span><i className="fa-solid fa-xmark"/></span></button>
            <div className='media'>
                <div className="media-body">
                    <h5 className="mt-1 mb-2 text-white">Notifications</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. tempus
                      viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus.
                    </p>
                </div>
            </div>
        </Alert>
      </Col>
      </Row>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col xl={12}>
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="alert-icon-big" className="dz-card">
                      <Card.Header className="d-flex justify-content-between flex-wrap border-0">
                        <div>
                          <Card.Title>Alert left icon big </Card.Title>
                          <p className="mb-0 subtitle">
                            add <code>.left-icon-big</code> to change the style
                          </p>
                        </div>
                        <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                          <Nav.Item as="li" className="nav-item" role="presentation">
                            <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item" >
                            <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Tab.Content>
                        <Tab.Pane eventKey="Preview">
                          <Card.Body>
                            <Row>
                              <Col xl={6}>
                                <Alert variant="primary" dismissible show={state.iconbigprimary} className="left-icon-big" >
                                  <button className="btn-close" onClick={() => dispatch({ type: 'iconbigprimary' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="alert-left-icon-big">
                                      <span>
                                        <i className="mdi mdi-email-alert" />
                                      </span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2">Welcome to your account, Dear user!</h5>
                                      <p className="mb-0">Please confirm your email address: email@example.com</p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="warning" dismissible show={state.iconbigwarning} className="left-icon-big" id="AlertLeftIcon">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'iconbigwarning' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="alert-left-icon-big">
                                      <span>
                                        <i className="mdi mdi-help-circle-outline" />
                                      </span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2">Pending!</h5>
                                      <p className="mb-0">You message sending failed.</p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="success" dismissible show={state.iconbigsuccess} className="left-icon-big" id="AlertLeftIcon">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'iconbigsuccess' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="alert-left-icon-big">
                                      <span>
                                        <i className="mdi mdi-check-circle-outline" />
                                      </span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2">Congratulations!</h5>
                                      <p className="mb-0">You have successfully created a account.</p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                              <Col xl={6}>
                                <Alert variant="danger" dismissible show={state.iconbigdanger} className="left-icon-big" id="AlertLeftIcon">
                                  <button className="btn-close" onClick={() => dispatch({ type: 'iconbigdanger' })}><span><i className="fa-solid fa-xmark" /></span></button>
                                  <div className='media'>
                                    <div className="alert-left-icon-big">
                                      <span>
                                        <i className="mdi mdi-alert" />
                                      </span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="mt-1 mb-2">Loading failed!</h5>
                                      <p className="mb-0">Again upload your server</p>
                                    </div>
                                  </div>
                                </Alert>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
      <Row>
        <Col xl={6}>
          <Alert  variant="primary" dismissible show={state.iconbigprimary} className="left-icon-big">
              <button className="btn-close" onClick={()=>dispatch({type:'iconbigprimary'})}><span><i className="fa-solid fa-xmark"/></span></button>
                <div className='media'>
                    <div variant="" className="alert-left-icon-big">
                        <span>
                          <i className="mdi mdi-email-alert"/>
                        </span>
                    </div>
                    <div className="media-body">
                        <h6 className="mt-1 mb-2">Welcome to your account, Dear user!</h6>
                        <p className="mb-0">Please confirm your email address: email@example.com</p>
                    </div>
                </div>
          </Alert>
        </Col>
        <Col xl={6}>
          <Alert  variant="warning" dismissible show={state.iconbigwarning} className="left-icon-big">
              <button className="btn-close" onClick={()=>dispatch({type:'iconbigwarning'})}><span><i className="fa-solid fa-xmark"/></span></button>
                <div className='media'>
                    <div variant="" className="alert-left-icon-big">
                        <span>
                          <i className="mdi mdi-help-circle-outline"/>
                        </span>
                    </div>
                    <div className="media-body">
                        <h6 className="mt-1 mb-2">Pending!</h6>
                        <p className="mb-0">You message sending failed.</p>
                    </div>
                </div>
          </Alert>
        </Col>
        <Col xl={6}>
          <Alert  variant="success" dismissible show={state.iconbigsuccess} className="left-icon-big">
              <button className="btn-close" onClick={()=>dispatch({type:'iconbigsuccess'})}><span><i className="fa-solid fa-xmark"/></span></button>
                <div className='media'>
                    <div variant="" className="alert-left-icon-big">
                        <span>
                          <i className="mdi mdi-check-circle-outline"/>
                        </span>
                    </div>
                    <div className="media-body">
                        <h6 className="mt-1 mb-2">Congratulations!</h6>
                        <p className="mb-0">You have successfully created a account.</p>
                    </div>
                </div>
          </Alert>
        </Col>
        <Col xl={6}>
          <Alert  variant="danger" dismissible show={state.iconbigdanger} className="left-icon-big">
              <button className="btn-close" onClick={()=>dispatch({type:'iconbigdanger'})}><span><i className="fa-solid fa-xmark"/></span></button>
                <div className='media'>
                    <div variant="" className="alert-left-icon-big">
                        <span>
                          <i className="mdi mdi-alert"/>
                        </span>
                    </div>
                    <div className="media-body">
                        <h6 className="mt-1 mb-2">Loading failed!</h6>
                        <p className="mb-0">Again upload your server</p>
                    </div>
                </div>
          </Alert>
        </Col>
      </Row>
      `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
              </Row>
            </div>
          </div>
          <div className="demo-right ">
            <AlertList />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UiAlert;

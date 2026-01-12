import { lazy } from "react";
import { Row, Col, Card } from "react-bootstrap";

const ApexBar2 = lazy(() => import('../../component/charts/apexcharts/Bar2'));
const ApexBar3 = lazy(() => import('../../component/charts/apexcharts/Bar3'));
const ApexRedialBar = lazy(() => import('../../component/charts/apexcharts/RadialBar'));
const ApexLine = lazy(() => import('../../component/charts/apexcharts/Line5'));
const ApexLine3 = lazy(() => import("../../component/charts/apexcharts/Line3"));
const ApexLine4 = lazy(() => import("../../component/charts/apexcharts/Line4"));
const ApexPie = lazy(() => import("../../component/charts/apexcharts/Pie4"));
const ApexPie5 = lazy(() => import("../../component/charts/apexcharts/Pie5"));

function ApexChart() {
  return (
    <div className="container">
      <Row>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Bar Chart</h4>
            </Card.Header>
            <Card.Body>
              <ApexBar2 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Bar Chart</h4>
            </Card.Header>
            <Card.Body>
              <ApexBar3 />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Line</h4>
            </Card.Header>
            <Card.Body>
              <ApexLine />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Line</h4>
            </Card.Header>
            <Card.Body>
              <ApexLine3 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Line</h4>
            </Card.Header>
            <Card.Body>
              <ApexLine4 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Pie</h4>
            </Card.Header>
            <Card.Body className="mt-5">
              <ApexPie />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Pie</h4>
            </Card.Header>
            <Card.Body>
              <ApexPie5 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Redial Bar</h4>
            </Card.Header>
            <Card.Body>
              <ApexRedialBar />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default ApexChart;
import { lazy } from "react";
import { Row, Col, Card } from "react-bootstrap";

const BarChart1 = lazy(() => import('../../component/charts/chartjs/bar1'));
const BarChart5 = lazy(() => import('../../component/charts/chartjs/bar5'));
const BarChart6 = lazy(() => import('../../component/charts/chartjs/bar6'));
const LineChart1 = lazy(() => import('../../component/charts/chartjs/line1'));
const DualLine = lazy(() => import('../../component/charts/chartjs/dualLine'));
const BasicArea = lazy(() => import('../../component/charts/chartjs/basicArea'));
const GradientArea = lazy(() => import('../../component/charts/chartjs/dualArea'));
const DualArea = lazy(() => import('../../component/charts/chartjs/gradinetArea'));
const PolarChart = lazy(() => import('../../component/charts/chartjs/polar'));
const ChartPie = lazy(() => import('../../component/charts/chartjs/pie'));

function ChartChartjs() {
  return (
    <>
      <div className="container">
        <Row>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Bar chart</h4>
              </Card.Header>
              <Card.Body>
                <BarChart1 />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Bar chart</h4>
              </Card.Header>
              <Card.Body>
                <BarChart5 />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Bar chart</h4>
              </Card.Header>
              <Card.Body>
                <BarChart6 />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Line chart</h4>
              </Card.Header>
              <Card.Body>
                <LineChart1 />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Dual Line chart</h4>
              </Card.Header>
              <Card.Body>
                <DualLine />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Basic Area Chart</h4>
              </Card.Header>
              <Card.Body>
                <BasicArea />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Gradinet Area Chart</h4>
              </Card.Header>
              <Card.Body>
                <GradientArea />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Dual Area Chart</h4>
              </Card.Header>
              <Card.Body>
                <DualArea />
              </Card.Body>
            </Card>
          </Col>

          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Pie</h4>
              </Card.Header>
              <Card.Body>
                <ChartPie />
              </Card.Body>
            </Card>
          </Col>

          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Polar Chart</h4>
              </Card.Header>
              <Card.Body>
                <PolarChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ChartChartjs;
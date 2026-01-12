import { Row, Col, Card } from "react-bootstrap";
import BarChartNoPadding from "../../component/charts/rechart/BarChartNoPadding";
import NagetivePositive from "../../component/charts/rechart/PositiveNagative2";
import TinyLineChart from "../../component/charts/rechart/TinyLineChart";
import LegendEffectOpacity from "../../component/charts/rechart/LegendEffectOpacity";

function RechartJs() {
  return (
    <>
      <div className="container">
        <Row>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Bar</h4>
              </Card.Header>
              <Card.Body>
                <BarChartNoPadding />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Bar</h4>
              </Card.Header>
              <Card.Body>
                <NagetivePositive />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Line</h4>
              </Card.Header>
              <Card.Body>
                <TinyLineChart />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Line</h4>
              </Card.Header>
              <Card.Body>
                <LegendEffectOpacity />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default RechartJs;

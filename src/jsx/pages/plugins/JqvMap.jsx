import MapChart from '../../component/plugins/Jqvmap/MapChart';
import WorldMap from '../../component/plugins/Jqvmap/WorldMap';

function JqvMap() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">World Map</h4>
            </div>
            <div className="card-body mb-2" style={{ height: "100%" }}>
              <div id="world-map" style={{ height: "100%" }}>
                <WorldMap />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">USA</h4>
            </div>
            <div className="card-body mb-2" style={{ height: "100%" }}>
              <div id="usa" style={{ height: "100%" }}>
                <MapChart />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default JqvMap;

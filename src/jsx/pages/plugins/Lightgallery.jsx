import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { lightGallery } from '../../constant/alldata';

function Lightgallery() {
	const onInit = () => {
	};

	return (
		<>
			<div className='container'>
				<div className="row">
					<div className="col-lg-12">
						<div className="card">
							<div className="card-header">
								<h4 className="card-title">Light Gallery</h4>
							</div>

							<div className="card-body pb-1" id="lightgallery">
								<LightGallery
									onInit={onInit}
									speed={500}
									plugins={[lgThumbnail, lgZoom]}
									elementClassNames="row"
								>
									{lightGallery.map((item, index) => (
										<div data-src={item.thumb} className="col-lg-3 col-md-6 mb-4" key={index}>
											<img src={item.thumb} style={{ width: "100%" }} alt="gallery" className='cursor-pointer' />
										</div>
									))}
								</LightGallery>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)

}
export default Lightgallery;
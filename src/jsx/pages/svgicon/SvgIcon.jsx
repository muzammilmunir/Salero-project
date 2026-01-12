import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { svgBlogData } from '../../constant/alldata';

const initialState = false;
const reducer = (state, action) => {
    switch (action.type) {
        case 'imageModal':
            return { ...state, imageModal: !state.imageModal, content: action.content }
        case 'svgModal':
            return { ...state, svgModal: !state.svgModal, content: action.content, title: action.title }
        default:
            return state
    }
}

function SvgIcon() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="container">
            <div className="card-body svg-area card">
                <div className="card-header">
                    <h3 className="h-title">Salero Icons</h3>
                </div>
                <div className="row">
                    {svgBlogData.map((item, ind) => (
                        <div className="col-xl-2 col-lg-3 col-xxl-3 col-md-4 col-sm-6 col-12" key={ind}>
                            <div className="svg-icons-ov">
                                <div className="svg-icons-prev">
                                    <div dangerouslySetInnerHTML={{ __html: item.svgtype }} />
                                </div>
                                <div className="svg-classname">{item.Iconname}</div>
                                <div className="svg-icon-popup">
                                    <Link to={"#"} onClick={() => dispatch({ type: 'imageModal', content: item.Iconname })} className="btn btn-sm btn-brand"><i className="fa-solid fa-image"></i></Link>
                                    <Link to={"#"} onClick={() => dispatch({ type: 'svgModal', content: item.Iconname, title: item.svgtype })} className="btn btn-sm btn-brand"><i className="fa fa-code"></i></Link>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
                <Modal className="modal fade" show={state.imageModal} onHide={() => dispatch({ type: 'imageModal' })} centered>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="svg_img_label_Brassieresvg">{state.content}</h5>
                            <button type="button" className="btn-close" onClick={() => dispatch({ type: 'imageModal' })}></button>
                        </div>
                        <div className="modal-body">
                            <pre>
                                {`import MyImage from "../images/iconly/Bulk/${state.content}";
export default function Imageblog() {   
  return  
    <div>
       <img src={MyImage} alt="Example" />   
    </div>
}`}
                                ;
                            </pre>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => dispatch({ type: 'imageModal' })}>Close</button>
                        </div>
                    </div>

                </Modal>
                <Modal className="modal fade" show={state.svgModal} onHide={() => dispatch({ type: 'svgModal' })} centered >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="svg_inline_label_Brassieresvg">{state.content}</h5>
                            <button type="button" className="btn-close" onClick={() => dispatch({ type: 'svgModal' })}>
                            </button>
                        </div>
                        <div className="modal-body">                            
                            <pre>
                                {state.title}
                            </pre>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => dispatch({ type: 'svgModal' })}>Close</button>
                        </div>
                    </div>

                </Modal>
            </div>

        </div>

    );
};

export default SvgIcon;

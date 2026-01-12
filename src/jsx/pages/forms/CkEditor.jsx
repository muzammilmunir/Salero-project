import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'ckeditor5/ckeditor5.css';
// import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

function CkEditor() {


    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-xl-12 col-xxl-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Form CkEditor</h4>
                            </div>
                            <div className="card-body custom-ekeditor">

                                <CKEditor
                                    editor={ClassicEditor}

                                    config={{
                                        licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3Mzc2NzY3OTksImp0aSI6ImZlZjNlMTE2LWQwODYtNDNmNC1iYmM4LWRlOTJhNGQ4ZGUwMiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImU1YzhlNzA4In0.26npGvlr6hcNcq6x-5T-DBx_8Ep7z3Ia4Y3aVrN3uLi2CNB1lSNmec1sfP5f6wSPCSF2EruDLTSXCJG5gO6bzg',
                                        toolbar: {
                                            items: ['heading', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'indent', 'outdent', 'uploadImage', 'blockQuote', 'inserttable', 'uploadmedia', 'undo', 'redo',],
                                        }
                                    }}
                                    onReady={editor => {
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', event, editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', event, editor);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default CkEditor;
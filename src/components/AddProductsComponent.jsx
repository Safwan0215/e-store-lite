import React, { useState } from 'react';

function AddProductComponent() {
    const [selectedImages, setSelectedImages] = useState([]);
    const imageHandler = event => {
        const MAX_LENGTH = 4;
        if (Array.from(event.target.files).length > MAX_LENGTH) {
            event.preventDefault();
            alert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        setSelectedImages([...event.target.files]);
    }
    return (
        <div className="container">
            <form className="mx-auto mt-5 border p-5">
                <h1 className="text-center mb-3 d-block">Add</h1>
                <div className="d-flex">
                    <div className="w-50 p-3">
                        <div className="mb-3">
                            <label className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Price
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="mobileNumber"
                                name='Mobile number'
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Decription</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-check form-switch align-self-center">
                            <label htmlFor="flexSwitchCheckChecked" className="form-label">Active</label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked></input>
                        </div>
                    </div>
                    <div className="w-50 p-3">
                        <div className="mb-3">
                            <label htmlFor="formFileMultiple" className="form-label">Upload Images</label>
                            <div className='d-flex'>
                                {selectedImages.map((image, index) => <div className={`col-${12 / selectedImages.length}`} key={index}><img className='w-100 h-100 img-thumbnail' src={URL.createObjectURL(image)} key={index} alt="selected images" /></div>)}
                            </div>
                            <input className="form-control" type="file" id="formFileMultiple" onChange={imageHandler} multiple></input>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className='btn btn-lg btn-success'>Save</button>
                </div>
            </form>
        </div>
    );
}

export default AddProductComponent;
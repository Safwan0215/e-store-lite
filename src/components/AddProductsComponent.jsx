import React from 'react';

function AddProductComponent() {
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
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Decription</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-check form-switch align-self-center">
                            <label for="flexSwitchCheckChecked" class="form-label">Active</label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked></input>
                        </div>
                    </div>
                    <div className="w-50 p-3">
                        <div class="mb-3">
                            <label for="formFileMultiple" class="form-label">Upload Images</label>
                            <input class="form-control" type="file" id="formFileMultiple" multiple></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddProductComponent;
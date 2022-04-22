import React from 'react';
function DashboardComponent() {
  return (
    <div class="container">
      <h1 class="text-center mt-3">Dashboard</h1>
      <div class="d-flex mt-5">
        <div class="card text-white bg-primary m-3">
          <div class="card-body">
            <h5 class="card-title">Products</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-white bg-info m-3">
          <div class="card-body">
            <h5 class="card-title">Orders</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-white bg-warning m-3">
          <div class="card-body">
            <h5 class="card-title">Customers</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-white bg-success m-3">
          <div class="card-body">
            <h5 class="card-title">Sales</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
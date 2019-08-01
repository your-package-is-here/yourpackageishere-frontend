import React from 'react';

export default (props) => {
  console.log(props);

  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="trackingNumber">Tracking Number</label>
            <input type="text" className="form-control" name="trackingNumber" id="trackingNumber" placeholder="Tracking Number" value={props.scan.trackingNumber} />
          </div>
          <div className="form-group">
            <label htmlFor="aptNum">Apartment Number</label>
            <input type="text" className="form-control" name="aptNum" id="aptNum" placeholder="Apartment Number" value={props.scan.aptNum} />
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" value={props.scan.firstName} />
            </div>
            <div className="col">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" value={props.scan.lastName} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
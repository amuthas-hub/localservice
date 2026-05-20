import React from "react";

const ServiceCard = ({ service, deleteService }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt="service" />

      <div className="card-content">
        <h3>{service.provider}</h3>

        <p>
          <strong>Service:</strong> {service.serviceType}
        </p>

        <p>
          <strong>Location:</strong> {service.location}
        </p>

        <button onClick={() => deleteService(service.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;

import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceList = ({ services, deleteService }) => {
  return (
    <div className="service-list">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          deleteService={deleteService}
        />
      ))}
    </div>
  );
};

export default ServiceList;

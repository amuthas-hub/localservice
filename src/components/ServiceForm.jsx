import React from "react";

const ServiceForm = ({
  provider,
  setProvider,
  serviceType,
  setServiceType,
  location,
  setLocation,
  addService,
  error,
}) => {
  return (
    <form className="service-form" onSubmit={addService}>
      <input
        type="text"
        placeholder="Provider Name"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
      />

      <input
        type="text"
        placeholder="Service Type"
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button type="submit">Add Service</button>

      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default ServiceForm;

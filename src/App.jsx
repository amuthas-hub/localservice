import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";
import "./App.css";

function App() {
  const [services, setServices] = useState([]);

  const [provider, setProvider] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Service List Updated");
  }, [services]);

  const addService = (e) => {
    e.preventDefault();

    if (
      provider.trim() === "" ||
      serviceType.trim() === "" ||
      location.trim() === ""
    ) {
      setError("All fields are required");
      return;
    }

    const newService = {
      id: Date.now(),
      provider,
      serviceType,
      location,
      image:
        "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1000&auto=format&fit=crop",
    };

    setServices([...services, newService]);

    setProvider("");
    setServiceType("");
    setLocation("");
    setError("");
  };

  const deleteService = (id) => {
    const updatedServices = services.filter(
      (service) => service.id !== id
    );

    setServices(updatedServices);
  };

  return (
    <div className="app">
      <Navbar />

      <section className="hero">
        <div className="overlay">
          <h1>SmartServe</h1>
          <p>
            Find trusted local service providers instantly.
          </p>
        </div>
      </section>

      <div className="container">
        <h2 className="title">Book Local Services</h2>

        <ServiceForm
          provider={provider}
          setProvider={setProvider}
          serviceType={serviceType}
          setServiceType={setServiceType}
          location={location}
          setLocation={setLocation}
          addService={addService}
          error={error}
        />

        <ServiceList
          services={services}
          deleteService={deleteService}
        />
      </div>
    </div>
  );
}

export default App;

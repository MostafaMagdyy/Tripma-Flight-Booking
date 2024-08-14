import { useState, useEffect } from "react";
import FilterComponent from "./FilterComponent";

export default function FlightsPage() {
  const [departingFlights, setDepartingFlights] = useState([]);
  const [arrivingFlights, setArrivingFlights] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);

  const fetchFlights = async (filters = {}) => {
    const storedParams = localStorage.getItem("searchParams");
    if (storedParams) {
      const params = JSON.parse(storedParams);
      const queryString = new URLSearchParams({
        ...params,
        ...filters,
      }).toString();

      const response = await fetch(`/api/search?${queryString}`);
      if (response.ok) {
        const data = await response.json();
        setDepartingFlights(data.departingFlights);
        setArrivingFlights(data.arrivingFlights);
      }
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleFilterChange = (newFilters) => {
    fetchFlights(newFilters);
  };

  return (
    <div>
      <FilterComponent
        departingFlights={departingFlights}
        arrivingFlights={arrivingFlights}
        phase="departing"
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedTimes={selectedTimes}
        setSelectedTimes={setSelectedTimes}
        selectedAirlines={selectedAirlines}
        setSelectedAirlines={setSelectedAirlines}
        onFilterChange={handleFilterChange}
      />
      {/* Display your flights here */}
    </div>
  );
}

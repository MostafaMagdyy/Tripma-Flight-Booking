import styles from "./flights.module.css";
import FilterComponent from "@/components/Flights/filtercontainer";
// import SelectionInputs from "@/components/Flights/selectioninputs";
import FlightDeals from "@/components/HomePage/flightdeals";
import FlightReservation from "@/components/Flights/flightreservation";
import { useEffect, useState } from "react";
import SelectionInputs from "@/components/HomePage/selectioninputs";
function FlightsPageDealsHeader({ first, middle, last }) {
  return (
    <div className={styles.leftdescription}>
      <h3 className={styles.normalheader}>{first}</h3>
      <span className={styles.sepcialheader1}>{middle}</span>
      <h3 className={styles.normalheader}>{last}</h3>
    </div>
  );
}

export default function Flights({ action }) {
  const [searchParams, setSearchParams] = useState(null);
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFlights, setSelectedFlights] = useState([]);
  const [error, setError] = useState(null);
  const [phase, setPhase] = useState("departing");
  const [departingFlights, setDepartingFlights] = useState([]);
  const [arrivingFlights, setArrivingFlights] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState(null);
  const [selectedAirlines, setSelectedAirlines] = useState(null);
  const handleSelectFlight = (flight) => {
    setSelectedFlights((prevSelectedFlights) => {
      if (prevSelectedFlights.length >= 2) {
        return prevSelectedFlights;
      }
      setPhase("returning");
      return [...prevSelectedFlights, flight];
    });
  };
  async function fetchLocalStorage() {
    const storedParams = localStorage.getItem("searchParams");
    if (!storedParams) {
      setSearchParams(null);
    } else {
      const params = await JSON.parse(storedParams);
      setSearchParams(params);
    }
  }

  useEffect(() => {
    fetchLocalStorage();
  }, []);

  useEffect(() => {
    const fetchFlights = async () => {
      if (!searchParams) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        const queryString = new URLSearchParams({
          fromCity: searchParams.fromCity,
          toCity: searchParams.toCity,
          startDate: searchParams.startDate,
          endDate: searchParams.endDate,
          adults: searchParams.adults,
          minors: searchParams.minors,
          type: searchParams.type,
        }).toString();

        const response = await fetch(`/api/flights?${queryString}`);
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || "An error occurred");
        }
        console.log(result);
        setDepartingFlights(result.departingFlights);
        setArrivingFlights(result.arrivingFlights);
        setFlights(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFlights();
  }, [searchParams]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!searchParams) {
    return <div>No search parameters found</div>;
  }

  return (
    <div className={styles.outercontainer}>
      <div className={styles.searchfiltercontainer}>
        <SelectionInputs
          toCity={searchParams.toCity}
          fromCity={searchParams.fromCity}
          adults={searchParams.adults}
          minors={searchParams.minors}
          startDate={searchParams.startDate}
          endDate={searchParams.endDate}
          setSearchParams={setSearchParams}
          searchparams={searchParams}
          maxPriceFilter={selectedPrice}
          airline={selectedAirlines}
          times={selectedTimes}
        ></SelectionInputs>
        <FilterComponent
          departingFlights={departingFlights}
          arrivingFlights={arrivingFlights}
          phase={phase}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          selectedTimes={selectedTimes}
          setSelectedTimes={setSelectedTimes}
          selectedAirlines={selectedAirlines}
          setSelectedAirlines={setSelectedAirlines}
        />
      </div>
      <FlightReservation
        flights={flights}
        action={action}
        selectedFlights={selectedFlights}
        handleSelectFlight={handleSelectFlight}
        phase={phase}
        departingFlights={departingFlights}
        arrivingFlights={arrivingFlights}
      />
      <FlightDeals
        showfull={false}
        description={"Find your next adventure with these"}
        type={"HOTEL"}
        imgpath={"./HotelTest.svg"}
        Header={() => (
          <FlightsPageDealsHeader
            first={"Find"}
            middle={"places to stay"}
            last={"in Japan"}
          />
        )}
      />
      <FlightDeals
        showfull={false}
        description={"People in"}
        type={"FLIGHTS"}
        imgpath={"./flightdeal.svg"}
        Header={() => (
          <FlightsPageDealsHeader
            first={"People in"}
            middle={"San Francisco"}
            last={"also searched for"}
          />
        )}
      />
    </div>
  );
}

import styles from "./flights.module.css";
import FilterComponent from "@/components/Flights/filtercontainer";
import SelectionInputs from "@/components/Flights/selectioninputs";
import FlightDeals from "@/components/HomePage/flightdeals";
import FlightReservation from "@/components/Flights/flightreservation";
function FlightsPageDealsHeader({ first, middle, last }) {
  return (
    <div className={styles.leftdescription}>
      <h3 className={styles.normalheader}>{first}</h3>
      <span className={styles.sepcialheader1}>{middle}</span>
      <h3 className={styles.normalheader}>{last}</h3>
    </div>
  );
}
export default function Flights({
  action,
  selectedFlights,
  handleSelectFlight,
}) {
  return (
    <div className={styles.outercontainer}>
      <div className={styles.searchfiltercontainer}>
        <SelectionInputs />
        <FilterComponent />
      </div>
      <FlightReservation
        action={action}
        selectedFlights={selectedFlights}
        handleSelectFlight={handleSelectFlight}
      />
      <FlightDeals
        showfull={false}
        description={"Find your next adventure with these"}
        type={"HOTEL"}
        imgpath={"./HotelTest.svg"}
        Header={() => {
          <FlightsPageDealsHeader
            first={"Find"}
            middle={"places to stay"}
            last={"in Japan"}
          />;
        }}
      />
      <FlightDeals
        showfull={false}
        description={"People in"}
        type={"FLIGHTS"}
        imgpath={"./flightdeal.svg"}
        Header={() => {
          <FlightsPageDealsHeader
            first={"People in"}
            middle={"San Francisco"}
            last={"also searched for"}
          />;
        }}
      />
    </div>
  );
}

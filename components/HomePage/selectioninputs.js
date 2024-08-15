import { useState, useEffect } from "react";
import CustomSelect from "../Inputs/selectFlights";
import DateInput from "../Inputs/dateinput";
import styles from "./selectioninputs.module.css";
import CustomButton from "./button";
import { useRouter } from "next/navigation";

export default function SelectionInputs({
  toCity = null,
  fromCity = null,
  startDate = null,
  endDate = null,
  adults = 0,
  minors = 0,
  maxPriceFilter = null,
  airline = null,
  times = null,
  setDepartingFlights,
  setArrivingFlights,
  searchParams,
}) {
  const router = useRouter();
  const [selectedDates, setSelectedDates] = useState({
    startDate: startDate || null,
    endDate: endDate || null,
  });
  const [selectedCityFrom, setSelectedCityFrom] = useState(fromCity || null);
  const [selectedCityTo, setSelectedCityTo] = useState(toCity || null);
  const [adultsCount, setAdultsCount] = useState(adults || 0);
  const [minorsCount, setMinorsCount] = useState(minors || 0);
  const [fromCities, setFromCities] = useState([]);
  const [toCities, setToCities] = useState([]);
  const [type, setType] = useState(true);
  const containerStyle = {
    width: toCity ? "66%" : "100%",
    justifyContent: toCity ? "flex-start" : "center",
  };

  const handleSearch = async () => {
    if (
      !selectedCityFrom ||
      !selectedCityTo ||
      !selectedDates.startDate ||
      !adultsCount
    ) {
      // Consider showing an error message to the user
      console.error("Please fill in all required fields");
      return;
    }

    const currentPath = window.location.pathname;
    if (currentPath === "/flights") {
      try {
        const updatedParams = { ...searchParams };
        if (maxPriceFilter !== null) updatedParams.maxPrice = maxPriceFilter;
        if (times !== null) updatedParams.times = times;
        if (airline !== null) updatedParams.selectedAirlines = airline;
        const queryParams = new URLSearchParams(updatedParams).toString();
        const response = await fetch(`/api/flights?${queryParams}`);
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch flights");
        }
        if (setDepartingFlights && setArrivingFlights) {
          setDepartingFlights(result.departingFlights || []);
          setArrivingFlights(result.arrivingFlights || []);
        }
      } catch (error) {
        console.error("Search error:", error);
        // Consider showing an error message to the user
      }
    } else {
      const params = {
        fromCity: selectedCityFrom,
        toCity: selectedCityTo,
        startDate: selectedDates.startDate,
        endDate: selectedDates.endDate,
        adults: adultsCount,
        minors: minorsCount,
        type: type,
      };
      localStorage.setItem("searchParams", JSON.stringify(params));
      router.push("/flights");
    }
  };

  useEffect(() => {
    async function fetchCities() {
      try {
        const response = await fetch("/api/cities");
        const result = await response.json();
        if (!response.ok) {
          throw new Error(`${result.error}`);
        }
        setFromCities(result.fromCities || []);
        setToCities(result.toCities || []);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    }
    fetchCities();
  }, []);

  const handleDateChange = (startDate, endDate) => {
    setSelectedDates({ startDate, endDate });
  };

  return (
    <div className={styles.selectcontainer} style={containerStyle}>
      <CustomSelect
        imgpath={"./departure.svg"}
        text={"From where?"}
        width={"22.5%"}
        options={fromCities}
        selectedCity={selectedCityFrom}
        setSelectedCity={setSelectedCityFrom}
      />
      <CustomSelect
        imgpath={"./arrival.svg"}
        text={"To where?"}
        width={"22.5%"}
        options={toCities}
        selectedCity={selectedCityTo}
        setSelectedCity={setSelectedCityTo}
      />
      <DateInput
        imgpath={"./calendar.svg"}
        text={"Depart - Return"}
        width={"17.5%"}
        selectedDates={selectedDates}
        onDateChange={handleDateChange}
        type={type}
        setType={setType}
      />
      <CustomSelect
        imgpath={"./person.svg"}
        text={`${adultsCount} adult${adultsCount > 1 ? "s" : ""}`}
        width={"13.88%"}
        type={"person"}
        adultsCount={adultsCount}
        setAdultsCount={setAdultsCount}
        minorsCount={minorsCount}
        setMinorsCount={setMinorsCount}
      />
      <div className={styles.search}>
        <CustomButton text="Search" action={handleSearch} />
      </div>
    </div>
  );
}

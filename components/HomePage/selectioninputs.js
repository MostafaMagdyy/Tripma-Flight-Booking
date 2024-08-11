import CustomSelect from "../Inputs/selectFlights";
import DateInput from "../Inputs/dateinput";
import styles from "./selectioninputs.module.css";

const departureCities = [
  { id: 1, name: "New York" },
  { id: 2, name: "Los Angeles" },
  { id: 3, name: "Chicago" },
  { id: 4, name: "Houston" },
  { id: 5, name: "Phoenix" },
  { id: 6, name: "Philadelphia" },
  { id: 7, name: "San Antonio" },
  { id: 8, name: "San Diego" },
];

const arrivalCities = [
  { id: 1, name: "London" },
  { id: 2, name: "Paris" },
  { id: 3, name: "Tokyo" },
  { id: 4, name: "Berlin" },
  { id: 5, name: "Sydney" },
  { id: 6, name: "Toronto" },
  { id: 7, name: "Dubai" },
  { id: 8, name: "Rome" },
];

export default function SelectionInputs() {
  return (
    <div className={styles.selectcontainer}>
      <CustomSelect
        imgpath={"./departure.svg"}
        text={"From where?"}
        width={"22.5%"}
        options={departureCities}
      />
      <CustomSelect
        imgpath={"./arrival.svg"}
        text={"To where?"}
        width={"22.5%"}
        options={arrivalCities}
      />
      <DateInput
        imgpath={"./calendar.svg"}
        text={"Depart - Return"}
        width={"17.5%"}
      />
      <CustomSelect
        imgpath={"./person.svg"}
        text={"1 adult"}
        width={"13.88%"}
        type={"person"}
      />
      <div className={styles.search}>
        <button>Search</button>
      </div>
    </div>
  );
}

import CustomSelect from "../Inputs/selectFlights";
import DateInput from "../Inputs/dateinput";
import styles from "./selectioninputs.module.css";
export default function SelectionInputs() {
  return (
    <div className={styles.selectcontainer}>
      <CustomSelect
        imgpath={"./departure.svg"}
        text={"From where?"}
        width={"22.5%"}
      ></CustomSelect>
      <CustomSelect
        imgpath={"./arrival.svg"}
        text={"To where?"}
        width={"22.5%"}
      ></CustomSelect>
      <DateInput
        imgpath={"./calendar.svg"}
        text={"Depart - Return"}
        width={"17.5%"}
      ></DateInput>
      <CustomSelect
        imgpath={"./person.svg"}
        text={"1 adult"}
        width={"13.88%"}
        type={"person"}
      ></CustomSelect>
      <div className={styles.search}>
        <button>Search</button>
      </div>
    </div>
  );
}

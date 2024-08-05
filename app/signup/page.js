import Modal from "@/components/Signup/signup";
import Home from "../page";
export default function Signup() {
  return (
    <>
      <Modal></Modal>
      <Home popup={false}></Home>
    </>
  );
}

import Header from "./components/Header";
// import Modal from "./components/Modal";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";

export default function Home() {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Header showBackArrow label="home" />
      {/* <Modal
        isOpen
        // onClose={() => {}}
        // onSubmit={() => {}}
        actionLabel="submit"
      /> */}
    </>
  );
}

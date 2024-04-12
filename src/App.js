import BtnPage from "./Pages/ptest/TotalBtn/BtnPage";
import TestScript from "./Pages/ptest/TotalBtn/ForTest";

function App() {
  return (
    <>
      <div className="bg-blue-400 h-screen w-screen flex justify-center pt-10">
        <div className="AllComps">
          {/* I put all the components in <BtnPage/> both emoji & btn */}
          <BtnPage />
        </div>

        <div className="TestArea">
          {/* If the button is triggered, let the number behind Q change to page rendering */}
          {/* <TestScript title={"Q" + 1} /> */}
        </div>
      </div>
    </>
  );
}

export default App;

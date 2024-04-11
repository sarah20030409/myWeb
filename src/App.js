import BtnPage from "./Pages/ptest/TotalBtn/BtnPage";
import TestScript from "./Pages/ptest/TotalBtn/ForTest";

function App() {
  return (
    <>
      <div className="bg-gray-400 h-screen w-screen flex justify-center pt-10">
        <div className="AllComps">
          <BtnPage />
        </div>

        <div className="TestArea">
          {/* 如果觸發按鈕後，讓Q後面的數字改變達到頁面渲染 */}
          {/* <TestScript title={"Q" + 1} /> */}
        </div>
      </div>
    </>
  );
}

export default App;

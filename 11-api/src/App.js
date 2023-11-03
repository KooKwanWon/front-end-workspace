import KakaoMap from "./components/KakaoMap";
import DaumPostCode from "./components/DaumPostCode";

const App = () => {
  return (
    <>
      <button onClick={DaumPostCode}>주소 검색</button>
      <KakaoMap />
    </>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";

function App() {
  let listData = [
    {
      id: "1",
      item: "식비",
      cost: "1200",
    },
    {
      id: "2",
      item: "밥먹기",
      cost: "12000",
    },
  ];
  const onsubmit = () => {};
  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>예산 계산기</h1>
        </div>
        <div>
          <label>
            지출 항목
            <input
              type="text"
              className="input"
              name="item"
              placeholder="예) 렌트비"
            />
          </label>
          <label>
            비용
            <input type="text" className="input" name="cost" defaultValue="0" />
          </label>
          <button className="btn" onClick={onsubmit()}>
            제출{" "}
          </button>
        </div>
        <div className="list">
          {listData.map((data) => (
            <div>
              <input type="text" defaultValue={data.item} />
              <input type="text" defaultValue={data.cost} />
              <button>수정</button>
              <button>삭제</button>
            </div>
          ))}
          <button className="btn">목록 지우기</button>
        </div>
      </div>
    </div>
  );
}

export default App;

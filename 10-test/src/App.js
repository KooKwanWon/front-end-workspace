import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

// 3. 기능은 신규 등록(create), 목록 출력(read), 삭제(delete)를 구현합니다.

const Home = ({ list, deletewriter }) => {
  const Delete = (event) => {
    console.log(event.target.id);
    deletewriter(event.target.id);
  };
  return (
    <table
      className="table"
      border="0"
      style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Writer</th>
          <th>Message</th>
          <th>Release Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {}
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.writer}</td>
            <td>{item.message}</td>
            <td>{item.date}</td>
            <td>
              <button onClick={Delete} id={item.id}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Create = ({ addwriter }) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const id = parseInt(event.target.id.value);
    const writer = event.target.writer.value;
    const message = event.target.message.value;
    const date = event.target.date.value;
    addwriter(id, writer, message, date);
    navigate("/");
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="id"></label>
        <input
          type="text"
          id="id"
          name="id"
          placeholder="Input message Id"
          required
        />
      </div>
      <div>
        <label htmlFor="writer"></label>
        <input
          type="text"
          id="writer"
          name="writer"
          placeholder="input message writer"
          required
        />
      </div>
      <div>
        <label htmlFor="message"></label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="input message content"
          required
        />
      </div>
      <div>
        <label htmlFor="date">작성일 : </label>
        <input type="date" id="date" name="date" required />
      </div>
      <input type="submit" value="Add message" />
    </form>
  );
};

const App = () => {
  const [writers, setwriters] = useState([
    {
      id: 1,
      writer: "Writer1",
      message: "Message1",
      date: "2022-01-01",
    },
    {
      id: 2,
      writer: "Writer2",
      message: "Message2",
      date: "2022-02-01",
    },
    {
      id: 3,
      writer: "Writer3",
      message: "Message3",
      date: "2022-03-01",
    },
  ]);

  const addwriter = (id, writer, message, date) => {
    const isIdDuplicate = writers.some((item) => item.id === id);

    if (isIdDuplicate) {
      alert(`ID ${id}은 이미 존재하는 아이디입니다. 다른 ID를 선택해주세요.`);
      return; // 중복된 ID인 경우 메시지를 추가하지 않고 종료
    }

    // 중복된 ID가 없으면 새로운 메시지를 추가
    const newwriter = { id, writer, message, date };
    setwriters([...writers, newwriter]);
  };

  const deletewriter = (id) => {
    const newList = writers.filter((item) => item.id !== parseInt(id));
    setwriters(newList);
  };

  //4.
  return (
    <BrowserRouter>
      <div className="link">
        <Link to="/">List</Link>
        <Link to="/create">Add New Writer</Link>
      </div>
      <h1>Message</h1>

      <Routes>
        <Route
          path="/"
          element={<Home list={writers} deletewriter={deletewriter} />}
        />
        <Route path="/create" element={<Create addwriter={addwriter} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

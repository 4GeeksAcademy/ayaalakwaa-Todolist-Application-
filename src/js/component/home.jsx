import React, { useEffect, useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [showDelete, setShowDelete] = useState(-1);
  const deleteItem = (recived) => {
    const newList = list.filter(
      (_filterTask, filterIndex) => recived != filterIndex
    );
    setList(newList);
  };
  useEffect(() => {
    setCount(list.length);
  }, [list]);
  const changeTask = count < 2 ? "task" : "tasks";
  return (
    <div className="text-center">
      <h1>todos</h1>
      <div className="inputTasks">
        <input
          type="text"
          onKeyDown={(event) => {
            if (event.key == 'Enter') {
              setList([...list, input]);
              setInput("");
            }
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            list.length === 0
              ? "what needs to be done?"
              : "what needs to be done?"
          }
        ></input>
      </div>
      {list.length > 0
        ? list.map((mapTask, mapIndex) => {
            return (
              <div
                className="rowTask effect"
                onMouseEnter={() => setShowDelete(mapIndex)}
                onMouseLeave={() => setShowDelete(-1)}
              >
                <div>
                  <ul>
                    <li>{mapTask}</li>
                  </ul>
                </div>
                <div
                  onClick={() => deleteItem(mapIndex)}
                  className={`${
                    mapIndex == showDelete ? "d-block" : "d-none"
                  } iconDelete`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "red";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                  }}
                >
                  <i
                    class="fas fa-trash-alt"
                    title="Delete"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </div>
            );
          })
        : ""}
      <div className="countTask">
        {count} {changeTask}
      </div>
    </div>
  );
};

export default Home;

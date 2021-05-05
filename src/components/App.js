import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RowData from "./rowData";
import Header from "./header";
import { fetchData, choisePage } from "../redux/filterReducer";
import "../sass/app.scss";
import axios from "axios";

const App = () => {
  // const [data, setData] = useState();
  // const [filterParams, setFilterParams] = useState({});

  const dispatch = useDispatch();
  const { arrMutable, pageSize, currentPage } = useSelector(
    (s) => s.filterReducer
  );

  const pagesCount = Math.ceil(arrMutable.length / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages = [...pages, i];
  }

  const fetchDataFromServer = () => {
    return function (dispatch) {
      axios
        .get("http://localhost:5000/")
        .then((res) => dispatch(fetchData(res.data)))
        .catch((err) => console.log(err));
    };
  };

  useEffect(() => {
    dispatch(fetchDataFromServer());
  }, [dispatch]);

  // const getFilterParams = (obj) => {
  //   setFilterParams(obj);
  // };

  console.log(arrMutable, currentPage);

  return (
    <main className="app">
      <Header
        // getFilterParams={getFilterParams}
      />
      Таблица
      <table border="1" width="600">
        <thead>
          <tr>
            <td>Дата</td>
            <td>Название</td>
            <td>Количество</td>
            <td>Расстояние</td>
          </tr>
        </thead>
        <tbody>
          {arrMutable
            .slice(pageSize * currentPage - pageSize, pageSize * currentPage)
            .map((it) => (
              <RowData key={it.id} row={it} />
            ))}
        </tbody>
      </table>
      <div className="pagesCount">
        {pages.map((it) => (
          <span
            key={it}
            className={
              currentPage === it ? "pagesCountStyle" : "pagesCountStyleUncheck"
            }
            onClick={(e) => {
              e.preventDefault();
              dispatch(choisePage(it));
            }}
          >
            {it}
          </span>
        ))}
      </div>
    </main>
  );
};

export default App;

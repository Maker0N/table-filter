import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  titleQuantDistanceMore,
  titleQuantDistanceLess,
  titleQuantDistanceEqual,
  titleQuantDistanceInclude
} from "../redux/filterReducer";

const Header = (props) => {
  const dispatch = useDispatch();

  const [filterParams, setFilterParams] = useState({
    column: null,
    action: null,
    inputStr: null,
  });

  console.log(filterParams);

  const filterAction = (filterParamsAction) => {
    switch (filterParams.action) {
      case "equal":
        return dispatch(titleQuantDistanceEqual(filterParams));

      case "include":
        return dispatch(titleQuantDistanceInclude(filterParams));

      case "more":
        return dispatch(titleQuantDistanceMore(filterParams));

      case "less":
        return dispatch(titleQuantDistanceLess(filterParams));

      default:
        return null;
    }
  }

  const filterFunc = (filterParams) => {
    switch (filterParams.column) {

      case 'title':
        return filterAction(filterParams);

      case "quant":
        return filterAction(filterParams)

      case "distance":
        return filterAction(filterParams);

      default:
        return null;
    }
  };

  return (
    <header>
      <form action="submit">
        <select
          name="column"
          onChange={(e) =>
            setFilterParams({ ...filterParams, column: e.target.value })
          }
        >
          <option>Выберите колонку</option>
          <option value="title">Название</option>
          <option value="quant">Количество</option>
          <option value="distance">Расстояние</option>
        </select>
        <select
          name="action"
          onChange={(e) =>
            setFilterParams({ ...filterParams, action: e.target.value })
          }
        >
          <option>Выберире фильтр</option>
          <option value="equal">Равно</option>
          <option value="include">Содержит</option>
          <option value="more">Больше</option>
          <option value="less">Меньше</option>
        </select>
        <label htmlFor="input">Значения для фильтрации</label>
        <input
          id="input"
          type="text"
          onChange={(e) =>
            setFilterParams({ ...filterParams, inputStr: e.target.value })
          }
        />
        <input
          type="submit"
          value="Фильтровать"
          onClick={(e) => {
            e.preventDefault();
            filterFunc(filterParams);
          }}
        />
      </form>
    </header>
  );
};

export default Header;

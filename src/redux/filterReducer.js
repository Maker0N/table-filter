const FETCH_DATA = 'FETCH_DATA'
const CHOISE_PAGE = 'CHOISE_PAGE'
const TITLE_QUANT_DISTANCE_MORE = 'TITLE_QUANT_DISTANCE_MORE'
const TITLE_QUANT_DISTANCE_LESS = "TITLE_QUANT_DISTANCE_LESS";
const TITLE_QUANT_DISTANCE_EQUAL = "TITLE_QUANT_DISTANCE_EQUAL";
const TITLE_QUANT_DISTANCE_INCLUDE = "TITLE_QUANT_DISTANCE_INCLUDE";

let initialState = {
  arrOfData: [],
  arrMutable: [],
  pageSize: 6,
  currentPage: 1
};

console.log(initialState)

const filterReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_DATA:
      return {
        ...state,
        arrOfData: [...state.arrOfData, ...action.payload],
        arrMutable: [...state.arrOfData, ...action.payload],
      };

    case CHOISE_PAGE:
      return {...state, currentPage: action.payload}

    case TITLE_QUANT_DISTANCE_EQUAL:
      return action.payload.column === "quant"
        ? {
            ...state,
            arrMutable: state.arrOfData.filter(
              (it) => it.quant === action.payload.inputStr
            ),
            currentPage: 1,
          }
        : action.payload.column === "distance"
        ? {
            ...state,
            arrMutable: state.arrOfData.filter(
              (it) => it.distance === action.payload.inputStr
            ),
            currentPage: 1,
          }
        : {
            ...state,
            arrMutable: state.arrOfData.filter(
              (it) => it.title === action.payload.inputStr
            ),
            currentPage: 1,
          };

    case TITLE_QUANT_DISTANCE_INCLUDE:
      return action.payload.column === "quant"
        ? {
            ...state,
            arrMutable: state.arrOfData.filter((it) =>
              it.quant.includes(action.payload.inputStr)
            ),
            currentPage: 1,
          }
        : action.payload.column === "distance"
        ? {
            ...state,
            arrMutable: state.arrOfData.filter((it) =>
              it.distance.includes(action.payload.inputStr)
            ),
            currentPage: 1,
          }
        : {
            ...state,
            arrMutable: state.arrOfData.filter((it) =>
              it.title.includes(action.payload.inputStr)
            ),
            currentPage: 1,
          };

    case TITLE_QUANT_DISTANCE_MORE:
      return action.payload.column === "quant"
        ? {
            ...state,
            arrMutable: state.arrOfData.filter(
              (it) => +it.quant > action.payload.inputStr
            ),
            currentPage: 1,
          }
        : action.payload.column === "distance"
        ? {
            ...state,
            arrMutable: state.arrOfData.filter(
              (it) => +it.distance > action.payload.inputStr
            ),
            currentPage: 1,
          }
        : {
            ...state,
            arrMutable: state.arrOfData.filter(
              (it) => it.title.length > action.payload.inputStr
            ),
            currentPage: 1,
          };

    case TITLE_QUANT_DISTANCE_LESS:
      return action.payload.column === "quant"
        ? {
            ...state,
            arrMutable: state.arrOfData.filter(
              (it) => +it.quant < action.payload.inputStr
            ),
            currentPage: 1,
          }
        : action.payload.column === "distance"
        ? {
            ...state,
            arrMutable: state.arrOfData.filter(
              (it) => +it.distance < action.payload.inputStr
            ),
            currentPage: 1,
          }
        : {
            ...state,
            arrMutable: state.arrOfData.filter(
              (it) => it.title.length < action.payload.inputStr
            ),
            currentPage: 1,
          };

    default:
      return state;
  }
};

export function fetchData(payload) {
  return { type: FETCH_DATA, payload }
}

export function choisePage(payload) {
  return { type: CHOISE_PAGE, payload}
}

export function titleQuantDistanceEqual(payload) {
  return { type: TITLE_QUANT_DISTANCE_EQUAL, payload}
}

export function titleQuantDistanceInclude(payload) {
  return { type: TITLE_QUANT_DISTANCE_INCLUDE, payload}
}

export function titleQuantDistanceMore(payload) {
  return { type: TITLE_QUANT_DISTANCE_MORE, payload }
}

export function titleQuantDistanceLess(payload) {
  return { type: TITLE_QUANT_DISTANCE_LESS, payload };
}

export default filterReducer;

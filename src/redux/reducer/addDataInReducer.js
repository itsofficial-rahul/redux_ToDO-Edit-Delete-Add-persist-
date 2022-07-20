import {
  ADD_ITEM_IN_LIST,
  DELTETE_ITEM_IN_LIST,
  EDIT_ITEM_IN_LIST,
} from "../action/action";

const intialState = [];

export const AddDataInReducer = (
  state = intialState,
  { type, payload, list }
) => {
  switch (type) {
    case ADD_ITEM_IN_LIST: //  for add ITem in list
      return state.concat({
        id: new Date().getTime().toString(),
        list: payload,
      });
    case DELTETE_ITEM_IN_LIST: // for item delete
      return state.filter((item) => item.id != payload);

    case EDIT_ITEM_IN_LIST: // for item Editable
      return state.map((i) => {
        if (i.id == payload) {
          return { ...i, list: list };
        }
        return { ...i };
      });

    default:
      return state;
  }
};

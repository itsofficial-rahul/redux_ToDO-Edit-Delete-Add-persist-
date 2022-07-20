export const ADD_ITEM_IN_LIST = "ADD_ITEM_IN_LIST";
export const DELTETE_ITEM_IN_LIST = "DELTETE_ITEM_IN_LIST";
export const EDIT_ITEM_IN_LIST = "EDIT_ITEM_IN_LIST";
export const addItemInList = (data) => {
  return {
    type: ADD_ITEM_IN_LIST,
    payload: data,
  };
};

export const deleteListItem = (id) => {
  return {
    type: DELTETE_ITEM_IN_LIST,
    payload: id,
  };
};
export const editItemInList = (id, list) => {
  return {
    type: EDIT_ITEM_IN_LIST,
    payload: id,
    list: list,
  };
};

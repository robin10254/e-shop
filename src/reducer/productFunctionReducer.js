import { editList, filterList } from "./helpers/helper";

//Action type
export const ADD_PRODUCT = "PRODUCT/ADD";
export const EDIT_PRODUCT = "PRODUCT/EDIT";
export const DELETE_PRODUCT = "PRODUCT/DELETE";

//Action Function
export const addProduct = (newProduct, Id) => {
  const newId = Id + 1;

  const product = { ...newProduct, productId: newId };
  return {
    type: ADD_PRODUCT,
    payload: {
      newProduct: product,
      newId: newId,
    },
  };
};

export const deleteProduct = (productsList, productId) => {
  const newProductsList = filterList(productsList, "productId", productId);

  return {
    type: DELETE_PRODUCT,
    payload: {
      productsList_delete: newProductsList,
    },
  };
};

export const editProduct = (productsList, updatedProduct) => {
  const newProductsList = editList(productsList, "productId", updatedProduct);
  return {
    type: EDIT_PRODUCT,
    payload: {
      productsList_edit: newProductsList,
    },
  };
};

//default state
const initialData = {
  productsList: [],
  countId: 1,
};

// State updating
const productReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { newProduct, newId } = action.payload; //data is object
      return {
        ...state,
        countId: newId,
        productsList: [...state.productsList, newProduct],
      };
    case DELETE_PRODUCT:
      const { productsList_delete } = action.payload;
      return {
        ...state,
        productsList: productsList_delete,
      };
    case EDIT_PRODUCT:
      const { productsList_edit } = action.payload;
      return {
        ...state,
        ordersList: productsList_edit,
      };

    default:
      return state;
  }
};

export default productReducer;

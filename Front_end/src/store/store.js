import { combineReducers } from "redux";
import {
  LoginReducer,
  RegisterReducer,
  ResetPasswordReducer,
} from "./reducer/user/login";
import ForgotPasswordReducer from "./reducer/user/forgotpassword";
import ProductReducer from "./reducer/products/product";
import ProductCartReducer from "./reducer/products/productCart";
import ContactReducer from "./reducer/contact/contact";
import storage from "redux-persist/lib/storage";
import OfferReducer from "./reducer/products/offer";
import ProductWishlistReducer from "./reducer/products/wishlist";
import { addProductReducer } from "./reducer/products/addproduct";
import { updateProductReducer } from "./reducer/products/updateProduct";
import SearchReducer from "./reducer/search/search";

const reducers = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  product: ProductReducer,
  cart: ProductCartReducer,
  contact: ContactReducer,
  offer: OfferReducer,
  forgotPassword: ForgotPasswordReducer,
  resetPassword: ResetPasswordReducer,
  wishlist: ProductWishlistReducer,
  addproduct: addProductReducer,
  update: updateProductReducer,
  search: SearchReducer,
});

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"],
};

export default reducers;

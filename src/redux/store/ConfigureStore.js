import { createStore } from "redux";

import rootReducer from "~/redux/modules";

const CreateStore = () => {
  return createStore(rootReducer);
};

export default CreateStore;

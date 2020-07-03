import { createStore } from "redux";
import reducer from "./reducers/index";

const initialState = {
  posts: [
    {
      title: "Have fun with coding",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam architecto repudiandae adipisci qui, natus, aliquid quisquam nemo sapiente voluptatum dolorem blanditiis voluptate.",
      postedBy: "Vishnu",
      category: {
        categoryName: "coding",
      },
    },
    {
      title: "Let's hack this",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam architecto repudiandae adipisci qui, natus, aliquid quisquam nemo sapiente voluptatum dolorem blanditiis voluptate. Ratione, ex tempore.?",
      postedBy: "Vishnu",
      category: {
        categoryName: "coding",
      },
    },
    {
      title: "Got stuck in this",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam architecto repudiandae adipisci qui, natus, aliquid quisquam nemo sapiente voluptatum dolorem blanditiis voluptate. Ratione, ex tempore. Labore deleniti incidunt, eius a dolorem laudantium aut facere error nesciunt illum eum quos consequatur unde vero consectetur, quaerat iste.",
      postedBy: "Vishnu",
      category: {
        categoryName: "Vlog",
      },
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
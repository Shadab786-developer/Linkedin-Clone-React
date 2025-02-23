import { auth, provider } from "../../firebase";

export const singInAPI = () => {
  return () => {
    auth
      .singInWithPopup(provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

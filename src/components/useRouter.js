import { useContext } from "react";
import { RouterContext } from "./CustomBrowserRouter";

const useRouter = () => {
  return useContext(RouterContext);
};

export default useRouter;

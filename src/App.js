import Router from "./Routes/Router";
import { ToastContainer } from "react-toastify";
import Loading from "components/commen/Loading/Loading";
import { ConsumeAllDataState } from "Context/AllData/AllData";
import RouterAdmin from "Routes/RouterAdmin";
import ScrollToTop from "components/commen/ScrollToTOP/ScrollToTop";
import "./App.css";

function App() {
  
  const { loading } = ConsumeAllDataState();


  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer rtl={true} position="top-right" theme="colored" />
          <ScrollToTop />
          <Router />
          <RouterAdmin />

        </>
      )}
    </>
  );
}

export default App;

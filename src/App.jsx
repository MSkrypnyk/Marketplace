import PropTypes from "prop-types";
import { Header } from "./shared/ui/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./shared/ui/Footer/Footer";
function App({ loggedIn }) {
  return (
    <>
      <div className="container">
        <Header />
        <div className="page">
          <Outlet />
        </div>
      </div>
	  <Footer />
    </>
  );
}

App.propTypes = {
  loggedIn: PropTypes.bool,
};

export default App;

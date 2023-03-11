// Imports
import QOD from "../components/QuoteofdaDay";
import SideBar from "../components/SideBar-Qpage";
import "../css/Homepage.css";

function Homepage() {
  return (
    <>
      <h2 className="note">
        New Quotes will be Available in Every 24hrs by the API Provider
      </h2>
      <main>
        <SideBar />
        <QOD qid="2" />
        <QOD qid="3" />
        <QOD qid="0" />
        <QOD qid="4" />
        <QOD qid="1" />
        <QOD qid="5" />
        <QOD qid="6" />
        <QOD qid="7" />
      </main>
    </>
  );
}

export default Homepage;

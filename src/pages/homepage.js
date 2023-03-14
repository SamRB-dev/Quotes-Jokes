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
        <QOD qid="2" id=":r1:"/>
        <QOD qid="3" id=":r2:"/>
        <QOD qid="0" id=":r3:"/>
        <QOD qid="4" id=":r4:"/>
        <QOD qid="1" id=":r5:"/>
        <QOD qid="5" id=":r6:"/>
        <QOD qid="6" id=":r7:"/>
        <QOD qid="7" id=":r8:"/>
      </main>
    </>
  );
}

export default Homepage;

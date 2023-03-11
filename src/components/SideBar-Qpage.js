// Imports
import "../css/SideBar-Qpage.css";

function SideBar() {
    return (
        <section className="sidebar">
            <h2>Category</h2>
            <ul className="list">
                <li><a href="#:r1:">Inspiring</a></li>
                <li><a href="#:r3:">Life</a></li>
                <li><a href="#:r5:">Art</a></li>
                <li><a href="#:r7:">Love</a></li>
                <li><a href="#:r9:">Funny</a></li>
                <li><a href="#:rb:">Student</a></li>
                <li><a href="#:rd:">Management</a></li>
                <li><a href="#:rf:">Sports</a></li>
            </ul>
        </section>
    );
}

export default SideBar;
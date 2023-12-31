import "../App/App.js";
import styles from "../App/App.module.css";
import Navbar from "../Navbar/Navbar";
import Sales from "../Sales/Sales.js";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { About } from "../About/About.js";
import { Contact } from "../Contact/Contact.js";
import { Sidebar } from "../Sidebar/Sidebar.js";
import { Main } from "../Main/Main.js";
import { NotFound } from "../404/NotFound";
import Footer from "../Footer/Footer.js";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Sales" element={<Sales />} />
      </Route>
    )
  );
  return (
    <div className={styles.App}>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;

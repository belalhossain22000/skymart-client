import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Navbar/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
    return (
        <main >
            <Header />
            <ToastContainer />
            <div className="container mx-auto">
            <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default Main
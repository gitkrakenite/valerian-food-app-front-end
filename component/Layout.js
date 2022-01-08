import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <>

            <Navbar />

            {/* All the children come here */}

            {children}

            <Footer />

        </>
    )
}

export default Layout

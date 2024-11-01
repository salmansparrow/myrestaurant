import Footer from "../Common/Footer";
import MainNavbar from "../Common/MainNavbar";

function Layout({ children }) {
  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

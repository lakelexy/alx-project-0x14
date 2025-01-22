import React from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

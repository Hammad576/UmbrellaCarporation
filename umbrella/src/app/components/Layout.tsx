"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
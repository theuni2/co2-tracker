import Nav from "./component/nav.js";
import Footer from "./component/footer.js";
import "./globals.css";

export const metadata = {
  title: "EcoTracker | CO₂ Paper Recycling Tracker",
  description: "Track your paper recycling impact and calculate CO₂e emissions avoided with EPA WARM lifecycle factors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

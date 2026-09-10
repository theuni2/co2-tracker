import Nav from "./component/nav.js";
import Footer from "./component/footer.js";
import "./globals.css";

export const metadata = {
  title: "Read2Rise | Book Redistribution & CO₂ Paper Recycling Tracker",
  description: "Read2Rise redistributes storybooks, textbooks, and notebooks to students and libraries via NGO partners, and responsibly recycles paper to avoid CO₂e emissions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import Layout from "./components/Layout";

export const metadata = {
  title: "Umbrella Corporation",
  description: "Advancing research, business, and investment in Pakistan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        {/* Apply the Layout component globally */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
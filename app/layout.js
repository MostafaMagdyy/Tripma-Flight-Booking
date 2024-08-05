import "./globals.css";
import Header from "@/components/Header/header";
export const metadata = {
  title: "Tripma - Your Ultimate Flight Booking Destination",
  description:
    "Book flights with ease using Tripma, your go-to platform for finding the best deals and exploring new destinations. Compare prices, select your preferred airlines, and manage your bookings seamlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header> {children}</Header>
      </body>
    </html>
  );
}

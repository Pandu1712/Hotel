import { useParams } from "react-router-dom";

const BookingPage = () => {
  const { hotelName } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Booking for: {decodeURIComponent(hotelName)}</h1>
      {/* Add your booking form or details here */}
    </div>
  );
};

export default BookingPage;

import { Route, Routes } from 'react-router'
import BookingStepOne from './BookingStepOne'
import BookingStepTwo from './BookingStepTwo'
const BookingPage = () => (
  <Routes>
    <Route index element={<BookingStepOne />} />
    <Route path="step-two" element={<BookingStepTwo />} />
  </Routes>
)
export default BookingPage

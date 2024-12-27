import { Link, useNavigate } from 'react-router'
import { fetchAPI } from '../api'
import restaurantImg from '../assets/restaurant.jpg'
import { useEffect, useRef, useState } from 'react'
const BookingStepOne = () => {
  let navigate = useNavigate()
  const [availableTimes, setAvailableTimes] = useState([])
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    numberOfPeople: 1,
    location: '',
    comment: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = formRef.current
    if (form.checkValidity()) {
      navigate('step-two', { state: formData })
    } else {
      form.classList.add('was-validated')
    }
  }

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      try {
        const res = await fetchAPI(new Date(formData.date))

        setAvailableTimes(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAvailableTimes()
  }, [formData.date])

  return (
    <div className="container">
      <div className="my-2">
        <Link to={'/'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#495e57"
            className="bi bi-house "
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
          </svg>
        </Link>
      </div>
      <div>
        <img
          src={restaurantImg}
          alt="booking image"
          className="img-fluid rounded"
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="text-center">
        <h1 className="fs-2">Reservation</h1>
        <p className="fs-3">Step 1 of 2</p>
      </div>
      <form
        ref={formRef}
        role="form"
        noValidate
        style={{ maxWidth: '600px' }}
        className="mx-auto needs-validation"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="date" className="form-label fs-4">
            Date:
          </label>
          <input
            required
            type="date"
            className="form-control border-primary"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
          />
          <div className="invalid-feedback">Please select a valid date</div>
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label fs-4">
            Time:
          </label>
          <select
            required
            className="form-control border-primary"
            name="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">Please select a time</div>
        </div>
        <div className="mb-3">
          <label htmlFor="numberOfPeople" className="form-label fs-4">
            Number of people:
          </label>
          <input
            required
            type="number"
            className="form-control border-primary"
            id="numberOfPeople"
            name="numberOfPeople"
            min="1"
            max="10"
            value={formData.numberOfPeople}
            onChange={handleChange}
          />
          <div className="invalid-feedback">
            Please select between 1-10 people
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label fs-4">
            Occasion:
          </label>
          <select
            required
            className="form-control border-primary"
            name="occasion"
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <div className="invalid-feedback">Please select a time</div>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label fs-4">
            Location:
          </label>
          <input
            required
            type="text"
            className="form-control border-primary"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            minLength="2"
            maxLength="50"
          />{' '}
          <div className="invalid-feedback">
            Please select a location (2-50 characters)
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label fs-4">
            Comment:
          </label>
          <textarea
            className="form-control border-primary"
            id="comment"
            name="comment"
            rows={5}
            style={{ resize: 'none' }}
            value={formData.comment}
            onChange={handleChange}
            maxLength="200"
          />
          <div className="form-text">Optional: Maximum 200 characters</div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary rounded-5 px-3 py-1 mb-2"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}
export default BookingStepOne

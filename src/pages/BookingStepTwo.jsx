import { Link, useLocation, useNavigate } from 'react-router'
import { submitAPI } from '../api'
import restaurantImg from '../assets/restaurant.jpg'
import { useRef, useState, useEffect } from 'react'
import * as bootstrap from 'bootstrap'
const BookingStepTwo = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const formRef = useRef(null)
  const modalRef = useRef(null)
  const [modalInstance, setModalInstance] = useState(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  //Initialize the modal when component mounts

  useEffect(() => {
    if (modalRef.current && !modalInstance) {
      const modal = new bootstrap.Modal(modalRef.current)
      setModalInstance(modal)

      //add event listener for modal hidden event
      modalRef.current.addEventListener('hidden.bs.modal', () => {
        navigate('/')
      })
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = formRef.current

    if (!form.checkValidity()) {
      form.classList.add('was-validated')
      return
    }

    submitAPI(formData)
    modalInstance?.show()
  }

  return (
    <div className="container">
      <div
        ref={modalRef}
        className="modal fade "
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-2 fw-bolder">
                Reservation Confirmed
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Thanks for your booking, {formData.firstName}!</p>
              <div>Details of your booking:</div>
              <ul>
                <li>Date: {state.date}</li>
                <li>Time: {state.time}</li>
                <li>Number of people: {state.numberOfPeople}</li>
                <li>Occasion: {state.occasion}</li>
                <li>Location: {state.location}</li>
                <li>Comment: {state.comment}</li>
              </ul>
              <p>A confirmation email has been sent to {formData.email}.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2">
        <Link to={'/booking'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#495e57"
            className="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
        </Link>
      </div>
      <div>
        <img
          src={restaurantImg}
          alt=""
          className="img-fluid rounded"
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="text-center">
        <h1 className="fs-2">Reservation</h1>
        <p className="fs-3">Step 2 of 2</p>
      </div>
      <form
        noValidate
        ref={formRef}
        style={{ maxWidth: '600px' }}
        className="mx-auto needs-validation"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label fs-4">
            First Name:
          </label>
          <input
            required
            type="text"
            className="form-control border-primary"
            id="firstName"
            name="firstName"
            minLength={2}
            value={formData.firstName}
            onChange={handleChange}
          />
          <div className="invalid-feedback">
            First name is required and must be at least 2 characters
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label fs-4">
            Last Name:
          </label>
          <input
            required
            type="text"
            className="form-control border-primary"
            id="lastName"
            name="lastName"
            minLength={2}
            value={formData.lastName}
            onChange={handleChange}
          />
          <div className="invalid-feedback">
            Last name is required and must be at least 2 characters
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fs-4">
            Email:
          </label>
          <input
            required
            type="email"
            className="form-control border-primary"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">Please enter a valid email</div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary rounded-5 px-3 py-1 mb-2"
          >
            Confirm Reservation
          </button>
        </div>
      </form>
    </div>
  )
}
export default BookingStepTwo

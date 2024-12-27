import { beforeEach, describe, expect, test, vi } from 'vitest'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import BookingStepOne from './BookingStepOne'
import * as router from 'react-router'

// Wrap component with Router since it uses useNavigate
const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

const manuallySetValidity = (input) => {
  input.setCustomValidity('')
  if (!input.checkValidity()) {
    input.setCustomValidity('Invalid field.')
  } else {
    input.setCustomValidity('')
  }
}

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router')
  return { ...actual, useNavigate: vi.fn() }
})

vi.mock('../api', () => ({
  fetchAPI: vi.fn(() => Promise.resolve(['17:00', '18:00', '19:00']))
}))

describe('BookingStepOne', () => {
  let dateInput,
    timeSelect,
    peopleInput,
    occasionInput,
    locationInput,
    commentInput,
    nextBtn,
    form

  const navigate = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    router.useNavigate.mockImplementation(() => navigate)
    renderWithRouter(<BookingStepOne />)
    dateInput = screen.getByLabelText('Date:')
    timeSelect = screen.getByLabelText('Time:')
    peopleInput = screen.getByLabelText('Number of people:')
    occasionInput = screen.getByLabelText('Occasion:')
    locationInput = screen.getByLabelText('Location:')
    commentInput = screen.getByLabelText('Comment:')
    nextBtn = screen.getByRole('button', { name: 'Next' })
    form = screen.getByRole('form')
  })

  test('renders form with input fields', () => {
    // Check for all form labels using exact text from your component
    expect(dateInput).toBeInTheDocument()
    expect(timeSelect).toBeInTheDocument()
    expect(peopleInput).toBeInTheDocument()
    expect(occasionInput).toBeInTheDocument()
    expect(locationInput).toBeInTheDocument()
    expect(commentInput).toBeInTheDocument()
  })

  test('renders submit button', () => {
    expect(nextBtn).toBeInTheDocument()
  })

  test('correct attributes applied to input elements', () => {
    // Check for input type attributes
    expect(dateInput).toHaveAttribute('type', 'date')
    expect(timeSelect).toHaveAttribute('required')
    expect(peopleInput).toHaveAttribute('type', 'number')
    expect(occasionInput).toHaveAttribute('required', '')
    expect(locationInput).toHaveAttribute('required', '')
    expect(commentInput).toHaveAttribute('maxLength', '200')
  })

  test('should show validation errors when submitting empty form', () => {
    fireEvent.click(nextBtn)
    expect(form).toHaveClass('was-validated')
  })

  test('should go to step two when form is valid', async () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowString = tomorrow.toISOString().split('T')[0]

    // Simulate changing the date
    act(() => {
      fireEvent.change(dateInput, { target: { value: tomorrowString } })
    })

    // Wait for the API call to update available times
    await waitFor(() => {
      expect(timeSelect.options.length).toBeGreaterThan(1)
    })

    console.log('Before time selection:', {
      timeValue: timeSelect.value,
      timeValid: timeSelect.validity.valid,
      options: Array.from(timeSelect.options).map((opt) => opt.value)
    })

    // Simulate changing the time
    act(() => {
      fireEvent.change(timeSelect, { target: { value: '17:00' } })
      fireEvent.focus(timeSelect) // Ensure focus is gained
      fireEvent.blur(timeSelect) // Ensure blur to trigger validation
      manuallySetValidity(timeSelect) // Manually set validity
    })

    console.log('After time selection:', {
      timeValue: timeSelect.value,
      timeValid: timeSelect.validity.valid
    })

    await waitFor(() => {
      expect(timeSelect.value).toBe('17:00')
      expect(timeSelect.validity.valid).toBe(true)
    })

    // Simulate changing other inputs
    act(() => {
      fireEvent.change(peopleInput, { target: { value: '2' } })
      fireEvent.change(occasionInput, { target: { value: 'Birthday' } })
      fireEvent.focus(occasionInput) // Ensure focus is gained
      fireEvent.blur(occasionInput) // Ensure blur to trigger validation
      manuallySetValidity(occasionInput) // Manually set validity
      fireEvent.change(locationInput, { target: { value: 'Home' } })
      fireEvent.change(commentInput, { target: { value: 'This is a comment' } })
    })

    // Revalidate the form after all changes
    form.reportValidity()

    // Debugging form validation state
    console.log('Form validity:', {
      dateInput: dateInput.validity.valid,
      timeSelect: timeSelect.validity.valid,
      peopleInput: peopleInput.validity.valid,
      occasionInput: occasionInput.validity.valid,
      locationInput: locationInput.validity.valid,
      commentInput: commentInput.validity.valid
    })

    // Assert individual input validity
    expect(dateInput.validity.valid).toBe(true)
    expect(timeSelect.validity.valid).toBe(true)
    expect(peopleInput.validity.valid).toBe(true)
    expect(occasionInput.validity.valid).toBe(true)
    expect(locationInput.validity.valid).toBe(true)
    expect(commentInput.validity.valid).toBe(true)

    // Assert the overall form validity
    expect(form.checkValidity()).toBe(true)

    // Simulate form submission
    fireEvent.click(nextBtn)

    // Assert navigation
    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('step-two', {
        state: {
          date: tomorrowString,
          time: '17:00',
          numberOfPeople: '2',
          occasion: 'Birthday',
          location: 'Home',
          comment: 'This is a comment'
        }
      })
    })
  })
})

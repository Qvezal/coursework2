import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navigation from "@/components/Navigation"
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Navigation />)
 
    const heading = screen.getByRole('heading', { level: 2 })
 
    expect(heading).toBeInTheDocument()
  })
})
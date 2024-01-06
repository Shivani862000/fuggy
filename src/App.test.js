import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './pages/About';
import "@testing-library/jest-dom"

describe('About component', () => {
  it('renders About component correctly', () => {
    render(<About />);

    // Ensure that the main heading is rendered
    expect(screen.getByText('I am Shivani Verma - Frontend Developer')).toBeInTheDocument();

    // Ensure that the experience section is rendered
    expect(screen.getByText('Experience')).toBeInTheDocument();

    // Ensure that project details are rendered
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Swiggy Clone')).toBeInTheDocument();

    // Ensure that project details are rendered with links
    const healthyPlanetLink = screen.getByText('Healthy Planet Website');
    expect(healthyPlanetLink).toBeInTheDocument();

    // Check if the link exists before trying to access its attributes
  

    // Ensure that the technologies and techniques section is rendered
    expect(screen.getByText('Technologies and Techniques Mastered:')).toBeInTheDocument();

    // Ensure that the experience section is rendered with details
    expect(screen.getByText('ICD, Saket — Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Brand Samosa, Noida-13 — Intern Web Developer')).toBeInTheDocument();
  });
});

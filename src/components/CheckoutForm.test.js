import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.queryByText(/checkout form/i);

    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    
    const button = screen.getByRole('button');
    userEvent.click(button);

    const submit = screen.getByTestId('successMessage');
    expect(submit).toBeInTheDocument();

  
});

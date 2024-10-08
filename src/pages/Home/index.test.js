import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {

  it("a list of events is displayed", () => {
    render(<Home />);
    const eventList = screen.getByTestId('event-list');
    expect(eventList).toBeInTheDocument();
  })

  it("a list a people is displayed", () => {
    render(<Home />);
    const peopleElements = screen.getAllByTestId('card-image-people-testid');
    expect(peopleElements.length).toEqual(6);
  })

  it("a footer is displayed", () => {
    const { container } = render(<Home />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

it("an event card, with the last event, is displayed", () => {
    render(<Home />);
    const eventCard = screen.getByTestId('last-event');
    expect(eventCard).toBeInTheDocument();
});
});


import Card from "./Card";
import "./App.css";

const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is card 1 description",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is card 2 description",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is card 3 description",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=300",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is card 4 description",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=300",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is card 5 description",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is card 6 description",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=300",
  },
  {
  id: 12,
    title: "Card 12",
    description: "This is card 1 description",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300",
  },
  {
    id: 7,
    title: "Card 7",
    description: "This is card 2 description",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300",
  },
  {
    id: 8,
    title: "Card 8",
    description: "This is card 8 description",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=300",
  },
  {
    id: 9,
    title: "Card 9",
    description: "This is card 9 description",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=300",
  },
  {
    id: 11,
    title: "Card 11",
    description: "This is card 5 description",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300",
  },
  {
    id: 10,
    title: "Card 10",
    description: "This is card 10 description",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=300",
  },
];

function App() {
  return (
    <div className="container">
      <h2>All the cards are here.</h2>

      <div className="card-container">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

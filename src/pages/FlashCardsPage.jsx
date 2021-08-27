import FlashCards from '../components/FlashCards';
import FlashCard from '../components/FlashCard';
import Header from '../components/Header';
import Main from '../components/Main';
import { allFlashCards } from '../data/allFlashCards';

export default function FlashCardsPage() {
  return (
    <>
      <Header>React-Flash-Cards-v1</Header>

      <Main>
        <FlashCards>
          {allFlashCards.map(({ id, title, description }) => {
            return (
              <FlashCard key={id} title={title} description={description} />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}

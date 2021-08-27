import { useState } from 'react';

export default function FlashCard({
  title = 'Title of Card',
  description = 'Description of Card',
}) {
  const [showTitle, setShowTitle] = useState(true);

  function handleFlashCard() {
    setShowTitle(currentShowTitle => !currentShowTitle);
  }

  const fontSizeClassName = showTitle ? 'text-lg' : 'text-sm';

  return (
    <div
      className={`shadow-lg p-2 m-2 w-80 h-48 cursor-pointer flex flex-row items-center justify-center font-semibold ${fontSizeClassName}`}
      style={{ fontFamily: "'Jetbrains Mono', monospace" }}
      onClick={handleFlashCard}
    >
      {showTitle ? title : description}
    </div>
  );
}

import { useState } from "react";

export default function Toggler() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggler}>{isOpen ? 'Close' : 'Open'}</button>
      {isOpen && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur tempora eaque blanditiis ducimus ab! Nulla exercitationem at expedita mollitia quis magnam dolore autem, fugiat voluptatum, nesciunt doloribus. Corrupti, rerum.
        </p>
      )}

    </div>
  );
}
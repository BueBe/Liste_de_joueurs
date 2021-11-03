import React, { useState } from "react";

function Example() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Ajouter</button>

      <button onClick={() => setCount(count > 0 ? count - 1 : count)}>
        Supprimer
      </button>
    </div>
  );
}

export default Example;

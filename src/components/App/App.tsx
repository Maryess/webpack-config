import { useState } from "react";
import * as styles from "./App.module.scss";

export const App = () => {
  const [state, setState] = useState<number>(0);

  return (
    <div>
      <h3>{state}</h3>
      <button
        className={styles.button}
        onClick={() => setState((prev) => prev + 1)}
      >
        Click
      </button>
    </div>
  );
};

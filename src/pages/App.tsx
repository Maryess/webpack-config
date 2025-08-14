import manPng from "@/assets/man.png";
import ManSvg from "@/assets/man.svg";
import { useState } from "react";
import { Outlet } from "react-router-dom";

//TREE SHAKING
function TODO(a: number) {
  console.log(a);
}

export const App = () => {
  const [state, setState] = useState<number>(0);

  TODO(1231);

  // if (__PLATFORM__ === "desktop") {
  //   return <div>DESKTOPfdfd</div>;
  // } else if (__PLATFORM__ === "mobile") {
  //   return <div>MOBILE</div>;
  // }

  return (
    <div data-testid={"App.DataTestId"}>
      <h1>PlATFORM={__PLATFORM__} </h1>
      <h3>{state}</h3>
      {/* <button
        className={styles.button}
        onClick={() => setState((prev) => prev + 1)}
      >
        Click
      </button> */}
      <div>{manPng}</div>

      <ManSvg
        style={{
          color: "green",
        }}
        width={200}
        height={200}
      />
      <p>fdffdfdfdfd</p>
      <p>fdffdfdfsfsfs</p>
      <p>ewewewfdfdfd</p>
      <Outlet />
    </div>
  );
};

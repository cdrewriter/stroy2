import react from "react";
import Counter from "react-number-counter";

export default function Flip({data}) {

 
  return (
    <>
      {" "}
      <Counter start={0} end={Number(data)} delay={100} />
    </>
  );
}

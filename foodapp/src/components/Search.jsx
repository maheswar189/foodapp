import { useState } from "react";
import { useEffect } from "react";
export default function Search() {
  const [query, setQuery] = useState("pizza");
  //Syntax
  useEffect(() => {
    function demo() {
      console.log("demo function called");
    }
    demo();
  }, [query]);

  return (
    <div className="">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

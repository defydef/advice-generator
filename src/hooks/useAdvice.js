import { useEffect, useState } from "react";

const API_URL = "https://api.adviceslip.com/advice";

export function useAdvice() {
  const [advice, setAdvice] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );
  const [id, setId] = useState("117");
  const [isLoading, setIsLoading] = useState("");
  // const [isInitialLoading, setIsInitialLoading] = useState(true);

  async function getAdvice() {
    try {
      // !isInitialLoading && setIsLoading(true);
      setIsLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw Error();
      const { slip } = await res.json();
      const { id, advice } = slip;
      setId(id);
      setAdvice(advice);
      setIsLoading(false);
    } catch {
      throw Error("Failed to get advice");
    }
  }

  // useEffect(function () {
  //   const controller = new AbortController();
  //   getAdvice();
  //   setIsInitialLoading(false);

  //   //cleanup function
  //   return function () {
  //     controller.abort();
  //   };
  // }, []);
  return { id, advice, isLoading, getAdvice };
}

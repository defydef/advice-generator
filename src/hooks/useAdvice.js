import { useEffect, useState } from "react";

const API_URL = "https://api.adviceslip.com/advice";

export function useAdvice() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState("");

  async function getAdvice() {
    try {
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

  useEffect(function () {
    const controller = new AbortController();
    getAdvice();

    //cleanup function
    return function () {
      controller.abort();
    };
  }, []);
  return { id, advice, isLoading, getAdvice };
}

import { useEffect, useState } from "react";
import { useAdvice } from "../hooks/useAdvice";

function Card() {
  const { id, advice, isLoading, getAdvice } = useAdvice();

  return (
    <main className="flex flex-col justify-center items-center gap-8 pt-8 rounded-[0.625rem] w-[90vw] sm:w-[35vw] bg-[var(--dark-greyish-blue)]">
      <h1 className=" uppercase text-[var(--neon-green)] tracking-[0.21606rem] sm:tracking-[0.25538rem] sm:text-[0.8125rem] text-[0.6875rem]">
        {isLoading ? "" : `Advice #${id}`}
      </h1>
      <p className="text-2xl sm:text-[1.75rem] text-center px-5 sm:px-8 -tracking-[0.01606rem] sm:-tracking-[0.01875rem]">
        {isLoading ? "Loading..." : advice}
      </p>
      <svg
        width="295"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        className="sm:hidden"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
      <img
        src="../images/pattern-divider-desktop.svg"
        alt="Divider"
        className="hidden sm:block max-w-[30vw]"
      />

      <div
        className="grid grid-cols-[1fr_2rem_2rem_1fr] h-[2rem] w-[90vw] cursor-pointer"
        onClick={getAdvice}
      >
        <div className="rounded-full w-[4rem] h-[4rem] bg-[var(--neon-green)] col-start-2 col-span-2 flex justify-center items-center hover:shadow-[0px_0px_40px_0px_var(--neon-green)]">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}

export default Card;

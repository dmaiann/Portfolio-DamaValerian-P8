import { useEffect, useState } from "react";
import React from "react";

const roles = ["Frontend Developer", "UI/UX Designer"];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const speed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((i) => i + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
      {text}
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
}

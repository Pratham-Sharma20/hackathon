"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect = ({
  words,
  className = "",
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, animate, duration, filter]);

  return (
    <h1 className={`text-5xl font-bold leading-tight ${className}`}>
      <motion.div ref={scope} className="inline-block">
        {wordsArray.map((word, idx) => (
          <motion.span
          key={word + idx}
          className="dark:text-white text-black opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}
          {" "}  {/* Add this explicitly after each word */}
        </motion.span>
        
        ))}
      </motion.div>
    </h1>
  );
};

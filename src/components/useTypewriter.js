import { useState, useRef, useEffect } from "react";

const useTypewriter = text => {
  const [currentText, setCurrentText] = useState("");
  const [pos, setPos] = useState(0);

  const refTextArray = useRef(text.split(""));

  useEffect(() => {
    let isUnmounted = false;
    if (pos === text.length) {
      if (isUnmounted) return;
      return;
    }
    const timeoutFunc = () => {
      if (isUnmounted) return;
      setCurrentText(currentText + refTextArray.current[pos]);
      setPos(pos + 1);
    };

    setTimeout(timeoutFunc, 100);

    return () => {
      isUnmounted = true;
      clearTimeout(timeoutFunc);
    };
  }, [pos]);

  return currentText;
};

export default useTypewriter;

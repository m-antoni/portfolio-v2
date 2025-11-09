"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div id="loader" className="dots-fade flex space-x-2">
        <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-black rounded-full animate-bounce delay-200"></div>
        <div className="w-3 h-3 bg-black rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
}

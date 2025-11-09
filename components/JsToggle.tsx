"use client";
import { useEffect } from "react";

export default function JsToggle() {
  useEffect(() => {
    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");
  }, []);

  return null;
}

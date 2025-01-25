"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
const TOKEN = "8jumsfqCoo19FipaX9Kt7x8Qv2cuVQxtNDqVtu9K9Y9y";

export function CopyTokenButton() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button onClick={copyToClipboard} className="Btn ">
      <svg viewBox="0 0 512 512" className="svgIcon" height="1em">
        <path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path>
      </svg>
      {copied ? (
        <>
          <span className="text">Copied Token</span>
        </>
      ) : (
        <>
          <span className="text">BUY $PEPEBAPHOMET</span>
        </>
      )}
      <span className="effect"></span>
    </Button>
  );
}

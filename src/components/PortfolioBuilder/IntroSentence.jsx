import React from "react";

export default function IntroSentence({ firstName, role }) {
  if (!firstName && !role) return null;

  return (
    <div className="p-4 bg-gray-50 border rounded">
      <p>
        Hello, my name is <strong>{firstName || "..."}</strong> and I’m a{" "}
        <strong>{role || "..."}</strong>.
      </p>
    </div>
  );
}

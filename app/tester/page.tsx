"use client";

import React, { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";

export default function LandingPage() {
  const [count, setCount] = useState(0);
  const [icons, setIcons] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (count >= 10) {
      setIcons(prev => [...prev, <FaReact key={prev.length} size={20} color="#61DAFB" />]);
      setCount(0)
    }
  }, [count]);

  return (
    <div className="text-center font-sans p-5">
      <header className="bg-gray-800 text-white p-5 rounded-lg">
        <h1>
          WE DO BE TESTING <FaReact size={20} color="#61DAFB" />
        </h1>
        <p>There is no goal yet, just dumping ideas out on a page</p>
      </header>

      <section className="my-5 p-5 border border-gray-300 rounded-lg">
        <h2>Clicky Counter</h2>
        <p>Increment counter</p>
        <button
          className="bg-blue-400 border-none p-2 px-4 text-lg cursor-pointer rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>

        {/* Conditionally render icons when count reaches 10 */}
        {icons.length > 0 && (
          <div className="mt-4 flex gap-2 justify-center">
            {icons.map((icon, index) => (
              <div key={index} className="animate-bounce">
                {icon}
              </div>
            ))}
          </div>
        )}
      </section>
      <footer className="mt-5 text-sm">
      </footer>

      <div className="mt-8 text-sm text-gray-600 border-t pt-4">
        <p>© {new Date().getFullYear()} Test Project. All rights reserved.</p>
        <p className="mt-1">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}

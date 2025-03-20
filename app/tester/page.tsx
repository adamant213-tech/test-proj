"use client";

import React, { useState } from "react";
import { FaReact } from "react-icons/fa";

export default function LandingPage() {
  const [count, setCount] = useState(0);

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
      </section>

      <footer className="mt-5 text-sm">
        <p>AAAAAAAAAAAAAAAAAAAAA</p>
      </footer>

      {/* Wrap the second div in a parent div */}
      <div className="mt-8 text-sm text-gray-600 border-t pt-4">
        <p>© {new Date().getFullYear()} Test Project. All rights reserved.</p>
        <p className="mt-1">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}

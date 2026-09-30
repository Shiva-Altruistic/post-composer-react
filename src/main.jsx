import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const LIMITS = {
  Twitter: 280,
  LinkedIn: 3000,
};

function PostComposer() {
  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limit = LIMITS[platform];
  const characterCount = post.length;
  const isExceeded = characterCount > limit;

  return (
    <main className="page">
      <section className="composer">
        <h1>Post Composer</h1>
        <p className="subtitle">Create and check your social media post.</p>

        <label htmlFor="platform">Platform</label>
        <select
          id="platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="Twitter">Twitter</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>

        <label htmlFor="post">Post</label>
        <textarea
          id="post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder={`Write your ${platform} post...`}
          rows={9}
        />

        <div className={`counter ${isExceeded ? "exceeded" : ""}`}>
          {characterCount} / {limit} characters
        </div>

        {isExceeded && (
          <div className="error" role="alert">
            Your post exceeds the {platform} character limit of {limit}.
          </div>
        )}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostComposer />
  </React.StrictMode>
);
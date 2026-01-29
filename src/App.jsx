import { useState, useEffect } from "react";
import axios from "axios";

import NavbarHero from "./components/NavbarHero";
import SearchCategories from "./components/SearchCategories";
import ImagesGrid from "./components/ImagesGrid";
import Collections from "./components/Collections";
import Pagination from "./components/Pagination";

function App() {
  const API_URL = "https://api.unsplash.com/search/photos";
  const IMAGES_PER_PAGE = 24;

  const theme = {
    bg: "#000000",
    card: "#0d0d0d",
    accent: "#FF8C00",
    border: "#1a1a1a",
    textMuted: "#737373",
    inputBg: "#050505",
  };

  const [query, setQuery] = useState("Technology");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const categories = ["Student & School", "Technology", "Architecture", "Nature", "Food", "Travel", "Minimal", "Fitness"];
  const collections = [
    { title: "Calm Study", desc: "Focus-friendly desks, books, and soft light.", tag: "STUDY DESK MINIMAL" },
    { title: "Smart Work", desc: "Modern tech, product shots, and sleek setups.", tag: "TECHNOLOGY WORKSPACE" },
    { title: "Urban Lines", desc: "Clean architecture with sharp geometry.", tag: "MODERN ARCHITECTURE FACADE" },
    { title: "Green Escape", desc: "Nature scenes to reset the mood.", tag: "FOREST LANDSCAPE" },
  ];

  const handleSearch = async (searchTerm = query, pageNum = 1) => {
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${searchTerm}&page=${pageNum}&per_page=${IMAGES_PER_PAGE}`,
        {
          headers: { Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}` },
        }
      );
      setImages(data.results);
      setPage(pageNum);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div style={{ backgroundColor: theme.bg, color: "white", minHeight: "100vh", padding: "0 8% 60px 8%", fontFamily: "Inter, system-ui, sans-serif" }}>
      <style>
        {`
          body { margin: 0; padding: 0; background: #000000; }
          button:hover { opacity: 0.85; transition: 0.2s; transform: translateY(-1px); }
          input::placeholder { color: #404040; }
        `}
      </style>

      <NavbarHero theme={theme} />
      <SearchCategories theme={theme} query={query} setQuery={setQuery} handleSearch={handleSearch} categories={categories} images={images} page={page} />
      <ImagesGrid theme={theme} images={images} />
      <Collections theme={theme} collections={collections} setQuery={setQuery} handleSearch={handleSearch} />
      <Pagination theme={theme} page={page} query={query} handleSearch={handleSearch} />
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Hero from "./Pages/Hero";

function App() {
  return (
    <main class="bg-[#17252A]">
      <Header />
      <div class="min-h-screen flex flex-col items-center justify-center">
        <Hero />
      </div>
    </main>
  );
}

export default App;

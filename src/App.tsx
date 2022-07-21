import { Header } from "./components/Header";
import { Extractor } from "./components/Extractor";

import { ThemeContextProvider } from "./context/theme";

export function App() {
  return (
    <>
      <section className="flex flex-wrap h-screen py-7 px-7 bg-slate-300">
        <div className="w-full bg-slate-50 rounded-lg shadow-md">
          <ThemeContextProvider>
            <Header />
            <Extractor />
          </ThemeContextProvider>
        </div>
      </section>
    </>
  )
}
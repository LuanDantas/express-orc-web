import { Header } from "./components/Header";
import { Extractor } from "./components/Extractor";

import { ThemeContextProvider } from "./context/theme";
import { SlideOverContextProvider } from "./context/slideOver";
import { ResultContextProvider } from "./context/results";
import { StagesContextProvider } from "./context/stages";

export function App() {
  return (
    <>
      <section className="flex flex-wrap h-screen py-7 px-7 bg-slate-300">
        <div className="w-full bg-slate-50 rounded-lg shadow-md">
          <ThemeContextProvider>
            <StagesContextProvider>
              <ResultContextProvider>
                <SlideOverContextProvider>
                  <Header />
                  <Extractor />
                </SlideOverContextProvider>
              </ResultContextProvider>
            </StagesContextProvider>
          </ThemeContextProvider>
        </div>
      </section>
    </>
  )
}
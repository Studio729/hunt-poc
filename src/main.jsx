import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
// import { NextUIProvider } from "@nextui-org/react"
import "./index.css"
import clsx from "clsx"
import Navigation from "./components/navigation-menu/navigation-menu.jsx"

createRoot(document.getElementById("root")).render(
  // <NextUIProvider>
    <BrowserRouter>
      <div className={clsx("min-h-screen text-foreground bg-background")}>
        <div className="relative flex flex-col">
          <main className="container mx-auto max-w-screen-2xl flex-grow">
          <Navigation />
            <App />
          </main>
        </div>
      </div>
    </BrowserRouter>
  // </NextUIProvider>,
)

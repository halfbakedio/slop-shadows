import { ShadowDemo } from "@/components/shadow-demo"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <header className="fixed top-0 right-0 z-50 flex justify-end p-4">
        <ThemeToggle />
      </header>
      <ShadowDemo />
    </ThemeProvider>
  )
}

export default App
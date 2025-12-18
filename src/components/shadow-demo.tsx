import { useShadowState } from "@/hooks/use-shadow-state"
import { ShadowDisplay } from "./shadow-display"
import { ShadowControls } from "./shadow-controls"

export function ShadowDemo() {
  const {
    mode,
    preset,
    custom,
    currentShadowCSS,
    currentTailwindClass,
    setMode,
    setPreset,
    updateCustom,
  } = useShadowState()

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl p-6 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Shadow Demonstration</h1>
          <p className="mt-2 text-muted-foreground">
            Explore how Tailwind CSS shadows work and customize them in
            real-time
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ShadowDisplay
            shadowCSS={currentShadowCSS}
            tailwindClass={currentTailwindClass}
          />
          <ShadowControls
            mode={mode}
            preset={preset}
            custom={custom}
            onModeChange={setMode}
            onPresetChange={setPreset}
            onCustomChange={updateCustom}
          />
        </div>
      </div>
    </div>
  )
}

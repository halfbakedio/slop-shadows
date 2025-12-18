import { type ShadowMode } from "@/hooks/use-shadow-state"
import { type ShadowPreset, type CustomShadowState } from "@/lib/shadow-utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShadowPresetControls } from "./shadow-preset-controls"
import { ShadowCustomControls } from "./shadow-custom-controls"

interface ShadowControlsProps {
  mode: ShadowMode
  preset: ShadowPreset
  custom: CustomShadowState
  onModeChange: (mode: ShadowMode) => void
  onPresetChange: (preset: ShadowPreset) => void
  onCustomChange: (updates: Partial<CustomShadowState>) => void
}

export function ShadowControls({
  mode,
  preset,
  custom,
  onModeChange,
  onPresetChange,
  onCustomChange,
}: ShadowControlsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shadow Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-2">
          <Button
            variant={mode === "preset" ? "default" : "outline"}
            onClick={() => onModeChange("preset")}
            className="flex-1"
          >
            Preset
          </Button>
          <Button
            variant={mode === "custom" ? "default" : "outline"}
            onClick={() => onModeChange("custom")}
            className="flex-1"
          >
            Custom
          </Button>
        </div>

        {mode === "preset" ? (
          <ShadowPresetControls
            preset={preset}
            onPresetChange={onPresetChange}
          />
        ) : (
          <ShadowCustomControls
            custom={custom}
            onCustomChange={onCustomChange}
          />
        )}
      </CardContent>
    </Card>
  )
}

import { type ShadowPreset } from "@/lib/shadow-utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldLabel } from "@/components/ui/field"

interface ShadowPresetControlsProps {
  preset: ShadowPreset
  onPresetChange: (preset: ShadowPreset) => void
}

const PRESET_OPTIONS: { value: ShadowPreset; label: string }[] = [
  { value: "shadow-none", label: "None" },
  { value: "shadow-sm", label: "Small" },
  { value: "shadow", label: "Default" },
  { value: "shadow-md", label: "Medium" },
  { value: "shadow-lg", label: "Large" },
  { value: "shadow-xl", label: "Extra Large" },
  { value: "shadow-2xl", label: "2X Large" },
  { value: "shadow-inner", label: "Inner" },
]

export function ShadowPresetControls({
  preset,
  onPresetChange,
}: ShadowPresetControlsProps) {
  return (
    <Field>
      <FieldLabel>Shadow Preset</FieldLabel>
      <Select
        value={preset}
        onValueChange={(value: ShadowPreset | null) => {
          if (value) onPresetChange(value)
        }}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {PRESET_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}

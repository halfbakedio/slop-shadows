import { type CustomShadowState, SHADOW_COLORS } from "@/lib/shadow-utils"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"
import { Label } from "@/components/ui/label"

interface ShadowCustomControlsProps {
  custom: CustomShadowState
  onCustomChange: (updates: Partial<CustomShadowState>) => void
}

export function ShadowCustomControls({
  custom,
  onCustomChange,
}: ShadowCustomControlsProps) {
  return (
    <div className="flex flex-col gap-6">
      <Field>
        <div className="flex items-center justify-between">
          <FieldLabel>Offset X: {custom.offsetX}px</FieldLabel>
        </div>
        <Slider
          value={[custom.offsetX]}
          onValueChange={(value: number | readonly number[]) => {
            const val = Array.isArray(value) ? value[0] : value
            onCustomChange({ offsetX: val })
          }}
          min={-50}
          max={50}
        />
      </Field>

      <Field>
        <div className="flex items-center justify-between">
          <FieldLabel>Offset Y: {custom.offsetY}px</FieldLabel>
        </div>
        <Slider
          value={[custom.offsetY]}
          onValueChange={(value: number | readonly number[]) => {
            const val = Array.isArray(value) ? value[0] : value
            onCustomChange({ offsetY: val })
          }}
          min={-50}
          max={50}
        />
      </Field>

      <Field>
        <div className="flex items-center justify-between">
          <FieldLabel>Blur: {custom.blur}px</FieldLabel>
        </div>
        <Slider
          value={[custom.blur]}
          onValueChange={(value: number | readonly number[]) => {
            const val = Array.isArray(value) ? value[0] : value
            onCustomChange({ blur: val })
          }}
          min={0}
          max={100}
        />
      </Field>

      <Field>
        <div className="flex items-center justify-between">
          <FieldLabel>Spread: {custom.spread}px</FieldLabel>
        </div>
        <Slider
          value={[custom.spread]}
          onValueChange={(value: number | readonly number[]) => {
            const val = Array.isArray(value) ? value[0] : value
            onCustomChange({ spread: val })
          }}
          min={-50}
          max={50}
        />
      </Field>

      <Field>
        <FieldLabel>Shadow Color</FieldLabel>
        <Select
          value={custom.color}
          onValueChange={(value: string | null) => {
            if (value) onCustomChange({ color: value })
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SHADOW_COLORS.map((color) => (
              <SelectItem key={color.value} value={color.value}>
                {color.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <div className="flex items-center gap-2">
        <Checkbox
          id="inset"
          checked={custom.inset}
          onCheckedChange={(checked: boolean | "indeterminate") =>
            onCustomChange({ inset: checked === true })
          }
        />
        <Label htmlFor="inset" className="cursor-pointer">
          Inset Shadow
        </Label>
      </div>
    </div>
  )
}

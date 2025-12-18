export type ShadowPreset =
  | "shadow-none"
  | "shadow-sm"
  | "shadow"
  | "shadow-md"
  | "shadow-lg"
  | "shadow-xl"
  | "shadow-2xl"
  | "shadow-inner"

export interface CustomShadowState {
  offsetX: number
  offsetY: number
  blur: number
  spread: number
  color: string
  inset: boolean
}

export const SHADOW_PRESETS: Record<ShadowPreset, string> = {
  "shadow-none": "none",
  "shadow-sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "shadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  "shadow-md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  "shadow-lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  "shadow-xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "shadow-2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  "shadow-inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
}

export interface ShadowColor {
  label: string
  value: string
}

export const SHADOW_COLORS: ShadowColor[] = [
  { label: "Very Light", value: "rgb(0 0 0 / 0.05)" },
  { label: "Light", value: "rgb(0 0 0 / 0.1)" },
  { label: "Medium", value: "rgb(0 0 0 / 0.25)" },
  { label: "Dark", value: "rgb(0 0 0 / 0.5)" },
  { label: "Black", value: "rgb(0 0 0 / 1)" },
]

export function presetToCSS(preset: ShadowPreset): string {
  return SHADOW_PRESETS[preset]
}

export function customToCSS(custom: CustomShadowState): string {
  const { offsetX, offsetY, blur, spread, color, inset } = custom
  const insetPrefix = inset ? "inset " : ""
  return `${insetPrefix}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`
}

export function presetToCustom(preset: ShadowPreset): CustomShadowState {
  // Parse the preset shadow into custom values
  // For simplicity, we'll use the first shadow layer if there are multiple
  const cssValue = SHADOW_PRESETS[preset]

  if (cssValue === "none") {
    return {
      offsetX: 0,
      offsetY: 0,
      blur: 0,
      spread: 0,
      color: "rgb(0 0 0 / 0.1)",
      inset: false,
    }
  }

  // Check if it's an inset shadow
  const isInset = cssValue.startsWith("inset")
  const shadowValue = isInset ? cssValue.replace("inset ", "") : cssValue

  // Split by comma to get individual shadows (take the first one)
  const firstShadow = shadowValue.split(",")[0].trim()

  // Parse the shadow values
  // Format: "offsetX offsetY blur spread color"
  const parts = firstShadow.split(/\s+/)

  // Extract numeric values
  const offsetX = parseInt(parts[0]) || 0
  const offsetY = parseInt(parts[1]) || 0
  const blur = parseInt(parts[2]) || 0
  const spread = parseInt(parts[3]) || 0

  // Extract color (remaining parts)
  const color = parts.slice(4).join(" ") || "rgb(0 0 0 / 0.1)"

  return {
    offsetX,
    offsetY,
    blur,
    spread,
    color,
    inset: isInset,
  }
}

export const DEFAULT_CUSTOM_STATE: CustomShadowState = {
  offsetX: 0,
  offsetY: 4,
  blur: 6,
  spread: 0,
  color: "rgb(0 0 0 / 0.1)",
  inset: false,
}

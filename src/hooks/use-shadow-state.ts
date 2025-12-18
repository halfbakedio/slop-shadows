import { useState, useMemo, useCallback, useEffect } from "react"
import {
  type ShadowPreset,
  type CustomShadowState,
  presetToCSS,
  customToCSS,
  presetToCustom,
  DEFAULT_CUSTOM_STATE,
} from "@/lib/shadow-utils"

export type ShadowMode = "preset" | "custom"

export interface ShadowState {
  mode: ShadowMode
  preset: ShadowPreset
  custom: CustomShadowState
  currentShadowCSS: string
  currentTailwindClass: string
  setMode: (mode: ShadowMode) => void
  setPreset: (preset: ShadowPreset) => void
  updateCustom: (updates: Partial<CustomShadowState>) => void
}

const STORAGE_KEY = "shadow-demo-state"

interface StoredState {
  mode: ShadowMode
  preset: ShadowPreset
  custom: CustomShadowState
}

function loadStateFromStorage(): StoredState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error("Failed to load shadow state from localStorage:", error)
  }
  return null
}

function saveStateToStorage(state: StoredState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.error("Failed to save shadow state to localStorage:", error)
  }
}

export function useShadowState(): ShadowState {
  // Load initial state from localStorage or use defaults
  const initialState = loadStateFromStorage()

  const [mode, setModeState] = useState<ShadowMode>(
    initialState?.mode ?? "preset"
  )
  const [preset, setPresetState] = useState<ShadowPreset>(
    initialState?.preset ?? "shadow-md"
  )
  const [custom, setCustom] = useState<CustomShadowState>(
    initialState?.custom ?? DEFAULT_CUSTOM_STATE
  )

  // Compute the current shadow CSS value
  const currentShadowCSS = useMemo(() => {
    if (mode === "preset") {
      return presetToCSS(preset)
    }
    return customToCSS(custom)
  }, [mode, preset, custom])

  // Compute the current Tailwind class name
  const currentTailwindClass = useMemo(() => {
    if (mode === "preset") {
      return preset
    }
    return "Custom Shadow"
  }, [mode, preset])

  // Handle mode changes
  const setMode = useCallback(
    (newMode: ShadowMode) => {
      if (newMode === "custom" && mode === "preset") {
        // When switching from preset to custom, populate custom values from preset
        setCustom(presetToCustom(preset))
      }
      setModeState(newMode)
    },
    [mode, preset]
  )

  // Handle preset changes
  const setPreset = useCallback((newPreset: ShadowPreset) => {
    setPresetState(newPreset)
  }, [])

  // Handle custom value updates
  const updateCustom = useCallback((updates: Partial<CustomShadowState>) => {
    setCustom((prev) => ({ ...prev, ...updates }))
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    saveStateToStorage({ mode, preset, custom })
  }, [mode, preset, custom])

  return {
    mode,
    preset,
    custom,
    currentShadowCSS,
    currentTailwindClass,
    setMode,
    setPreset,
    updateCustom,
  }
}

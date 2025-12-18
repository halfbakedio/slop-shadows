import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ShadowDisplayProps {
  shadowCSS: string
  tailwindClass: string
}

export function ShadowDisplay({
  shadowCSS,
  tailwindClass,
}: ShadowDisplayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shadow Preview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex min-h-[300px] items-center justify-center rounded-lg bg-muted p-8">
          <div
            className="flex h-[200px] w-[200px] items-center justify-center rounded-lg border border-border bg-card text-card-foreground"
            style={{ boxShadow: shadowCSS }}
          >
            <span className="text-lg font-medium">Shadow Box</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-sm font-medium">Tailwind Class</h3>
            <pre className="rounded-md bg-muted p-3 text-sm text-muted-foreground overflow-x-auto">
              <code>{tailwindClass}</code>
            </pre>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium">CSS Value</h3>
            <pre className="rounded-md bg-muted p-3 text-sm text-muted-foreground overflow-x-auto">
              <code>box-shadow: {shadowCSS};</code>
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

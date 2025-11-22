"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RequestForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const body = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        throw new Error("Failed to send request. Please try again.")
      }

      setStatus("success")
      form.reset()
    } catch (err: any) {
      setStatus("error")
      setError(err?.message ?? "Something went wrong. Please try again.")
    } finally {
      setStatus((prev) => (prev === "loading" ? "idle" : prev))
    }
  }

  return (
    <Card className="bg-background text-foreground">
      <CardContent className="pt-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-bold mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 rounded-md border border-input bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-bold mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              className="w-full px-4 py-3 rounded-md border border-input bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a project type</option>
              <option value="storefront">Storefront Signage</option>
              <option value="vehicle">Vehicle Wraps</option>
              <option value="channel">Channel Letters</option>
              <option value="monument">Monument Signs</option>
              <option value="banners">Banners & Displays</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell us about your project, including dimensions, materials, timeline, and any specific requirements..."
              className="w-full px-4 py-3 rounded-md border border-input bg-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Submit Request"}
          </Button>

          {status === "success" && (
            <p className="text-sm text-green-600 text-center mt-2">
              Thank you! We&apos;ll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 text-center mt-2">
              {error}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

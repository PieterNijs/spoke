import './Frame47.css'

// Figma: "Frame 47" (4:6) in "Demo: Spoke booking card (sloppy vs clean)".
// Coded exactly as it is in Figma, on purpose: absolute positions, raw hex
// values instead of tokens, rectangles behind text instead of Tag and Button
// components, fixed text, and no interactive elements.
export function Frame47() {
  return (
    <div className="frame-47">
      <p className="frame-47__text-3">Flat tyre repair</p>
      <p className="frame-47__text-4">Tube or tyre swap, any wheel size.</p>
      <div className="frame-47__rectangle-12" />
      <p className="frame-47__text-5">30 min</p>
      <div className="frame-47__rectangle-13" />
      <p className="frame-47__text-6">All bikes</p>
      <p className="frame-47__text-7">€15</p>
      <p className="frame-47__text-8">Next free slot: today at 16:30</p>
      <div className="frame-47__rectangle-14" />
      <p className="frame-47__text-9">Book this repair</p>
    </div>
  )
}

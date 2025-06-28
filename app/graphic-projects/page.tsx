import GraphicGallery from "../components/GraphicGallery"

export default function GraphicProjectsSection() {
  return (
    <section className="text-gray-300">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col mb-12">
          <div className="h-1 bg-gradient-to-r from-[#8c4ac5] via-[#5dc0e4] to-[#d13ab8] rounded overflow-hidden" />
        </div>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-wide mb-4">Graphic Projects</h1>
          <p className="text-lg text-gray-600">
            A collection of my creative graphic design projects—from logo and branding to social media visuals.
          </p>
        </div>

        
        <GraphicGallery />
      </div>
    </section>
  )
}

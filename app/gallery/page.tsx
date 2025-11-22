import fs from "fs"
import path from "path"
import Image from "next/image"

export default function GalleryPage() {
  // Folder inside /public
  const signsDir = path.join(process.cwd(), "public", "signs")

  // Read all filenames in /public/signs
  const files = fs.readdirSync(signsDir)

  // Filter images only (jpg, jpeg, png, webp)
  const galleryImages = files
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file, index) => ({
      id: index + 1,
      src: `/signs/${file}`,
      alt: file.replace(/[-_]/g, " ").replace(/\.(jpg|jpeg|png|webp)$/i, ""),
    }))

  // Per-image cropping / zoom overrides
  const imageOverrides: Record<
    string,
    { extraClass?: string; objectPosition?: string }
  > = {
    // 👉 Replace these keys with your real filenames from /public/signs
    "/signs/3d-home-center.jpg": {
      extraClass: "scale-90",
      objectPosition: "center center",
    },
    "/signs/black-friday.jpg": {
      extraClass: "scale-90",
      objectPosition: "center top",
    },
    "/signs/capital-one.jpg": {
      extraClass: "scale-110",
      objectPosition: "left center",
    },
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Explore our collection of stunning signage projects. Each piece
              represents our commitment to excellence, creativity, and
              craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => {
              const override = imageOverrides[image.src] ?? {}

              return (
                <div
                  key={image.id}
                  className="relative aspect-square overflow-hidden rounded-lg bg-muted hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                      override.extraClass ?? ""
                    }`}
                    style={
                      override.objectPosition
                        ? { objectPosition: override.objectPosition }
                        : undefined
                    }
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default function SocialShowcase() {
  // Replace these with actual YouTube and TikTok links
  const youtubeLink = "YOUR_YOUTUBE_CHANNEL_OR_VIDEO_URL"
  const tiktokLink = "YOUR_TIKTOK_PROFILE_URL"

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance">Follow Our Journey</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* YouTube Embed */}
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeLink}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Watch Us on YouTube</h3>
              <p className="text-muted-foreground">See our latest projects and behind-the-scenes content</p>
            </div>
          </div>

          {/* TikTok Embed */}
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <blockquote className="tiktok-embed" cite={tiktokLink} data-video-id={tiktokLink}>
                <section>
                  <a target="_blank" rel="noopener noreferrer" href={tiktokLink}>
                    @expertsigns
                  </a>
                </section>
              </blockquote>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Follow Us on TikTok</h3>
              <p className="text-muted-foreground">Quick tips, design inspiration, and creative content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

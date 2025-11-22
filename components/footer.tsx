import Link from "next/link"
import { Clock, Phone, Mail, MapPin, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="text-secondary-foreground">
      <div className="-ml-4 w-full px-4 py-12">

        {/* Full-width, centered grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start max-w-7xl mx-auto w-full">

          <div className="text-left">
            <h3 className="text-3xl font-serif font-bold mb-4">Expert Signs & Graphics</h3>
            <p className="leading-relaxed">
              Exceed Your Vision. We combine cutting-edge design with meticulous craftsmanship to create signage
              that not only communicates, but captivates. Our state-licensed team brings decades of experience and
              unwavering dedication to safety to every project.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-center">
            <div className="text-left w-full max-w-fit">
              <h3 className="text-3xl font-serif font-bold mb-4">Contact Us</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <div>
                    <div>(225) 421-1288</div>
                    <div className="text-sm flex items-center gap-1 mt-1">
                      <MessageSquare size={14} />
                      <span>24/7 Cell & WhatsApp</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <span>info@expertsigns.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>9375 Florida Blvd, Baton Rouge, LA 70815</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:justify-end">
            <div className="text-left">
              <h3 className="text-3xl font-serif font-bold mb-4">Hours</h3>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span className="font-semibold">Mon-Fri:</span>
                </div>
                <div className="ml-7">9:30 AM - 4:30 PM</div>
                <div className="flex items-center gap-2 mt-2">
                  <Clock size={18} />
                  <span className="font-semibold">Saturday:</span>
                </div>
                <div className="ml-7">9:30 AM - 3:00 PM</div>
                <div className="flex items-center gap-2 mt-2">
                  <Clock size={18} />
                  <span className="font-semibold">Sunday:</span>
                </div>
                <div className="ml-7">Closed</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center text-secondary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Expert Signs & Graphics. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

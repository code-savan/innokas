export default function PaymentWarning() {
  return (
    <div className="fixed inset-0 bg-black/95 text-white flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-3xl">
        <div className="border border-red-500/20 rounded-lg backdrop-blur-md bg-white/5">
          <div className="p-8">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-red-500">
                  Payment Required
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-2xl font-light leading-relaxed text-white/80">
                  Access to this website is currently restricted due to pending developer compensation.
                </p>
                <p className="text-base text-white/60">
                  The development team has suspended services until outstanding payments are resolved.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="https://wa.link/zwun1d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors duration-200 px-5 py-3 rounded-md text-sm font-medium"
                >
                  <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.869.518 3.668 1.475 5.235L2.038 21.98l4.821-1.396c1.549.929 3.324 1.416 5.143 1.416 5.522 0 9.999-4.477 9.999-9.999 0-5.522-4.477-9.999-9.999-9.999zm0 1.5c4.69 0 8.499 3.809 8.499 8.499s-3.809 8.499-8.499 8.499c-1.671 0-3.293-.485-4.688-1.401l-.237-.157-2.467.714.721-2.433-.165-.251c-.945-1.442-1.445-3.098-1.445-4.971 0-4.69 3.809-8.499 8.499-8.499z"/>
                  </svg>
                  <span>Contact Developer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

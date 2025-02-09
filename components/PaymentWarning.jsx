export default function PaymentWarning() {
    return (
      <div className="  bg-red-600 text-white p-4 border-b-4 shadow-lg animate-pulse rounded-lg">
        <div className="max-w-6xl mx-auto flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <span className="text-3xl">⚠️</span>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Payment Dispute Alert</h3>
            <p className="md:text-sm text-base leading-tight">
              This website&apos;s functionality may be impaired due to unresolved developer payments.
              The owners/contractors have failed to settle the agreed software development fees.
            </p>
         
          </div>
        </div>
      </div>
    )
  }

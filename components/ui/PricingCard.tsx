import Button from "./Button"

interface PricingCardProps {
  title: string
  price: number
  description: string
  features: string[]
  isPopular?: boolean
  stripeLink: string
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  stripeLink,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-lg border ${isPopular ? "border-indigo-600 shadow-lg" : "border-gray-200"} bg-white p-6 transition-all hover:shadow-md`}
    >
      {isPopular && (
        <div className="mb-4">
          <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-bold tracking-tight text-gray-900">{price}€</span>
        <span className="ml-1 text-sm font-medium text-gray-500">one-time</span>
      </div>

      <p className="mt-4 text-sm text-gray-500">{description}</p>

      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 text-sm text-gray-500">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href={stripeLink} variant={isPopular ? "primary" : "outline"} className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  )
}


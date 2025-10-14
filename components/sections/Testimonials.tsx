export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by designers worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Here's what our customers have to say about
            {process.env.NEXT_PUBLIC_STORE_NAME}.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-base text-gray-500">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "UI Designer",
    quote: `${process.env.NEXT_PUBLIC_STORE_NAME} has become an essential part of my design toolkit. The icons are beautifully crafted and incredibly versatile.`,
  },
  {
    name: "Michael Chen",
    role: "Frontend Developer",
    quote:
      "The integration was seamless. I love how easy it is to customize these icons to match our brand guidelines.",
  },
  {
    name: "Emma Rodriguez",
    role: "Product Manager",
    quote: `We've received numerous compliments on our UI since implementing ${process.env.NEXT_PUBLIC_STORE_NAME}. They've elevated our product's visual appeal.`,
  },
];

export default function Reviews() {
  return (
    <section id="testimonials" className="py-10 lg:py-20 bg-background-color">
      <div className="container mx-auto">
        <p className="uppercase tracking-wider mb-8 text-gray-600 text-center">
          What customers are saying
        </p>
        <div className="flex flex-col md:flex-row md:-mx-3">
          <div className="flex-1 px-3">
            <div
              className="p-12 rounded-lg border border-solid border-green-tx mb-8"
              style={{ boxShadow: "0 10px 28px rgba(0,0,0,.60)" }}
            >
              <p className="text-xl font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
              <p className="mt-6">
                Eu lobortis elementum nibh tellus molestie nunc non blandit
                massa. Sit amet consectetur adipiscing elit duis.
              </p>
              <div className="flex items-center mt-8">
                <img
                  className="w-12 h-12 mr-4 rounded-full"
                  src="/images/team/vit.jpg"
                  alt="Jane Doe"
                />
                <div>
                  <p>Jane Doe</p>
                  <p className="text-sm text-gray-600">
                    Director of Research and Data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

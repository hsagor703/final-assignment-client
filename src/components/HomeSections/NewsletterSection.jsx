export function NewsletterSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-blue-100 mb-8">
          Get the latest updates, best practices, and product news from
          AssetVerse delivered straight to your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-96 px-5 py-3 rounded-lg text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-blue-100 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

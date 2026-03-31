import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <p className="text-8xl mb-6">🏥</p>
        <h1 className="font-display text-5xl font-bold text-primary-700 mb-3">404</h1>
        <h2 className="font-display text-2xl font-bold text-slate-800 mb-4">Page Not Found</h2>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">Go Back Home</Link>
          <Link to="/contact" className="btn-outline">Contact Support</Link>
        </div>
      </div>
    </section>
  )
}

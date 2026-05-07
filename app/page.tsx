export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Shopify Performance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find What's Slowing Down{' '}
          <span className="text-[#58a6ff]">Your Shopify Store</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automated Lighthouse audits, unused CSS/JS detection, and image optimization analysis — delivered as a clear, actionable report in minutes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Auditing — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Lighthouse Audits', desc: 'Full performance, accessibility, and SEO scores for every key page.' },
            { title: 'Unused Asset Detection', desc: 'Pinpoint dead CSS and JS bloating your theme bundle.' },
            { title: 'Image Optimization', desc: 'Flag oversized, uncompressed, or missing next-gen format images.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited store scans',
              'Full Lighthouse audit reports',
              'Unused CSS & JS detection',
              'Image optimization analysis',
              'Actionable fix recommendations',
              'Email report delivery'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the scanner work?',
              a: 'We crawl your Shopify storefront, run Lighthouse audits on key pages, and parse your theme assets to detect unused code and unoptimized images. Results are compiled into a structured report.'
            },
            {
              q: 'Do I need to install anything on my store?',
              a: 'No. Just provide your store URL. Our scanner works externally — no Shopify app install or code changes required.'
            },
            {
              q: 'How often can I run audits?',
              a: 'As often as you like. Run a scan after every theme update or app install to catch regressions before they hurt your conversion rate.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Shopify Theme Performance Audit. All rights reserved.
      </footer>
    </main>
  )
}

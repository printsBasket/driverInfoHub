import Link from 'next/link'

interface Crumb { label: string; href?: string }

interface PageHeroProps {
  kicker: string
  title: string               // supports <br/> via dangerouslySetInnerHTML — pass plain string
  accentWords?: string        // last part of title rendered in blue
  description: string
  breadcrumbs: Crumb[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  stats?: { num: string; label: string }[]
  accentColor?: string        // defaults to blue
}

export default function PageHero({
  kicker,
  title,
  accentWords,
  description,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  stats,
}: PageHeroProps) {
  return (
    <section className="ph-wrap" aria-label={kicker}>
      {/* geometric decoration — no image */}
      <div className="ph-geo ph-geo-1" aria-hidden="true" />
      <div className="ph-geo ph-geo-2" aria-hidden="true" />
      <div className="ph-geo ph-geo-3" aria-hidden="true" />
      <div className="ph-noise"        aria-hidden="true" />

      <div className="container ph-inner">

        {/* breadcrumb */}
        <nav className="ph-bread" aria-label="Breadcrumb">
          <ol>
            {breadcrumbs.map((c, i) => (
              <li key={i} aria-current={i === breadcrumbs.length - 1 ? 'page' : undefined}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>

        {/* kicker pill */}
        <div className="ph-kicker">
          <span className="ph-kicker-dot" aria-hidden="true" />
          {kicker}
        </div>

        {/* headline */}
        <h1 className="ph-title">
          {accentWords
            ? <>{title} <span className="ph-accent">{accentWords}</span></>
            : title
          }
        </h1>

        {/* description */}
        <p className="ph-desc">{description}</p>

        {/* CTA buttons */}
        {(primaryCta || secondaryCta) && (
          <div className="ph-actions">
            {primaryCta && (
              <Link href={primaryCta.href} className="ph-btn-primary">
                {primaryCta.label}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="ph-btn-ghost">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}

        {/* optional stats row */}
        {stats && stats.length > 0 && (
          <div className="ph-stats">
            {stats.map((s, i) => (
              <div key={i} className="ph-stat">
                <span className="ph-stat-num">{s.num}</span>
                <span className="ph-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

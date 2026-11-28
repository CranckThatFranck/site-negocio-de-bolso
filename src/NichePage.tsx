import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Smartphone, MonitorDot } from 'lucide-react';
import { NICHES, NicheConfig, PLAY_STORE_URL, WEB_APP_URL } from './data/siteContent';

interface NichePageProps {
  niche: NicheConfig;
}

export default function NichePage({ niche }: NichePageProps) {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#F4F4F5] font-sans">
      <header className="border-b border-white/10 bg-[#09090B]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-white font-semibold">
            <img src="/ic_wallet_icon_dark_512.svg" alt="Negócio de Bolso" className="h-8 w-8" />
            <span>Negócio de Bolso</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-14">
        <section className="space-y-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold uppercase tracking-wider">
            {niche.eyebrow} · v1.2.1
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {niche.headline}
          </h1>
          <p className="text-lg text-[#A1A1AA] max-w-3xl leading-relaxed">
            {niche.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#052e1e] font-bold transition"
            >
              <Smartphone className="h-5 w-5" />
              {niche.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WEB_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold transition"
            >
              <MonitorDot className="h-5 w-5 text-[#10B981]" />
              Acessar Painel Web
            </a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {niche.highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#111216] border border-white/10 space-y-3"
            >
              <CheckCircle2 className="h-6 w-6 text-[#10B981]" />
              <h2 className="text-lg font-bold text-white">{item.title}</h2>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="pt-8 border-t border-white/10 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#A1A1AA]">
            Explore outros segmentos
          </h3>
          <div className="flex flex-wrap gap-3">
            {NICHES.filter((n) => n.slug !== niche.slug).map((other) => (
              <Link
                key={other.slug}
                to={other.route}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-[#D4D4D8] transition"
              >
                {other.name}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

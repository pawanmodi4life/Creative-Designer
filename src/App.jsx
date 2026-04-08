import { Bot, Box, Clapperboard, Lightbulb, MonitorPlay, PenTool, Presentation, Sparkles } from 'lucide-react';

export default function PawanModiAgencyPortfolio() {
  const experiences = [
    {
      role: 'Creative Head - India',
      company: 'STORY Experiences',
      meta: 'India / Noida · May 2018 – Current',
      points: [
        'Led end-to-end creative development for 50+ corporate and brand events across India and international markets.',
        'Designed high-impact stages, exhibitions, and immersive experiences for clients including HCLTech, Havells, Polycab, BCG, Nokia, Lubrizol, Corning, HCLSoftware, and Konica Minolta.',
        'Worked closely with operations, content, and client servicing teams to align strategy, execution, and creative vision.',
        'Mentored junior designers and freelancers while managing creative timelines and design approvals.',
        'Specialized in 3D mockups, stage aesthetics, branding zones, and themed installations.'
      ]
    },
    {
      role: 'Sr. Graphic Designer & Editor',
      company: 'Velocity India',
      meta: 'New Delhi, India · June 2016 – February 2018',
      points: [
        'Created marketing materials including posters, banners, flyers, and packaging for print and digital media.',
        'Led branding initiatives, designing logos and promotional materials that improved brand visibility.',
        'Contributed to multiple campaign launches that increased audience engagement across platforms.'
      ]
    },
    {
      role: 'Graphics Designer',
      company: 'Chemical and Metallurgical Design Co. Ltd',
      meta: 'New Delhi, India · August 2014 – June 2016',
      points: [
        'Designed book covers, layouts, and marketing materials to strengthen publishing-led brand visibility.',
        'Balanced aesthetic direction with functional communication requirements to deliver client-centric design solutions.'
      ]
    },
    {
      role: 'Graphic Designer',
      company: 'Archies Ltd',
      meta: 'New Delhi, India · July 2013 – July 2014',
      points: [
        'Designed templates for greeting cards, coffee mugs, notebooks, and retail-facing product lines.',
        'Developed innovative visual concepts for marketing materials and packaging across print and digital platforms.'
      ]
    },
    {
      role: 'Graphic Designer (Internship / Trainee)',
      company: 'PerceptH Pvt Ltd',
      meta: 'New Delhi, India · April 2013 – July 2013',
      points: [
        'Designed banners, hoardings, brochures, leaflets, standees, and newspaper ads for visibility-led campaigns.',
        'Created branding materials including visiting cards, letterheads, bill books, logos, and style guides.'
      ]
    }
  ];

  const skills = [
    'Creative Direction',
    'Creative Strategy & Concept Development',
    'Experiential Marketing',
    'Large-Scale Experiential Design',
    'Immersive Brand Installations',
    'Spatial Storytelling & Stage Architecture',
    'Visual Storytelling',
    'Cross-Functional Creative Leadership'
  ];

  const highlights = [
    'Concept-led event design translating business strategy into immersive spatial storytelling',
    'Expertise in stage design, 3D visualisation, and environment-led brand experiences',
    'Advanced use of tools: Photoshop, Illustrator, After Effects, 3D mockups & presentation design systems',
    'Leveraging AI for concept generation, moodboards, storytelling frameworks, and rapid creative prototyping'
  ];

  const focusTags = [
    { label: 'Concept Design', icon: Lightbulb },
    { label: 'Spatial Storytelling', icon: Sparkles },
    { label: 'Stage Architecture', icon: Clapperboard },
    { label: '3D Visualisation', icon: Box },
    { label: 'Photoshop', icon: PenTool },
    { label: 'Illustrator', icon: Presentation },
    { label: 'After Effects', icon: MonitorPlay },
    { label: 'AI Ideation', icon: Bot }
  ];

  return (
    <div className="min-h-screen text-[#181818] selection:bg-[#d9b49d] selection:text-black bg-[#f5f1ec]">
      <style>{`
        @keyframes floatSlow {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(1deg); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%, 100% 50%, 50% 0%, 50% 100%; }
          50% { background-position: 100% 50%, 0% 50%, 50% 100%, 50% 0%; }
          100% { background-position: 0% 50%, 100% 50%, 50% 0%, 50% 100%; }
        }
        @keyframes meshFloatA {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(30px,-40px,0) scale(1.08); }
        }
        @keyframes meshFloatB {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-40px,30px,0) scale(1.12); }
        }
        @keyframes meshFloatC {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(20px,25px,0) scale(1.05); }
        }
        @keyframes pulseGlow {
          0%,100% { opacity: .28; transform: scale(1); }
          50% { opacity: .5; transform: scale(1.08); }
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes chipIn {
          from { opacity: 0; transform: translateY(10px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes grainMove {
          0%, 100% { transform: translate(0,0); }
          25% { transform: translate(-1.5%, 1%); }
          50% { transform: translate(1%, -1.5%); }
          75% { transform: translate(-1%, -0.5%); }
        }
        .reveal-up {
          animation: revealUp 0.9s ease forwards;
        }
        .focus-chip {
          animation: chipIn 0.45s ease both;
        }
        .focus-chip-icon {
          animation: iconFloat 2.8s ease-in-out infinite;
        }
        .glass {
          background: rgba(255,255,255,0.45);
          backdrop-filter: blur(16px);
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.95]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 12% 18%, rgba(239, 199, 170, 0.95), transparent 30%),
              radial-gradient(circle at 88% 20%, rgba(205, 171, 148, 0.75), transparent 28%),
              radial-gradient(circle at 50% 78%, rgba(243, 221, 205, 0.9), transparent 35%),
              radial-gradient(circle at 30% 55%, rgba(222, 191, 170, 0.55), transparent 32%),
              linear-gradient(120deg, #f5f1ec, #efe4db, #f0d8c7, #f5f1ec)
            `,
            backgroundSize: '140% 140%, 140% 140%, 160% 160%, 160% 160%, 300% 300%',
            animation: 'gradientShift 22s ease-in-out infinite'
          }}
        />
        <div className="absolute left-[-10%] top-[-8%] h-[32rem] w-[32rem] rounded-full bg-[#d8b39b]/50 blur-3xl" style={{ animation: 'meshFloatA 15s ease-in-out infinite' }} />
        <div className="absolute right-[-10%] top-[8%] h-[30rem] w-[30rem] rounded-full bg-[#b9957f]/40 blur-3xl" style={{ animation: 'meshFloatB 18s ease-in-out infinite' }} />
        <div className="absolute bottom-[-12%] left-[18%] h-[28rem] w-[28rem] rounded-full bg-[#f0d8c7]/60 blur-3xl" style={{ animation: 'meshFloatC 16s ease-in-out infinite' }} />
        <div className="absolute inset-0 opacity-[0.14] mix-blend-soft-light"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)',
            backgroundSize: '120px 120px'
          }}
        />
        <div
          className="absolute inset-[-20%] opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'140\' viewBox=\'0 0 140 140\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.15\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'140\' height=\'140\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
            animation: 'grainMove 12s steps(8) infinite'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(255,255,255,0.16)_100%)]" />
      </div>

      <header className="relative px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/50 px-5 py-3 backdrop-blur-md">
          <div className="font-serif text-lg tracking-[0.35em]">PAWAN MODI</div>
          <nav className="hidden gap-6 text-sm uppercase tracking-[0.25em] text-black/65 md:flex">
            <a href="#about" className="transition hover:text-black">About</a>
            <a href="#experience" className="transition hover:text-black">Experience</a>
            <a href="#skills" className="transition hover:text-black">Skills</a>
            <a href="#contact" className="transition hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative px-6 pb-16 pt-10 md:px-10 lg:px-16 lg:pb-24 lg:pt-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
            <div className="reveal-up">
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-black/55">Creative Head · Experiential Storytelling · Brand Environments</p>
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] md:text-7xl lg:text-[96px]">
                Designing live experiences
                <span className="block text-[#9a6c52]">that feel cinematic.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-black/70 md:text-lg">
                Creative Director experienced in shaping large-scale corporate events, leadership summits, global partner meets, and immersive brand environments. Known for transforming business strategy into powerful spatial storytelling with strong commercial alignment.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#experience" className="rounded-full bg-black px-6 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:translate-y-[-2px]">View Experience</a>
                <a href="#contact" className="rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm uppercase tracking-[0.25em] transition hover:bg-white">Let’s Connect</a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((item, i) => (
                  <div key={item} className="glass rounded-3xl border border-black/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                    <p className="text-sm leading-6 text-black/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-up relative" style={{ animationDelay: '0.2s' }}>
              <div className="relative mx-auto max-w-xl overflow-hidden rounded-[36px] border border-black/10 bg-[#e6d2c5] p-5 shadow-[0_25px_80px_rgba(77,45,24,0.16)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_40%,rgba(0,0,0,0.03))]" />
                <div className="relative rounded-[28px] border border-black/10 bg-[#f8f3ef] p-6 md:p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-black/50">Profile Snapshot</p>
                      <h2 className="mt-2 font-serif text-3xl">Creative Head</h2>
                    </div>
                    <div className="h-14 w-14 rounded-full border border-black/10 bg-[#dfb9a1]/70" style={{ animation: 'floatSlow 5s ease-in-out infinite' }} />
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.35em] text-black/45">Location</p>
                      <p className="mt-2 text-lg">New Delhi, India 110080</p>
                    </div>
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.35em] text-black/45">Email</p>
                      <p className="mt-2 text-lg break-all">pawanmodi4life@gmail.com</p>
                    </div>
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.35em] text-black/45">Phone</p>
                      <p className="mt-2 text-lg">+91 9999538659</p>
                    </div>
                    <div className="rounded-3xl bg-black p-5 text-white shadow-sm">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/55">Creative Focus</p>
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {focusTags.map((tag, index) => {
                          const Icon = tag.icon;
                          return (
                            <span
                              key={tag.label}
                              className="focus-chip group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
                              style={{ animationDelay: `${index * 0.08}s` }}
                            >
                              <Icon className="focus-chip-icon h-3.5 w-3.5 shrink-0 transition duration-300 group-hover:scale-110" strokeWidth={1.8} />
                              <span>{tag.label}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-10 md:px-10 lg:px-16 lg:py-14">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div className="reveal-up rounded-[34px] border border-black/10 bg-white/60 p-8 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.45em] text-black/45">Summary</p>
              <h3 className="mt-4 font-serif text-4xl leading-tight">From concept boards to immersive environments.</h3>
            </div>
            <div className="reveal-up rounded-[34px] border border-black/10 bg-[#efe4db] p-8 shadow-[0_16px_50px_rgba(0,0,0,0.06)]" style={{ animationDelay: '0.1s' }}>
              <p className="text-lg leading-8 text-black/75">
                I build experiences that merge strategic thinking with emotion, scale, and spectacle. My work spans corporate events, leadership summits, partner meets, and brand environments where storytelling is translated into movement, structure, mood, and memory. The goal is always the same: create spaces that communicate, persuade, and stay with people.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 py-12 md:px-10 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 reveal-up">
              <p className="text-xs uppercase tracking-[0.45em] text-black/45">Career Journey</p>
              <h3 className="mt-3 font-serif text-4xl md:text-5xl">Experience timeline</h3>
            </div>

            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <div key={exp.role} className="reveal-up grid gap-5 rounded-[32px] border border-black/10 bg-white/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm md:grid-cols-[220px_1fr] md:p-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-black/45">Role {String(index + 1).padStart(2, '0')}</p>
                    <h4 className="mt-3 font-serif text-2xl leading-tight">{exp.role}</h4>
                    <p className="mt-3 text-sm leading-6 text-black/60">{exp.company}</p>
                    <p className="mt-1 text-sm leading-6 text-black/45">{exp.meta}</p>
                  </div>
                  <div>
                    <div className="grid gap-3">
                      {exp.points.map((point) => (
                        <div key={point} className="flex gap-3">
                          <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#b67d5a]" />
                          <p className="leading-7 text-black/72">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-12 md:px-10 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 reveal-up max-w-3xl">
              <p className="text-xs uppercase tracking-[0.45em] text-black/45">Skills</p>
              <h3 className="mt-3 font-serif text-4xl md:text-5xl">Creative capabilities</h3>
              <p className="mt-5 text-base leading-8 text-black/70 md:text-lg">
                A balance of concept thinking, visual sensibility, spatial planning, branding intelligence, and cross-functional leadership across events, exhibitions, and premium brand experiences.
              </p>
            </div>

            <div className="reveal-up grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill} className="group rounded-[28px] border border-black/10 bg-white/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition duration-300 hover:translate-y-[-4px] hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#bd7f59] transition duration-300 group-hover:scale-125" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-black/72">{skill}</p>
                      <div className="mt-4 h-px w-16 bg-[#bd7f59]/45 transition-all duration-300 group-hover:w-24" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:px-10 lg:px-16 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            <div className="reveal-up rounded-[30px] border border-black/10 bg-white/70 p-7 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">Education</p>
              <h4 className="mt-4 font-serif text-2xl">Bachelor of Computer Applications (BCA)</h4>
              <p className="mt-3 leading-7 text-black/65">IGNOU, New Delhi</p>
            </div>

            <div className="reveal-up rounded-[30px] border border-black/10 bg-[#efe4db] p-7 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">Languages</p>
              <div className="mt-4 space-y-5">
                <div>
                  <div className="mb-2 flex items-center justify-between"><span>English</span><span className="text-black/55">C2</span></div>
                  <div className="h-2 rounded-full bg-black/10"><div className="h-2 w-[100%] rounded-full bg-[#ef7d52]" /></div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between"><span>Hindi</span><span className="text-black/55">C1</span></div>
                  <div className="h-2 rounded-full bg-black/10"><div className="h-2 w-[82%] rounded-full bg-[#ef7d52]" /></div>
                </div>
              </div>
            </div>

            <div className="reveal-up rounded-[30px] border border-black/10 bg-white/70 p-7 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">Certifications</p>
              <div className="mt-4 space-y-4 leading-7 text-black/70">
                <p>Digital Marketing – Udemy</p>
                <p>Fundamentals of Digital Marketing – Google</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-20 pt-8 md:px-10 lg:px-16 lg:pb-24">
          <div className="mx-auto max-w-7xl reveal-up overflow-hidden rounded-[36px] border border-black/10 bg-[linear-gradient(135deg,#161616,#2b211d_55%,#8a644f)] p-8 text-white shadow-[0_20px_80px_rgba(0,0,0,0.18)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-white/45">Contact</p>
                <h3 className="mt-4 font-serif text-4xl md:text-5xl">Let’s build experiences that leave a mark.</h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                 Let's Connect!
                </p>
              </div>
              <div className="grid gap-3 text-sm uppercase tracking-[0.2em] text-white/80">
                <a href="mailto:pawanmodi4life@gmail.com" className="rounded-full border border-white/20 px-5 py-3 transition hover:bg-white hover:text-black">pawanmodi4life@gmail.com</a>
                <a href="https://www.linkedin.com/in/pawanmodi19/" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-3 transition hover:bg-white hover:text-black">LinkedIn Profile</a>
                <a href="https://www.behance.net/pawanmodi2" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-3 transition hover:bg-white hover:text-black">Behance Profile</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

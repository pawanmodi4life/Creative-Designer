import { useEffect, useRef, useState } from 'react';
import { Bot, Box, Clapperboard, Lightbulb, MonitorPlay, PenTool, Presentation, Sparkles } from 'lucide-react';

export default function PawanModiAgencyPortfolio() {
  const [activeStoryStep, setActiveStoryStep] = useState(0);
  const [tiltStyles, setTiltStyles] = useState({});
  const [activeVideo, setActiveVideo] = useState(null);
  const [projectStartIndex, setProjectStartIndex] = useState(0);
  const storyStepRefs = useRef([]);

  const visibleProjectCount = 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const index = Number(visibleEntries[0].target.getAttribute('data-step-index'));
          if (!Number.isNaN(index)) setActiveStoryStep(index);
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-10% 0px -20% 0px',
      }
    );

    storyStepRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);
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
    { label: 'Creative Direction', icon: Sparkles, category: 'Strategy', desc: 'End-to-end creative vision & narrative.' },
    { label: 'Creative Strategy & Concept', icon: Lightbulb, category: 'Strategy', desc: 'Idea systems that scale across touchpoints.' },
    { label: 'Experiential Marketing', icon: Clapperboard, category: 'Experience', desc: 'Engagement-led formats & journeys.' },
    { label: 'Large-Scale Experiential Design', icon: Box, category: 'Experience', desc: 'Mass formats, zoning & flow.' },
    { label: 'Immersive Brand Installations', icon: MonitorPlay, category: 'Experience', desc: 'Installations that drive recall.' },
    { label: 'Spatial Storytelling & Stage', icon: Presentation, category: 'Design', desc: 'Stage architecture & scenography.' },
    { label: 'Visual Storytelling', icon: PenTool, category: 'Design', desc: 'Narrative visuals & motion.' },
    { label: 'Creative Leadership', icon: Bot, category: 'Leadership', desc: 'Cross-functional direction & delivery.' }
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

  const projectStats = [
    { value: '200+', label: 'Events Designed' },
    { value: '20+', label: 'Brands' },
    { value: '12+', label: 'Years Leading Creative' }
  ];

  const projects = [
    {
      title: 'SoftwareOne Springboard 2026',
      type: 'Leadership Meet',
      description: 'Designed a multi-day corporate experience built around unity, destination storytelling, gala concepts, and high-engagement touchpoints.',
      tags: ['Theme Design', 'Experience Journey', 'Stage & Social Moments'],
      youtubeUrl: 'https://youtu.be/qbzYsZKXgiU',
      thumbnailUrl: 'https://img.youtube.com/vi/qbzYsZKXgiU/hqdefault.jpg'
    },
    {
      title: 'Tata Technologies Euphoria 2026',
      type: 'Employee Experience',
      description: 'Created a large-scale employee celebration concept combining office activations, concert energy, themed storytelling, and engagement-led zones.',
      tags: ['Mass Engagement', 'Concert Experience', 'Creative Strategy'],
      youtubeUrl: 'https://youtu.be/qbzYsZKXgiU',
      thumbnailUrl: 'https://img.youtube.com/vi/qbzYsZKXgiU/hqdefault.jpg'
    },
    {
      title: 'Nerolac International Events',
      type: 'Global Partner Program',
      description: 'Shaped premium welcome and gala experiences for global audiences with concept routes, awards storytelling, and destination-sensitive entertainment design.',
      tags: ['Awards Design', 'Global Eventing', 'Premium Concepts'],
      youtubeUrl: 'https://youtu.be/qbzYsZKXgiU',
      thumbnailUrl: 'https://img.youtube.com/vi/qbzYsZKXgiU/hqdefault.jpg'
    },
    {
      title: 'HCLTech Leadership Summit',
      type: 'Corporate Summit',
      description: 'Built a premium leadership experience with narrative-led plenaries, brand moments, and executive-level stage design.',
      tags: ['Leadership Design', 'Main Stage', 'Summit Storytelling'],
      youtubeUrl: 'https://youtu.be/qbzYsZKXgiU',
      thumbnailUrl: 'https://img.youtube.com/vi/qbzYsZKXgiU/hqdefault.jpg'
    },
    {
      title: 'Havells Partner Meet',
      type: 'Partner Experience',
      description: 'Crafted a large-format partner engagement journey combining hospitality, entertainment, and memorable themed experiences.',
      tags: ['Partner Meet', 'Destination Event', 'Guest Journey'],
      youtubeUrl: 'https://youtu.be/qbzYsZKXgiU',
      thumbnailUrl: 'https://img.youtube.com/vi/qbzYsZKXgiU/hqdefault.jpg'
    },
    {
      title: 'PwC TMT CEO Retreat',
      type: 'Executive Retreat',
      description: 'Developed an elegant retreat environment for senior leaders with refined branding, focused messaging, and premium guest experience.',
      tags: ['Executive Event', 'Branding', 'Retreat Experience'],
      youtubeUrl: 'https://youtu.be/qbzYsZKXgiU',
      thumbnailUrl: 'https://img.youtube.com/vi/qbzYsZKXgiU/hqdefault.jpg'
    },
    {
      title: 'Dormakaba Awards Night',
      type: 'Awards Experience',
      description: 'Designed a cinematic awards environment with entertainment integration, celebration storytelling, and guest engagement moments.',
      tags: ['Awards Night', 'Entertainment', 'Guest Engagement'],
      youtubeUrl: 'https://youtu.be/qbzYsZKXgiU',
      thumbnailUrl: 'https://img.youtube.com/vi/qbzYsZKXgiU/hqdefault.jpg'
    },
    {
      title: 'Sify Growth Tank Experience',
      type: 'Business Event Concept',
      description: 'Conceptualised an immersive business event ecosystem with strategy-led storytelling, themed content arcs, and interactive formats.',
      tags: ['Concept IP', 'Business Storytelling', 'Interactive Design'],
      youtubeUrl: 'https://youtu.be/qbzYsZKXgiU',
      thumbnailUrl: 'https://img.youtube.com/vi/qbzYsZKXgiU/hqdefault.jpg'
    },
    {
      title: 'Nerolac Vendor Meet 2026',
      type: 'Vendor Engagement',
      description: 'Created a collaborative vendor event flow with stage moments, recognition segments, and clean premium visual language.',
      tags: ['Recognition Design', 'Vendor Event', 'Stage Flow'],
      youtubeUrl: 'https://youtu.be/qbzYsZKXgiU',
      thumbnailUrl: 'https://img.youtube.com/vi/qbzYsZKXgiU/hqdefault.jpg'
    },
    {
      title: 'Global Exhibition & Stage Design',
      type: 'Brand Environment',
      description: 'Delivered immersive 3D-first brand environments for exhibitions and stage experiences that balance aesthetic impact with functional flow.',
      tags: ['3D Visualisation', 'Exhibition Design', 'Spatial Branding'],
      youtubeUrl: 'https://youtu.be/qbzYsZKXgiU',
      thumbnailUrl: 'https://img.youtube.com/vi/qbzYsZKXgiU/hqdefault.jpg'
    }
  ];

  const visibleProjects = projects.slice(projectStartIndex, projectStartIndex + visibleProjectCount);

  const storySteps = [
    {
      number: '01',
      title: 'Concept First',
      text: 'Every experience begins with a clear idea, a strong narrative, and a visual language that can scale.'
    },
    {
      number: '02',
      title: 'Design the Experience',
      text: 'From stage architecture to walkthrough moments, every zone is designed to feel intentional and emotionally engaging.'
    },
    {
      number: '03',
      title: 'Build for Impact',
      text: 'The final output balances spectacle, business messaging, production practicality, and memorable brand presence.'
    }
  ];

  const handleProjectMouseMove = (index, event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = (((y / rect.height) - 0.5) * -10);

    setTiltStyles((prev) => ({
      ...prev,
      [index]: {
        transform: `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      },
    }));
  };

  const handleProjectMouseLeave = (index) => {
    setTiltStyles((prev) => ({
      ...prev,
      [index]: {
        transform: 'perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      },
    }));
  };

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return '';

    try {
      const parsedUrl = new URL(url);
      const videoIdFromQuery = parsedUrl.searchParams.get('v');

      if (videoIdFromQuery) {
        return `https://www.youtube.com/embed/${videoIdFromQuery}?autoplay=1&rel=0`;
      }

      if (parsedUrl.hostname.includes('youtu.be')) {
        const shortId = parsedUrl.pathname.replace('/', '');
        if (shortId) {
          return `https://www.youtube.com/embed/${shortId}?autoplay=1&rel=0`;
        }
      }

      const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
      const embedIndex = pathParts.findIndex((part) => part === 'embed');
      if (embedIndex !== -1 && pathParts[embedIndex + 1]) {
        return `https://www.youtube.com/embed/${pathParts[embedIndex + 1]}?autoplay=1&rel=0`;
      }
    } catch (error) {
      return '';
    }

    return '';
  };

  const handlePrevProjects = () => {
    setProjectStartIndex((prev) => Math.max(prev - visibleProjectCount, 0));
  };

  const handleNextProjects = () => {
    setProjectStartIndex((prev) => Math.min(prev + visibleProjectCount, Math.max(projects.length - visibleProjectCount, 0)));
  };

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
        @keyframes driftWord {
          0%, 20% { opacity: 0; transform: translateY(10px); }
          25%, 45% { opacity: 1; transform: translateY(0); }
          50%, 100% { opacity: 0; transform: translateY(-10px); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulseLine {
          0%, 100% { opacity: 0.28; transform: scaleX(1); }
          50% { opacity: 0.6; transform: scaleX(1.03); }
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
        .approach-line {
          animation: pulseLine 4.5s ease-in-out infinite;
        }
        .modal-fade {
          animation: revealUp 0.35s ease forwards;
        }
        .apple-card {
          transition: transform 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease, background 0.45s ease;
          transform-origin: center;
        }
        .apple-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 26px 80px rgba(0,0,0,0.12);
          border-color: rgba(154,108,82,0.22);
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
              <div className="mt-5 flex h-8 items-center overflow-hidden text-sm uppercase tracking-[0.35em] text-black/55 md:text-base">
                <span className="mr-3">Built to feel</span>
                <div className="relative h-7 min-w-[170px]">
                  {['Immersive', 'Experiential', 'Unforgettable', 'Strategic'].map((word, index) => (
                    <span
                      key={word}
                      className="absolute left-0 top-0 text-[#9a6c52]"
                      style={{ animation: `driftWord 10s ease-in-out ${index * 2.5}s infinite` }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-8 max-w-2xl text-base leading-8 text-black/70 md:text-lg">
                Creative Director experienced in shaping large-scale corporate events, leadership summits, global partner meets, and immersive brand environments. Known for transforming business strategy into powerful spatial storytelling with strong commercial alignment.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-full bg-black px-6 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:translate-y-[-2px]">View Projects</a>
                <a href="#contact" className="rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm uppercase tracking-[0.25em] transition hover:bg-white">Let’s Connect</a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((item, i) => (
                  <div key={item} className="glass rounded-3xl border border-black/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)]" style={{ animationDelay: `${0.15 * i}s` }}>
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

        <section className="px-6 py-6 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {projectStats.map((stat, index) => (
              <div key={stat.label} className="reveal-up apple-card rounded-[30px] border border-black/10 bg-white/70 p-7 shadow-[0_14px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm" style={{ animationDelay: `${0.08 * index}s`, animationName: 'revealUp, floatCard', animationDuration: '0.9s, 6s', animationIterationCount: '1, infinite', animationTimingFunction: 'ease, ease-in-out' }}>
                <p className="text-4xl font-serif text-[#9a6c52] md:text-5xl">{stat.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.35em] text-black/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-12 md:px-10 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 reveal-up max-w-3xl">
              <p className="text-xs uppercase tracking-[0.45em] text-black/45">Approach</p>
              <h3 className="mt-3 font-serif text-4xl md:text-5xl">How ideas become experiences</h3>
              <p className="mt-5 text-base leading-8 text-black/70 md:text-lg">
                A structured creative approach that ensures every experience is concept-led, emotionally engaging, and built for real-world impact.
              </p>
            </div>

            <div className="relative">
              <div className="approach-line absolute left-[16%] right-[16%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-[#d8b39b]/20 via-[#9a6c52]/55 to-[#d8b39b]/20 lg:block" />
              <div className="grid gap-6 lg:grid-cols-3">
                {storySteps.map((step, index) => {
                  const isActive = activeStoryStep === index;
                  return (
                    <div
                      key={step.number}
                      ref={(node) => {
                        storyStepRefs.current[index] = node;
                      }}
                      data-step-index={index}
                      className={`reveal-up apple-card relative rounded-[32px] border p-7 backdrop-blur-sm transition-all duration-500 ${
                        isActive
                          ? 'scale-[1.03] border-[#9a6c52]/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,228,219,0.96))] shadow-[0_24px_60px_rgba(154,108,82,0.16)]'
                          : 'border-black/10 bg-white/65 shadow-[0_14px_40px_rgba(0,0,0,0.05)]'
                      }`}
                      style={{ animationDelay: `${0.08 * index}s` }}
                    >
                      <div className={`absolute left-1/2 top-[-10px] hidden h-5 w-5 -translate-x-1/2 rounded-full border transition-all duration-500 lg:block ${
                        isActive
                          ? 'border-[#9a6c52]/45 bg-[#f3e2d6] shadow-[0_0_0_8px_rgba(154,108,82,0.10)]'
                          : 'border-black/10 bg-white'
                      }`} />
                      <p className={`text-sm uppercase tracking-[0.45em] transition-colors duration-500 ${isActive ? 'text-[#9a6c52]' : 'text-[#9a6c52]/80'}`}>
                        {step.number}
                      </p>
                      <h4 className="mt-4 font-serif text-3xl">{step.title}</h4>
                      <p className="mt-4 leading-8 text-black/72">{step.text}</p>
                    </div>
                  );
                })}
              </div>
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
                <div key={exp.role} className="reveal-up apple-card grid gap-5 rounded-[32px] border border-black/10 bg-white/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm md:grid-cols-[220px_1fr] md:p-8" style={{ animationDelay: `${0.08 * index}s` }}>
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
                Strategy, design, and execution—built to deliver impact at scale.
              </p>
            </div>

            <div className="reveal-up grid gap-5 sm:grid-cols-2 xl:grid-cols-4" style={{ animationDelay: '0.1s' }}>
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.label}
                    className="group apple-card relative overflow-visible rounded-[28px] border border-black/10 bg-white/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out hover:z-10"
                  >
                    <div
                      className="pointer-events-none absolute -inset-1 opacity-0 blur-xl transition-opacity duration-500 ease-out group-hover:opacity-100"
                      style={{ background: 'radial-gradient(circle at 20% 20%, rgba(189,127,89,0.35), transparent 40%)' }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="rounded-xl bg-[#f3e2d6] p-3 transition duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-[#9a6c52]" strokeWidth={1.8} />
                      </div>

                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-black/40">{skill.category}</p>
                        <p className="mt-2 text-sm uppercase tracking-[0.22em] text-black/80">{skill.label}</p>

                        <div className="mt-3 overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100">
                          <p className="text-xs leading-6 text-black/60">
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-14 md:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-6 reveal-up lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.45em] text-black/45">Selected Work</p>
                <h3 className="mt-3 font-serif text-4xl md:text-5xl">Selected Work</h3>
                <p className="mt-5 text-base leading-8 text-black/70 md:text-lg">
                  A curated showcase of high-impact experiences, built across scale, strategy, and storytelling.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevProjects}
                  disabled={projectStartIndex === 0}
                  className="rounded-full border border-black/10 bg-white/75 px-5 py-3 text-xs uppercase tracking-[0.25em] text-black/70 transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={handleNextProjects}
                  disabled={projectStartIndex >= projects.length - visibleProjectCount}
                  className="rounded-full border border-black/10 bg-white/75 px-5 py-3 text-xs uppercase tracking-[0.25em] text-black/70 transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-black/40">
              <span>{String(projectStartIndex + 1).padStart(2, '0')} – {String(Math.min(projectStartIndex + visibleProjectCount, projects.length)).padStart(2, '0')}</span>
              <span>{String(projects.length).padStart(2, '0')} Projects</span>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {visibleProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="reveal-up group relative overflow-hidden rounded-[32px] border border-black/10 bg-black text-white shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition-transform duration-300 will-change-transform"
                  style={{ animationDelay: `${0.1 * index}s`, ...(tiltStyles[projectStartIndex + index] || {}) }}
                  onMouseMove={(event) => handleProjectMouseMove(projectStartIndex + index, event)}
                  onMouseLeave={() => handleProjectMouseLeave(projectStartIndex + index)}
                >
                  <div className="relative h-[260px] md:h-[300px] overflow-hidden">
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.65))]" />

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">{project.type}</p>
                      <h4 className="mt-2 font-serif text-2xl leading-tight">{project.title}</h4>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.9),rgba(0,0,0,0.96))]" />
                    <div className="relative flex h-full flex-col justify-end p-5">
                      <p className="text-sm leading-7 text-white/80">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveVideo(project)}
                        className="pointer-events-auto mt-5 inline-flex w-max items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/85 backdrop-blur-sm transition group-hover:bg-white group-hover:text-black"
                      >
                        View
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:px-10 lg:px-16 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            <div className="reveal-up apple-card rounded-[30px] border border-black/10 bg-white/70 p-7 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">Education</p>
              <h4 className="mt-4 font-serif text-2xl">Bachelor of Computer Applications (BCA)</h4>
              <p className="mt-3 leading-7 text-black/65">IGNOU, New Delhi</p>
            </div>

            <div className="reveal-up apple-card rounded-[30px] border border-black/10 bg-[#efe4db] p-7 shadow-[0_14px_40px_rgba(0,0,0,0.05)]" style={{ animationDelay: '0.08s' }}>
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

            <div className="reveal-up apple-card rounded-[30px] border border-black/10 bg-white/70 p-7 shadow-[0_14px_40px_rgba(0,0,0,0.05)]" style={{ animationDelay: '0.16s' }}>
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
                   Let’s collaborate to craft high-impact, story-driven experiences — from concept to execution.
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

      {activeVideo && (
        <div className="modal-fade fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#111] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-white md:px-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/45">Selected Work</p>
                <h4 className="mt-2 font-serif text-2xl">{activeVideo.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80 transition hover:bg-white hover:text-black"
              >
                Close
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              {getYoutubeEmbedUrl(activeVideo.youtubeUrl) ? (
                <iframe
                  className="h-full w-full"
                  src={getYoutubeEmbedUrl(activeVideo.youtubeUrl)}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full items-center justify-center px-6 text-center text-white/70">
                  Please paste a valid YouTube link in the project's youtubeUrl field.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

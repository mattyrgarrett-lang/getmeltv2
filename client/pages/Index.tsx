import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setShowEmailCapture(false);
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground font-serif">Melt</div>
          <button
            onClick={() => setShowEmailCapture(true)}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition font-semibold"
            style={{ backgroundColor: "rgb(168, 117, 97)" }}
          >
            I Want This
          </button>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-background to-secondary py-16 px-4 sm:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6 font-serif">
              Your Collagen Isn't Working. And It's Not Your Fault.
            </h1>
            <p className="text-xl text-foreground opacity-90 mb-8 leading-relaxed">
              The real reason your skin isn't responding — and the 5-second dissolving strip that finally fixes it.
            </p>

            {/* Clinical Trust Bar */}
            <div className="bg-card rounded-2xl border border-border p-6 mb-8 flex flex-col sm:flex-row items-center justify-around gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Check size={18} className="text-accent" />
                Backed by peer-reviewed science
              </div>
              <div className="hidden sm:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <Check size={18} className="text-accent" />
                30-day money-back guarantee
              </div>
              <div className="hidden sm:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <Check size={18} className="text-accent" />
                Clinically validated delivery
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              {!showEmailCapture ? (
                <button
                  onClick={() => setShowEmailCapture(true)}
                  className="px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-2xl hover:opacity-90 transition"
                >
                  I Want This — Notify Me When Available.
                </button>
              ) : submitted ? (
                <div className="px-8 py-4 bg-accent text-accent-foreground text-lg font-bold rounded-2xl text-center">
                  ✓ Thanks! Check your email.
                </div>
              ) : (
                <form name="melt-waitlist" netlify onSubmit={handleEmailSubmit} className="flex flex-col gap-2">
  <input type="hidden" name="form-name" value="melt-waitlist" />
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-foreground placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-primary"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition"
                    >
                      Notify
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowEmailCapture(false)}
                    className="text-sm text-foreground opacity-60 hover:opacity-100 transition"
                  >
                    Cancel
                  </button>
                </form>
              )}
            </div>

            {/* Trust Line */}
            <p className="text-sm text-foreground opacity-75 mt-4">
              30-day money-back guarantee. Email us. We refund everything.
              <br />
              No forms, no catch, no "we'll look into it."
            </p>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fa930cc26a2354bcb842f28aee44ccf2d%2Fc7e761d32e8a4377894d2d15f89dcadd"
              alt="Melt collagen strips on marble counter"
              className="w-full max-w-md rounded-2xl shadow-lg object-contain"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="py-16 px-4 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">
            You've tried collagen. It didn't work. Here's why.
          </h2>
          <p className="text-xl text-foreground italic mb-12 border-l-4 border-primary pl-6">
            "I had zero idea what/who I was looking at in the mirror."
          </p>

          <div className="space-y-6 text-foreground opacity-90 leading-relaxed text-lg">
            <p>
              If you know that feeling — the morning light, the skin that doesn't look like yours anymore, the
              hollow under the eye that wasn't there two years ago — you already know why you're here.
            </p>
            <p>And you've probably already tried collagen.</p>
            <p>
              You stirred the scoop into your coffee. You committed. Six weeks. Eight weeks. Maybe three
              months. You saw nothing. You got bloated. You got gas. You pushed through it because
              everyone said it takes time. And then quietly, without ceremony, you stopped reordering.
            </p>
            <p className="font-semibold">The worst part? You blamed yourself.</p>
            <p>
              You told yourself you weren't consistent enough. That your body just doesn't respond. That
              you're someone collagen doesn't work for.
            </p>
            <p className="font-semibold">
              Here's the truth: the collagen didn't fail because of you. It failed because of what happens the
              second you swallow it.
            </p>

            <div className="bg-secondary border border-border rounded-lg p-8 my-8">
              <p className="font-semibold mb-4">
                The moment collagen enters your stomach, hydrochloric acid and digestive enzymes begin
                dismantling it. What survives isn't collagen anymore. It's a pool of generic amino acids your
                body distributes to whatever it considers most urgent that day.
              </p>
              <p className="mb-4">
                Your body has no mechanism to redirect those amino acids back to your skin, your hair, or
                your joints. There's no postal route. There's no guarantee.
              </p>
              <p>
                And for many women, the experience isn't just useless — it's physically painful. The bloating,
                the gas, the nausea. You were suffering through a supplement that wasn't working. That ends here.
              </p>
            </div>

            <p>
              Then there's the second problem no one talks about: the first-pass effect. Even if a fraction of
              the collagen peptides survive your stomach, they pass through your liver before reaching your
              bloodstream — dramatically reducing what ever makes it through.
            </p>
            <p className="text-lg italic font-semibold">
              In your own words: "the most expensive urine on the planet."
            </p>
            <p className="text-foreground opacity-70 mt-8">
              The supplement industry has known about this problem for years. They kept selling you bigger
              tubs anyway.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MECHANISM */}
      <section className="py-16 px-4 sm:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 font-serif">
            What if collagen could bypass your stomach entirely?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-foreground opacity-90 leading-relaxed text-lg">
              <p className="font-semibold">
                It can. Doctors have been doing it for decades — just not for collagen.
              </p>
              <p>
                Emergency heart medications like nitroglycerin aren't swallowed. They're placed under the
                tongue. The mucosal lining of your mouth absorbs compounds directly into the capillary network,
                entering your bloodstream in seconds — completely bypassing your stomach, small intestine,
                and the liver's first-pass metabolism.
              </p>
              <p>
                This isn't experimental. It's the gold-standard delivery route for medications where speed and
                absorption are non-negotiable. The pharmaceutical world has relied on it for 50 years.
              </p>
              <p>The supplement industry simply never applied it to collagen.</p>
              <p className="font-semibold text-primary">Until now.</p>
            </div>

            {/* Mechanism Image */}
            <div className="flex justify-center items-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa930cc26a2354bcb842f28aee44ccf2d%2Fc1d2fb8a76f049b49c5c1d4aeac5c94f"
                alt="Melt collagen strip dissolving on tongue"
                className="w-full max-w-sm rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-foreground opacity-90 leading-relaxed text-lg mt-12">
            <div className="bg-card border-2 border-primary rounded-2xl p-8 my-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">
                Melt delivers collagen the same way emergency heart medication enters the bloodstream.
              </h3>
              <p className="mb-4">
                Each strip dissolves on your tongue in under 10 seconds. The collagen peptides absorb directly
                through your oral mucosa and enter your systemic circulation as intact peptides.
              </p>
              <div className="flex flex-col gap-3 font-semibold text-foreground">
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-accent" />
                  No stomach acid
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-accent" />
                  No liver filtration
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-accent" />
                  No wasted formula
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4 font-serif">
              And the molecular size matters.
            </h3>
            <p>
              Most commercial collagen powders contain peptides at 2,000–5,000 Daltons. Research
              published in the Journal of Food Hygiene and Safety found that collagen peptides at 500
              Daltons achieve approximately 3x higher absorption through oral mucosal cells compared to
              larger peptides found in standard powders.
            </p>
            <p className="font-semibold">
              Melt uses micro-peptide collagen formulated at approximately 500 Daltons. Not the highest dose. The right dose, delivered the right way.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROOF */}
      <section className="py-16 px-4 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">
            The Science Behind the Strip
          </h2>
          <p className="text-xl text-foreground opacity-90 mb-12">
            Melt is built on two independently published bodies of research.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-2 font-serif">On buccal collagen delivery:</h3>
              <p className="text-foreground opacity-90 leading-relaxed">
                A peer-reviewed clinical trial published in Applied Sciences (MDPI, 2021) tested dissolvable
                collagen delivery films on the oral mucosa. The result:
                <span className="font-semibold"> statistically significant improvements in skin hydration and elasticity within 14 days.</span>{" "}
                <a href="#" className="text-primary font-semibold hover:underline">Read the study →</a>
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-2 font-serif">On the 500 Dalton advantage:</h3>
              <p className="text-foreground opacity-90 leading-relaxed">
                Research published in the Journal of Food Hygiene and Safety found collagen peptides at 500
                Daltons absorbed at approximately 3x the rate of larger peptides. Melt is formulated at approximately 500 Daltons.{" "}
                <a href="#" className="text-primary font-semibold hover:underline">Read the study →</a>
              </p>
            </div>
          </div>

          <div className="bg-secondary border border-border rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Be Among the First.</h3>
            <p className="text-foreground opacity-90 leading-relaxed mb-4">
              Melt is new. We don't have hundreds of reviews yet — because this technology is new.
            </p>
            <p className="text-foreground opacity-90 leading-relaxed font-semibold">
              The science is there. The guarantee is there. The only thing left is to try it.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE PRODUCT */}
      <section className="py-16 px-4 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">
            Meet Melt. Collagen that actually arrives.
          </h2>
          <p className="text-2xl text-foreground font-semibold mb-12">One strip. Five seconds. That's it.</p>

          <div className="bg-card rounded-2xl p-8 mb-12 border border-border">
            <div className="space-y-4 mb-8">
              <p className="text-foreground opacity-90 leading-relaxed">Peel it. Place it on your tongue. Let it dissolve.</p>
              <p className="text-foreground opacity-90 leading-relaxed font-semibold">
                No blender. No measuring spoon. No chalky aftertaste. No bloating. No cow smell. No prep. No cleanup.
              </p>
              <p className="text-foreground opacity-90 leading-relaxed">
                It takes less time than looking for the collagen scoop you can never find.
              </p>
            </div>

            <div className="mb-8 -mx-8 -mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa930cc26a2354bcb842f28aee44ccf2d%2F5b69a2e48af3461cb033f4ddafe0d05c"
                alt="Woman effortlessly placing Melt strip on tongue in bathroom"
                className="w-full object-cover rounded-b-2xl"
              />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4 font-serif">What's inside each strip:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-4 text-foreground opacity-90">
                <Check size={24} className="text-accent flex-shrink-0 mt-1" />
                <span><span className="font-semibold">Hydrolyzed collagen micro-peptides (~500 Dalton</span> — optimal for mucosal absorption)</span>
              </li>
              <li className="flex gap-4 text-foreground opacity-90">
                <Check size={24} className="text-accent flex-shrink-0 mt-1" />
                <span><span className="font-semibold">Vitamin C</span> — collagen synthesis requires it</span>
              </li>
              <li className="flex gap-4 text-foreground opacity-90">
                <Check size={24} className="text-accent flex-shrink-0 mt-1" />
                <span><span className="font-semibold">Clean, simple ingredients.</span> No sucralose. No artificial fillers.</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-4 font-serif">Each box contains:</h3>
            <ul className="space-y-2 text-foreground opacity-90 mb-8">
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full" />30 strips (30-day supply)</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full" />1 strip per day</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full" />Mango flavor — actually pleasant.</li>
            </ul>

            <p className="text-foreground opacity-90 leading-relaxed font-semibold">
              Works anywhere: In bed before you get up. In the car. At your desk. There is nothing to forget.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW IT WORKS */}
      <section className="py-16 px-4 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 font-serif">Three steps. Ten seconds. Done.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Peel", description: "Open your Melt tin and peel one strip from the packaging." },
              { step: "2", title: "Place", description: "Put the strip on your tongue. It starts dissolving the moment it makes contact." },
              { step: "3", title: "Done", description: "In under 10 seconds, it's gone." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 font-serif">Step {item.step} — {item.title}</h3>
                <p className="text-foreground opacity-90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-secondary rounded-2xl p-8 border border-border">
            <p className="text-foreground opacity-90 leading-relaxed">
              While you go on with your morning, collagen peptides are already in your bloodstream.
            </p>
            <p className="text-foreground opacity-90 leading-relaxed font-semibold mt-4">No water. No prep. No waiting.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7: THE TIMELINE */}
      <section className="py-16 px-4 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">When will you feel it?</h2>
          <p className="text-lg text-foreground opacity-90 mb-12 leading-relaxed">
            Most collagen brands ask you to wait 8–12 weeks. Melt absorbs directly. The timeline is shorter.
          </p>

          <div className="bg-card rounded-2xl p-8 border border-border mb-8">
            <p className="text-lg text-foreground font-semibold mb-4">A peer-reviewed clinical study showed:</p>
            <p className="text-foreground opacity-90 leading-relaxed font-bold">
              Statistically significant improvements in skin hydration and elasticity in just 14 days. Not 12 weeks. 14 days.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { week: "Week 1–2", text: "Skin begins feeling more hydrated. The process has started." },
              { week: "Week 3–4", text: "Skin feels smoother. This is usually when someone in your life asks what you've been doing differently." },
              { week: "Week 6–8", text: "Hair thickness, nail strength, and skin elasticity are showing visible changes." },
            ].map((item) => (
              <div key={item.week} className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2 font-serif">{item.week}:</h3>
                <p className="text-foreground opacity-90">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Timeline Results Image */}
          <div className="mt-12 mb-12 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fa930cc26a2354bcb842f28aee44ccf2d%2F10be074f39f44f88ba9957233284664f"
              alt="Woman with glowing, hydrated skin after collagen results"
              className="w-full max-w-md rounded-2xl shadow-xl object-cover"
            />
          </div>

          <div className="mt-8 bg-accent bg-opacity-10 border border-accent rounded-2xl p-6">
            <p className="text-foreground font-semibold">
              If you don't feel a difference within 30 days, we'll refund every cent. No forms. No questions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: COMPARISON */}
      <section className="py-16 px-4 sm:py-24 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 font-serif">
            Melt vs. everything you've already tried
          </h2>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary">
                  <th className="border border-border p-4 text-left font-bold text-foreground" />
                  <th className="border border-border p-4 text-left font-bold text-foreground">Collagen Powder</th>
                  <th className="border border-border p-4 text-left font-bold text-foreground">Collagen Capsules</th>
                  <th className="border border-border p-4 text-left font-bold text-foreground">Collagen Gummies</th>
                  <th className="border border-border p-4 text-left font-bold text-foreground bg-primary bg-opacity-10">Melt Strips</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Survives stomach acid", values: ["No", "No", "No", "Yes"] },
                  { label: "Bypasses first-pass liver metabolism", values: ["No", "No", "No", "Yes"] },
                  { label: "Results in 14 days", values: ["No", "No", "No", "Clinically shown"] },
                  { label: "No prep or cleanup", values: ["No", "No", "No", "Yes"] },
                  { label: "No bloating or GI issues", values: ["No", "No", "No", "Yes"] },
                  { label: "Takes under 10 seconds", values: ["No", "No", "No", "Yes"] },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-secondary bg-opacity-50"}>
                    <td className="border border-border p-4 font-semibold text-foreground">{row.label}</td>
                    <td className="border border-border p-4 text-foreground opacity-90">{row.values[0]}</td>
                    <td className="border border-border p-4 text-foreground opacity-90">{row.values[1]}</td>
                    <td className="border border-border p-4 text-foreground opacity-90">{row.values[2]}</td>
                    <td className="border border-border p-4 font-semibold text-foreground bg-primary bg-opacity-10">{row.values[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="lg:hidden space-y-6">
            {[
              { label: "Survives stomach acid", values: ["No", "No", "No", "Yes"] },
              { label: "Bypasses first-pass liver metabolism", values: ["No", "No", "No", "Yes"] },
              { label: "Results in 14 days", values: ["No", "No", "No", "Clinically shown"] },
              { label: "No prep or cleanup", values: ["No", "No", "No", "Yes"] },
              { label: "No bloating or GI issues", values: ["No", "No", "No", "Yes"] },
              { label: "Takes under 10 seconds", values: ["No", "No", "No", "Yes"] },
            ].map((row, idx) => (
              <div key={idx} className="bg-secondary rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">{row.label}</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-foreground opacity-60 mb-1">Powder</p>
                      <p className="text-foreground opacity-90">{row.values[0]}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground opacity-60 mb-1">Capsules</p>
                      <p className="text-foreground opacity-90">{row.values[1]}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-foreground opacity-60 mb-1">Gummies</p>
                      <p className="text-foreground opacity-90">{row.values[2]}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground opacity-60 mb-1">Melt Strips</p>
                      <p className="font-semibold rounded px-2 py-1" style={{ color: "rgba(168, 213, 181, 1)" }}>
                        {row.values[3] === "Yes" ? "✓ Yes" : row.values[3]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="py-16 px-4 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 font-serif">
            Honest answers to the questions you're already asking
          </h2>

          <div className="space-y-4">
            {[
              {
                id: "q1",
                q: "This sounds too good to be true. Every collagen brand says they're different.",
                a: "We know. The difference here isn't the ingredient. It's the delivery pathway. Mucosal absorption is not a marketing claim. It's the same mechanism doctors have used for 50 years to deliver emergency heart medication directly into the bloodstream.",
              },
              {
                id: "q2",
                q: "It's too expensive. I can get a huge tub of powder for less.",
                a: "A $45 tub that delivers 15–20% of its stated dose is more expensive per unit of actual absorption than a $45 box of Melt that delivers intact peptides directly to your bloodstream. You're paying for collagen that actually gets in.",
              },
              {
                id: "q3",
                q: "I've tried collagen before and it didn't work for me.",
                a: "Your previous collagen didn't fail because of you or your body. It failed because stomach acid destroyed it before it had a chance to reach your skin. Change the delivery format and you change the result.",
              },
              {
                id: "q4",
                q: "I don't know if the science is real.",
                a: "The mucosal absorption pathway is the basis for emergency heart medication and sublingual hormone therapy. A 2021 peer-reviewed study in Applied Sciences (MDPI) specifically tested buccal collagen delivery and found statistically significant improvements in skin hydration and elasticity within 14 days.",
              },
              {
                id: "q5",
                q: "One strip a day seems like not enough.",
                a: "Dose is not the point. Delivery efficiency is. 100mg of collagen absorbed intact through your oral mucosa reaches your skin. 10,000mg destroyed by stomach acid does not.",
              },
              {
                id: "q6",
                q: "What if it doesn't work and I've wasted my money?",
                a: "Every Melt order comes with a 30-day money-back guarantee. If you try it for 30 days and don't notice a change — email us. We refund everything. No forms. No lengthy process.",
              },
              {
                id: "q7",
                q: "Will it taste weird?",
                a: "No. Mango flavored and genuinely pleasant. No chalky aftertaste. No cow smell. It dissolves in seconds and leaves nothing behind.",
              },
            ].map((item) => (
              <div key={item.id} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary hover:bg-opacity-30 transition"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">"{item.q}"</h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary flex-shrink-0 transition-transform ${expandedFaq === item.id ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === item.id && (
                  <div className="px-6 py-4 bg-secondary bg-opacity-30 border-t border-border">
                    <p className="text-foreground opacity-90 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: GUARANTEE */}
      <section className="py-16 px-4 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 font-serif">
            Try it for 30 days. If it doesn't work, you pay nothing.
          </h2>

          <div className="bg-accent bg-opacity-10 border-2 border-accent rounded-2xl p-8">
            <p className="text-lg text-foreground opacity-90 leading-relaxed mb-6">
              We're confident enough in how Melt works to back it completely.
            </p>
            <p className="text-lg text-foreground opacity-90 leading-relaxed mb-6">
              Try Melt for 30 days. If you don't notice a difference — email us within 30 days of delivery.
              We'll refund every cent. No forms. No questions asked.
            </p>
            <p className="text-lg font-semibold text-foreground">
              You've already spent money on collagen that didn't work. This time, if it doesn't deliver, the risk is ours.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="py-16 px-4 sm:py-24 bg-gradient-to-br from-primary to-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight font-serif">
            The woman who finally found the thing that actually works.
          </h2>

          <div className="space-y-6 text-lg leading-relaxed mb-12">
            <p>You're the one whose dermatologist notices the change and asks what you did.</p>
            <p>You're the one whose friend pulls her aside at dinner and says "your skin looks incredible."</p>
            <p>You've been waiting for something that actually gets in.</p>
            <p className="font-bold text-3xl">That's Melt.</p>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto">
            {!showEmailCapture ? (
              <button
                onClick={() => setShowEmailCapture(true)}
                className="px-8 py-4 bg-primary-foreground text-primary text-lg font-bold rounded-2xl hover:opacity-90 transition"
              >
                I Want This — Notify Me When Available.
              </button>
            ) : submitted ? (
              <div className="px-8 py-4 bg-accent text-accent-foreground text-lg font-bold rounded-2xl text-center">
                ✓ Thanks! Check your email.
              </div>
            ) : (
              <form name="melt-waitlist" netlify onSubmit={handleEmailSubmit} className="flex flex-col gap-2">
  <input type="hidden" name="form-name" value="melt-waitlist" />
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-foreground placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary-foreground text-primary font-bold rounded-xl hover:opacity-90 transition"
                  >
                    Notify
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setShowEmailCapture(false)}
                  className="text-sm text-primary-foreground opacity-60 hover:opacity-100 transition"
                >
                  Cancel
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-primary-foreground font-bold text-lg mb-4 font-serif">Melt</h3>
              <p className="text-sm leading-relaxed">
                Collagen that actually arrives. No stomach acid. No prep. Results in 14 days.
              </p>
            </div>
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary-foreground transition">How It Works</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition">Ingredients</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition">Science</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground border-opacity-20 pt-8 text-center text-sm">
            <p>© 2024 Melt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

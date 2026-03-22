import Image from "next/image";

const experts = [
  { name: "Daniel Rosenberg", photo: "/photos/author.jpg", title: "Cybersecurity Analyst", category: "Identity Protection" },
  { name: "Rachel Torres", photo: "/photos/review-jennifer.jpg", title: "Business Formation Specialist", category: "LLC Services" },
  { name: "Dr. Michelle Chen", photo: "/photos/review-lisa.jpg", title: "Clinical Psychologist", category: "Online Therapy" },
  { name: "Alex Mercer", photo: "/photos/review-michael.jpg", title: "Web Technology Analyst", category: "Website Builders" },
  { name: "Sarah Whitfield", photo: "/photos/review-sarah.jpg", title: "Consumer Finance Expert", category: "Credit & Insurance" },
];

export default function ExpertTeam() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-2">Meet Our Team</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-3">Our Expert Reviewers</h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">Every review is written by a specialist with real-world experience in their category.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {experts.map((e) => (
            <div key={e.name} className="text-center">
              <Image src={e.photo} alt={e.name} width={80} height={80} className="rounded-full object-cover mx-auto mb-3" style={{ width: 80, height: 80 }} />
              <p className="text-sm font-bold text-[var(--foreground)]">{e.name}</p>
              <p className="text-xs text-[var(--primary)] font-semibold">{e.title}</p>
              <p className="text-[11px] text-gray-400">{e.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

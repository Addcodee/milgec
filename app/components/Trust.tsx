const universities = [
  { name: "China University of Petroleum", logo: "/cup.svg" },
  { name: "Huazhong University of Science and Technology", logo: "/hust.png" },
  { name: "Xi'an Jiaotong University", logo: "/xjtu.png" },
  { name: "East China Normal University", logo: "/ecnu.svg" },
  { name: "South China University of Technology", logo: "/scut.png" },
  { name: "Harbin Institute of Technology", logo: "/hit.gif" },
  { name: "Nanjing University of Information Science and Technology", logo: "/nuist.png" },
  { name: "Zhengzhou University", logo: "/zzu.png" },
];

export default function Trust() {
  return (
    <section className="bg-mesh-light py-20 md:py-24" id="trust">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">Партнёры</p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-navy tracking-[-0.02em] mb-3">
            Почему 6 000+ студентов доверяют MilGEC
          </h2>
          <p className="text-text-muted text-sm max-w-[500px] mx-auto">
            С 2020 года. Штаб-квартира — Циндао, Китай. Филиалы в 7 странах.
            Официальный договор каждому клиенту.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {universities.map((u) => (
            <div
              key={u.name}
              className="card-hover bg-white rounded-2xl px-5 py-7 flex flex-col items-center gap-4 border border-border/50"
            >
              <img
                src={u.logo}
                alt={u.name}
                className="h-14 w-auto object-contain"
              />
              <p className="text-navy/70 text-[11px] font-medium text-center leading-snug">
                {u.name}
              </p>
            </div>
          ))}
        </div>

        <p className="text-text-muted text-xs text-center">
          + ещё 200 университетов-партнёров во всех провинциях Китая
        </p>
      </div>
    </section>
  );
}

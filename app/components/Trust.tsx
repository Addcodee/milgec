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
    <section className="bg-bg-alt py-16 md:py-20" id="trust">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl md:text-[32px] font-bold text-navy text-center mb-4">
          Почему 6 000+ студентов доверяют MilGEC
        </h2>
        <p className="text-text-secondary text-center text-sm mb-12 max-w-[600px] mx-auto">
          С 2020 года. Штаб-квартира — Циндао, Китай. Филиалы в 7 странах.
          Официальный договор каждому клиенту.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {universities.map((u) => (
            <div
              key={u.name}
              className="bg-white rounded-lg px-4 py-5 flex flex-col items-center gap-3 border border-border"
            >
              <img
                src={u.logo}
                alt={u.name}
                className="h-14 w-auto object-contain"
              />
              <p className="text-navy text-xs font-medium text-center leading-snug">
                {u.name}
              </p>
            </div>
          ))}
        </div>

        <p className="text-text-muted text-sm text-center">
          + ещё 200 университетов-партнёров во всех провинциях Китая
        </p>
      </div>
    </section>
  );
}

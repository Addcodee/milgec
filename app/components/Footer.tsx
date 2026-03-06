export default function Footer() {
  return (
    <footer className="relative bg-[#060D1B] overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-300 mx-auto px-6 py-10 md:py-14">
        {/* Main row */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="md:mr-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-light.png" alt="MilGEC" className="h-12 w-auto mb-3" />
            <p className="text-white/25 text-xs max-w-[240px] leading-relaxed">
              Ваш проводник в систему высшего образования Китая с 2020 года.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white/20 text-[10px] font-semibold uppercase tracking-[0.18em] mb-3">Контакты</h4>
            <div className="flex flex-col gap-1.5">
              <a href="tel:+8613792888176" className="text-white/40 text-sm hover:text-white transition-colors">+86 137 9288 8176</a>
              <a href="tel:+8613793265817" className="text-white/40 text-sm hover:text-white transition-colors">+86 137 9326 5817</a>
              <a href="mailto:admission@milgec.com" className="text-white/40 text-sm hover:text-gold transition-colors">admission@milgec.com</a>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-white/20 text-[10px] font-semibold uppercase tracking-[0.18em] mb-3">Офисы</h4>
            <p className="text-white/40 text-sm">
              <span className="text-white/60">Циндао, Китай</span> &middot; <span className="text-gold">Казахстан</span>
            </p>
            <p className="text-white/30 text-xs mt-1.5 max-w-[260px] leading-relaxed">
              Индонезия &middot; Шри-Ланка &middot; Марокко &middot; Россия &middot; Пакистан &middot; Бангладеш &middot; Кыргызстан
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/20 text-[10px] font-semibold uppercase tracking-[0.18em] mb-3">Ссылки</h4>
            <div className="flex flex-col gap-1.5">
              <a href="#about" className="text-white/40 text-sm hover:text-white transition-colors">О нас</a>
              <a href="#partners" className="text-white/40 text-sm hover:text-white transition-colors">Партнёры</a>
              <a href="#pricing" className="text-white/40 text-sm hover:text-white transition-colors">Тарифы</a>
              <a href="#form" className="text-white/40 text-sm hover:text-gold transition-colors">Оценка шансов</a>
            </div>
          </div>

          {/* Messengers */}
          <div className="flex md:flex-col items-center gap-2">
            <a
              href="https://wa.me/8613792888176"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-whatsapp hover:border-whatsapp/30 transition-all"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="mailto:admission@milgec.com"
              className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 transition-all"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/15 text-xs">&copy; 2020–2026 MilGEC. Все права защищены.</p>
          <div className="flex items-center gap-3 text-white/15 text-xs">
            <a href="https://milgec.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/30 transition-colors">milgec.com</a>
            <span>&middot;</span>
            <a href="https://milgec.co.id" target="_blank" rel="noopener noreferrer" className="hover:text-white/30 transition-colors">milgec.co.id</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white/30 transition-colors">Конфиденциальность</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] py-14 md:py-20">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="mb-12">
          <img src="/logo-light.png" alt="MilGEC" className="h-12 w-auto mb-4" />
          <p className="text-white/40 text-sm max-w-[300px]">
            Ваш проводник в систему высшего образования Китая с 2020 года.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Контакты */}
          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Контакты</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              MilGEC — Millennium Gateway
              <br />
              Education China
            </p>
            <p className="text-white/60 text-sm mt-3">
              Тел: +86 137 9288 8176
              <br />
              Тел: +86 137 9326 5817
            </p>
            <p className="text-white/60 text-sm mt-1">
              Email: admission@milgec.com
            </p>
          </div>

          {/* Офисы */}
          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Офисы</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              <strong className="text-white/80">Главный офис:</strong> Циндао, Китай
            </p>
            <p className="text-white/60 text-sm mt-2 leading-relaxed">
              Индонезия &bull; Шри-Ланка &bull; Марокко &bull; Россия &bull;
              Пакистан &bull; Бангладеш &bull; Кыргызстан
            </p>
          </div>

          {/* Ссылки */}
          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Ссылки</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                milgec.com
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                milgec.co.id
              </a>
            </div>
          </div>

          {/* Документы */}
          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Документы</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; 2026 MilGEC. Все права защищены.
          </p>
          <p className="text-white/30 text-xs">
            Millennium Gateway Education China
          </p>
        </div>
      </div>
    </footer>
  );
}

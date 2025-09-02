const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');

function setTheme(mode){
  if(mode === 'dark'){ 
    html.classList.add('dark'); 
    iconSun.classList.remove('hidden'); 
    iconMoon.classList.add('hidden'); 
  } else { 
    html.classList.remove('dark'); 
    iconSun.classList.add('hidden'); 
    iconMoon.classList.remove('hidden'); 
  }
  localStorage.setItem('theme', mode);
}
setTheme(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeToggle.addEventListener('click', ()=> setTheme(html.classList.contains('dark') ? 'light' : 'dark'));
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const iconHamburger = document.getElementById('iconHamburger');
const iconClose = document.getElementById('iconClose');

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  if (isOpen) {
    mobileMenu.classList.add('opacity-0', '-translate-y-4');
    setTimeout(() => mobileMenu.classList.add('hidden'), 300);
    iconHamburger.classList.remove('opacity-0', 'scale-75');
    iconHamburger.classList.add('opacity-100', 'scale-100');
    iconClose.classList.add('opacity-0', 'scale-75');
    iconClose.classList.remove('opacity-100', 'scale-100');
  } else {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
      mobileMenu.classList.remove('opacity-0', '-translate-y-4');
    }, 10);
    iconHamburger.classList.add('opacity-0', 'scale-75');
    iconHamburger.classList.remove('opacity-100', 'scale-100');
    iconClose.classList.remove('opacity-0', 'scale-75');
    iconClose.classList.add('opacity-100', 'scale-100');
  }
});

      // ====== Reveal on scroll ======
      const reveals = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
      }, { threshold: 0.15 });
      reveals.forEach(el => io.observe(el));

      // ====== Back to top ======
      const toTop = document.getElementById('toTop');
      window.addEventListener('scroll', ()=> {
        if(window.scrollY > 600) toTop.classList.remove('hidden'); else toTop.classList.add('hidden');
      });
      toTop.addEventListener('click', ()=> window.scrollTo({ top: 0, behavior: 'smooth' }));

      // ====== Year ======
      document.getElementById('year').textContent = new Date().getFullYear();

      // ====== Dummy data Galeri ======
      const kegiatan = [
        { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop', title: 'Daily Standup', caption: 'Briefing pagi bersama tim' },
        { src: 'https://images.unsplash.com/photo-1521790361543-f645cf042ec4?q=80&w=1600&auto=format&fit=crop', title: 'Setup Perangkat', caption: 'Instalasi & konfigurasi PC' },
        { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop', title: 'Kolaborasi', caption: 'Kerja tim lintas divisi' },
        { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop', title: 'Dokumentasi', caption: 'Mencatat hasil pekerjaan' },
        { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop', title: 'Presentasi', caption: 'Menyajikan laporan mingguan' },
        { src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1600&auto=format&fit=crop', title: 'Pengembangan', caption: 'Belajar automasi sederhana' },
      ];
      const kelompok = [
        { src: 'https://images.unsplash.com/photo-1524443169398-9aa1f7b9c2cd?q=80&w=1600&auto=format&fit=crop', title: 'Kelompok A', caption: 'Tim 1 – Infrastruktur' },
        { src: 'https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?q=80&w=1600&auto=format&fit=crop', title: 'Kelompok B', caption: 'Tim 2 – Helpdesk' },
        { src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop', title: 'Kelompok C', caption: 'Tim 3 – Developer' },
        { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop', title: 'Kelompok D', caption: 'Tim 4 – Desain' },
        { src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop', title: 'Kelompok E', caption: 'Tim 5 – Jaringan' },
        { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop', title: 'Kelompok F', caption: 'Tim 6 – QA' },
      ];
      const pembimbing = [
        { src: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa1?q=80&w=1600&auto=format&fit=crop', title: 'Ibu Sari', caption: 'Pembimbing Lapangan' },
        { src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop', title: 'Bapak Raka', caption: 'Pembimbing Sekolah' },
        { src: 'https://images.unsplash.com/photo-1527980965547-1e04c2bb9c9a?q=80&w=1600&auto=format&fit=crop', title: 'Pak Andi', caption: 'Supervisor' },
        { src: 'https://images.unsplash.com/photo-1544776523-e3d7fa2b062e?q=80&w=1600&auto=format&fit=crop', title: 'Bu Dina', caption: 'HRD' },
        { src: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop', title: 'Pak Rio', caption: 'Network Engineer' },
        { src: 'https://images.unsplash.com/photo-1541534401786-2077eed87a52?q=80&w=1600&auto=format&fit=crop', title: 'Bu Maya', caption: 'UI/UX Mentor' },
      ];

      const panels = {
        kegiatan: document.getElementById('tab-kegiatan'),
        kelompok: document.getElementById('tab-kelompok'),
        pembimbing: document.getElementById('tab-pembimbing')
      };

      function populate(panel, data){
        panel.innerHTML = '';
        data.forEach(item => {
          const tpl = document.getElementById('cardTemplate');
          const node = tpl.content.cloneNode(true);
          const img = node.querySelector('img');
          const title = node.querySelector('.title');
          const caption = node.querySelector('.caption');
          img.src = item.src; img.alt = item.title;
          title.textContent = item.title; caption.textContent = item.caption;
          // Lightbox trigger
          node.querySelector('div.group').addEventListener('click', () => openLightbox(item.src, `${item.title} — ${item.caption}`));
          panel.appendChild(node);
        });
      }

      // Init default
      populate(panels.kegiatan, kegiatan);

      // Tabs
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.tab-btn').forEach(b=>{
            b.classList.remove('bg-brand-600','text-white');
            b.classList.add('border','border-zinc-300','dark:border-zinc-700');
          });
          btn.classList.add('bg-brand-600','text-white');
          btn.classList.remove('border');

          Object.keys(panels).forEach(k => panels[k].classList.add('hidden'));
          const tab = btn.dataset.tab;
          const panel = panels[tab];
          panel.classList.remove('hidden');
          if(panel.children.length === 0){
            if(tab==='kegiatan') populate(panel, kegiatan);
            if(tab==='kelompok') populate(panel, kelompok);
            if(tab==='pembimbing') populate(panel, pembimbing);
          }
        })
      });

      // Lightbox
      const lightbox = document.getElementById('lightbox');
      const lightboxImage = document.getElementById('lightboxImage');
      const lightboxCaption = document.getElementById('lightboxCaption');
      const lightboxClose = document.getElementById('lightboxClose');
      function openLightbox(src, caption){
        lightboxImage.src = src; lightboxCaption.textContent = caption || '';
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
      function closeLightbox(){
        lightbox.classList.add('hidden');
        lightboxImage.src = ''; lightboxCaption.textContent = '';
        document.body.style.overflow = '';
      }
      lightboxClose.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
      document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeLightbox(); });

      // ====== Tambah Entri Jurnal (Demo) ======
      const timelineList = document.querySelector('#timeline ul');
      const addEntryBtn = document.getElementById('addEntryBtn');
      addEntryBtn.addEventListener('click', () => {
        const today = new Date();
        const date = today.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
        const li = document.createElement('li');
        li.className = 'reveal';
        li.innerHTML = `
          <div class="grid sm:grid-cols-2 gap-6 items-start">
            <div class="order-2 sm:order-1 sm:pr-8">
              <div class="rounded-2xl p-5 bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-700">Baru</span>
                  <time class="text-xs text-zinc-500">${date}</time>
                </div>
                <h4 class="text-xl font-bold mb-2">Entri Jurnal Otomatis</h4>
                <p class="text-zinc-700 dark:text-zinc-300">Contoh entri yang ditambahkan secara dinamis. Silakan ganti sesuai kebutuhan.</p>
                <div class="mt-4 flex gap-2 flex-wrap">
                  <span class="px-2.5 py-1 rounded-full text-[11px] bg-zinc-100 dark:bg-zinc-700">Demo</span>
                </div>
              </div>
            </div>
            <div class="order-1 sm:order-2 sm:pl-8">
              <div class="aspect-[16/10] rounded-2xl overflow-hidden shadow-lux ring-1 ring-zinc-200/60 dark:ring-zinc-700/60">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop" alt="Foto entri baru" class="h-full w-full object-cover" />
              </div>
            </div>
          </div>`;
        timelineList.appendChild(li);
        io.observe(li); // animasi reveal
      });

      // ====== Form Kontak (Demo submit) ======
      const contactForm = document.getElementById('contactForm');
      const formStatus = document.getElementById('formStatus');
      contactForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        formStatus.textContent = 'Mengirim...';
        setTimeout(()=> { formStatus.textContent = 'Terkirim! Kami akan membalas segera.'; contactForm.reset(); }, 800);
      });
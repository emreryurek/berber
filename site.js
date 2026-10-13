/* ========================================
   GENTLEMEN BARBER - site.js (ayarlar)
   MÜŞTERİYE TESLİMDE: bilgileri doldur, DEMO'yu false yap.
   Çalışan kod ery-kit.js içinde, ona dokunmana gerek yok.
======================================== */

window.ERY = {
    DEMO: true,
    isletme: 'Gentlemen Barber',
    kisa: 'GB',
    whatsapp: '905555555555',
    telefon: '0555 555 55 55',
    adres: 'Örnek Mah. Örnek Sk. No:1, İstanbul',
    harita: 'https://www.google.com/maps/search/?api=1&query=Istanbul%2C%20Turkey',
    demoMesaj: 'Merhaba, berber örneğindeki online randevu sistemini işletmeme istiyorum.',

    // 0 = Pazar ... 6 = Cumartesi, [açılış, kapanış]; null = kapalı
    saatler: { 0: null, 1: [9, 20], 2: [9, 20], 3: [9, 20], 4: [9, 20], 5: [9, 20], 6: [9, 20] },

    booking: {
        coklu: true,
        adim: 30,
        hizmetEmoji: '✂️',
        hizmetler: [
            { id: 'sac',    ad: 'Saç Kesimi',    fiyat: 400, sure: 30 },
            { id: 'sakal',  ad: 'Sakal Bakımı',  fiyat: 250, sure: 20 },
            { id: 'tiras',  ad: 'Klasik Tıraş',  fiyat: 300, sure: 30 },
            { id: 'paket',  ad: 'Saç & Sakal',   fiyat: 600, sure: 50 },
            { id: 'cocuk',  ad: 'Çocuk Kesimi',  fiyat: 300, sure: 25 },
            { id: 'maske',  ad: 'Yüz Maskesi',   fiyat: 200, sure: 15 }
        ],
        ustaBaslik: 'Usta',
        ustalar: [
            { id: 'murat', ad: 'Murat Usta', unvan: 'Kurucu · 15 yıl' },
            { id: 'emir',  ad: 'Emir',       unvan: 'Kıdemli berber' },
            { id: 'kaan',  ad: 'Kaan',       unvan: 'Berber' }
        ]
    },

    bot: {
        ad: 'Gentlemen Asistan',
        hosgeldin: 'Merhaba! 👋 Gentlemen Barber asistanıyım. Fiyat, boş saat, usta ya da çalışma saatleri hakkında sorabilirsin.',
        hizli: ['Fiyatlar', 'Bugün boş yer var mı?', 'Çalışma saatleri', 'Adres', 'Kart geçiyor mu?'],
        sss: [
            { k: ['fiyat', 'ücret', 'ucret', 'kaç para', 'kac para', 'ne kadar', 'kaç tl', 'kac tl'],
              c: 'Saç kesimi 400 ₺, sakal 250 ₺, saç & sakal 600 ₺, klasik tıraş 300 ₺, çocuk kesimi 300 ₺.', go: '#randevu', btn: 'Randevu al' },
            { k: ['boş', 'bos', 'yer var', 'müsait', 'musait', 'bugün', 'bugun', 'randevu', 'sıra', 'sira', 'bekle'],
              c: function () { var n = document.querySelector('[data-k-next]'); return (n ? n.textContent + '.\n' : '') + 'Online randevuyla boş saatleri görüp hemen yer ayırtabilirsin, sırada beklemezsin.'; }, go: '#randevu', btn: 'Boş saatleri gör' },
            { k: ['saat', 'açık', 'acik', 'kapalı', 'kapali', 'kaçta', 'kacta', 'pazar'],
              c: function () { return 'Pazartesi - Cumartesi 09:00 - 20:00 arası açığız, pazar kapalı.\n' + ERY.acikDurum() + '.'; } },
            { k: ['adres', 'nerede', 'konum', 'yol', 'harita'],
              c: function () { return 'Adresimiz: ' + ERY.adres + '.\nYol tarifi: ' + ERY.harita; } },
            { k: ['usta', 'murat', 'emir', 'kaan', 'kim kes', 'berber kim'],
              c: 'Murat Usta (kurucu, 15 yıl), Emir ve Kaan ile çalışıyoruz. Randevu alırken ustanı seçebilir ya da "Fark etmez" deyip ilk boş saati alabilirsin.', go: '#randevu', btn: 'Usta seç' },
            { k: ['kart', 'nakit', 'ödeme', 'odeme', 'pos', 'iban', 'havale'],
              c: 'Nakit ve kredi kartı geçiyor. Kartla temassız ödeme yapabilirsin.' },
            { k: ['süre', 'sure', 'kaç dakika', 'kac dakika', 'ne kadar sürer', 'uzun sürer'],
              c: 'Saç kesimi yaklaşık 30 dk, saç & sakal 50 dk, klasik tıraş 30 dk sürüyor.' },
            { k: ['çocuk', 'cocuk', 'oğlum', 'oglum', 'küçük'],
              c: 'Çocuk kesimi yapıyoruz, 300 ₺. Hafta sonları yoğun olduğu için randevu almanı öneririz.', go: '#randevu', btn: 'Randevu al' },
            { k: ['iptal', 'erteleme', 'ertele', 'gelemeyeceğim', 'gelemicem', 'değiştir'],
              c: function () { return 'Randevunu iptal etmek ya da saatini değiştirmek için WhatsApp\'tan yazman yeterli: ' + ERY.telefon + '. Lütfen en az 2 saat önce haber ver.'; } },
            { k: ['merhaba', 'selam', 'slm', 'iyi günler', 'sa '],
              c: 'Merhaba! 👋 Nasıl yardımcı olabilirim? Fiyat, boş saat veya adres sorabilirsin.' },
            { k: ['teşekkür', 'tesekkur', 'sağol', 'sagol', 'eyvallah', 'tamam'],
              c: 'Rica ederim, görüşmek üzere! 💈' }
        ]
    }
};

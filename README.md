# 75 Days — Pixel Cat

Ücretsiz, mobil uyumlu bir PWA: günlük hedef listesi, 75 günlük pixel-art ilerlemesi ve günlük notlar.

## Özellikler
- Hedef ekleme, silme ve adını düzenleme
- Bir günün pikseli yalnızca listedeki bütün hedefler tamamlandığında açılır
- 75 günlük ilerleme sayacı ve kedi ızgarası
- Günlük notlar
- JSON yedekleme
- LocalStorage ile cihaz içinde kayıt
- Service Worker ile temel çevrimdışı destek
- GitHub Pages üzerinde ücretsiz yayımlanabilir

## Yerelde çalıştırma

PWA özellikleri `file://` üzerinden tam çalışmaz. Proje klasöründe bir terminal aç:

```bash
python -m http.server 8000
```

Bilgisayarda `http://localhost:8000` adresini aç. Aynı Wi-Fi ağındaki telefondan test etmek için bilgisayarının yerel IP adresini kullanabilirsin; telefonda service worker için HTTPS gerektiğinden çevrimdışı/ana ekran özelliklerini en iyi GitHub Pages yayınıyla test edersin.

## GitHub Pages ile ücretsiz yayınlama
1. GitHub'da yeni bir repository oluştur (ör. `pixel-cat-75`).
2. Bu klasördeki tüm dosyaları repository'nin kök dizinine yükle.
3. Repository → **Settings** → **Pages**.
4. **Deploy from a branch** seç; branch `main`, folder `/(root)` olsun ve kaydet.
5. GitHub'ın verdiği HTTPS adresini telefonda aç.
6. iPhone: Safari → Paylaş → Ana Ekrana Ekle. Android: Chrome menüsü → Uygulamayı yükle / Ana ekrana ekle.

## Kayıtlarla ilgili önemli bilgi
Veriler sadece bu cihazdaki ve bu tarayıcıdaki LocalStorage içinde tutulur. Başka cihaza otomatik senkronize olmaz; tarayıcı verilerini temizlemek kayıtları silebilir. **Verilerimi yedekle** düğmesi JSON dosyası indirir. Bu ilk sürümde içe aktarma özelliği bulunmuyor; dosyayı güvenli bir yerde sakla.

## İşleyiş
- Meydan okuma 75 gün sürer; varsayılan başlangıç tarihi uygulamanın ilk açıldığı gündür.
- Bir günün pikseli için en az bir hedef olmalı ve o gün tüm hedefler tamamlanmalıdır.
- Hedef listesi ortak olduğundan bir hedef eklemek, önceki günler de dahil olmak üzere tüm günlerin tamamlanma koşulunu etkiler. Hedef listesini sık değiştirmemek önerilir.
- Bu sürüm kişisel kullanım için tasarlanmıştır; hesap veya sunucu tarafı yedekleme yoktur.

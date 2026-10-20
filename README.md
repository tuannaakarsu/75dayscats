# Pixel Cat — Kişisel Hedef Takip Meydan Okuması

Ücretsiz, mobil uyumlu ve modern bir PWA: günlük hedef listesi, kişiselleştirilebilir başlangıç-bitiş tarihleri, rastgele atanan farklı piksel kedi modelleri ve arkadaş davet sistemi.

## Yeni Özellikler
- **Özelleştirilebilir Tarihler:** Başlangıç ve bitiş tarihlerini istediğin gibi seç (14 gün, 30 gün, 75 gün, 100 gün veya dilediğin özel tarih aralığı).
- **Rastgele & Farklı Kedi Modelleri:** 6 farklı piksel kedi modeli (Klasik Oturan, Kıvrılmış Uyuyan, Yürüyen Gezgin, Gerinen Yoga Kedisi, Şans Kedisi Maneki-neko, Meraklı Kedi). Bir kedi tamamlandığında yeni bir serüvene başka bir kediyle başlanır.
- **Tek Tıkla Rastgele Kedi Değiştirme:** Arayüzden ya da ayarlardan dilediğin zaman farklı bir kedi modeline geçiş yapabilirsin.
- **Arkadaşına Gönder / Paylaşım:** "🔗 Arkadaşına Gönder" butonuyla link paylaş; arkadaşın linke tıkladığında ona rastgele farklı bir kedi atanır!
- **Dinamik Piksel Ölçekleme:** Meydan okuma kaç gün sürerse sürsün (ister 14 gün, ister 30, ister 75 gün), pikseller orantılı olarak her gün adım adım açılır ve son gün kedi tamamlanır.

## Yerelde Çalıştırma

PWA özellikleri `file://` üzerinden tam çalışmaz. Proje klasöründe bir terminal aç:

```bash
python -m http.server 8000
```

Tarayıcında `http://localhost:8000` adresini aç.

## GitHub Pages ile Ücretsiz Yayınlama
1. GitHub'da yeni bir repository oluştur (ör. `pixel-cat`).
2. Bu klasördeki tüm dosyaları repository'nin kök dizinine yükle.
3. Repository → **Settings** → **Pages**.
4. **Deploy from a branch** seç; branch `main`, folder `/(root)` olsun ve kaydet.
5. GitHub'ın verdiği HTTPS adresini telefonda aç ve ana ekrana ekle.

## To Do List
-------------
### WEBSITE : https://gracious-borg-621e3a.netlify.app/

### Yapılanlar : 
- [x] Kullanıcı sayfayı ilk açtığında ismini ve soyismini sorup localStorage'a
kaydediyoruz. Sonrasında kullanıcıyı ekte görülen ekrana yönlendiriyoruz.
- [x] Bu ekranın sol üst köşesinde bir profil resmi ikonu ile yanına kullanıcın
localStorage'daki ismini koyuyoruz.
- [x] Kullanıcılar bir kart yaratıp bu kartın içine bir "to do list" girebilecekler. Bu kartı
yaratabilmeleri icin ekranda her zaman bir adet “Create” butonu olan kart
bulunduruyoruz. Create butonuna her basıldığında en sona eklenecek şekilde yeni
bir kart yaratıyoruz.
#### Bu kartların içinde:
- [x] Kartın başlığının yazdığı bir text input alanı,
- [x] Bu listenin her elementinde checkbox, text alanı ve sil butonu olacak,
- [x] Kartın sağ üstünde de kartı silmek için bir buton olacak.

### Yapılacaklar
- [ ] Kartlara kategori eklenecek. Her yeni kategori sol tarafta fotoğraf ve isim yazan
kısmın altında görünür olacak.
- [ ] Buradaki kategorilerin yanına bir checkbox ekleyerek, sadece checkboxı seçilen
kategorilerin gösterilmesi sağlanacak. 
- [ ] Kartların en altında kaydet butonu olacak ve kaydet seçimi yapıldıktan sonra
listenin en üstündeki yeni element ekleme input alanı ve sağ üstteki kartı sil butonu kalkacak. Sonrasında tekrar karta yeni element eklemek veya kartı silmek
için kartın üzerine hover edince bir overlay ile sil ve düzenle butonları görünür
hale getirilecek.


### Kullanılan Teknolojiler

Front-End |  
------------ |
React.js |  
React Router Dom |
React Hooks |
Material UI |
Formik |


##  Kurulum Talimatları

### proje dosyanızın içinde react projesi oluşturun cd/todolist:

```create react app .```

### İndirilecekler:
```npm install react-router-dom```
<br>
```npm install @material-ui/core```
<br>
```npm install @material-ui/icons```
<br>
```npm install @material-ui/lab```
<br>
```npm install formik-material-ui```
<br>
```npm install framer-motion```
<br>
```npm install formik```

#### Sunucuyu başlatmak için:

```npm start```

#### Uygulama burada açılacaktır:

```localhost:3000```


**Shopping List Uygulaması Açıklaması**

Bu React Native uygulaması, kullanıcıların alışveriş listesi oluşturmasını ve yönetmesini sağlar. Uygulama SQLite veritabanını kullanarak öğeleri yerel olarak depolar ve yönetir. Aşağıda uygulamanın temel özellikleri ve işleyişi açıklanmıştır:

### Temel Özellikler:
1. **Veritabanı Bağlantısı ve Tablo Oluşturma:**
   - Uygulama, SQLite veritabanına bağlanarak `Items` adlı bir tablo oluşturur. Bu tablo, alışveriş listesi öğelerini depolar.
  
2. **Öğe Ekleme:**
   - Kullanıcı, yeni bir alışveriş listesi öğesi eklemek için bir metin girişi alanına öğenin adını yazar ve "Add" düğmesine tıklar. Bu işlem, öğeyi veritabanına ekler ve listeyi günceller.
  
3. **Öğeleri Getirme:**
   - Uygulama başlatıldığında, mevcut tüm öğeler veritabanından alınarak ekrana yüklenir.

4. **Arayüz ve Kullanıcı Etkileşimi:**
   - Temiz ve kullanıcı dostu bir arayüze sahiptir. Kullanıcılar metin giriş alanına öğe adını yazarak ve "Add" düğmesine basarak listeye öğe ekleyebilirler. Eklenen öğeler liste şeklinde ekranda görüntülenir.

### Kullanım:
- Uygulama açıldığında, veritabanı bağlantısı kurulur ve gerekli tablo oluşturulur.
- Kullanıcı, alışveriş öğelerini metin girişi aracılığıyla ekleyebilir ve eklenen öğeler ekranda listelenir.

### Stil:
- Uygulama, React Native `StyleSheet` kullanılarak basit ve temiz bir tasarımla stilize edilmiştir.
- Renkler, düğmeler ve düzen, kullanıcı deneyimini artıracak şekilde tasarlanmıştır.

Bu uygulama, kullanıcıların alışveriş listelerini kolayca oluşturup yönetmelerine olanak tanır ve SQLite veritabanı ile yerel veri depolama işlevselliği sağlar.

https://github.com/Deryaglmz/ShoppingList/assets/129391768/0d7b6b53-839e-4409-a7a1-77118b5badd7

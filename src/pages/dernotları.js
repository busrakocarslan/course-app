// reactta sadece propsu parentten childe yapabiliyoruz.==>Lifting Style Upp https://www.freecodecamp.org/news/what-is-lifting-state-up-in-react/
//Reactte öncelikli olarak tercih edilen local statelerdir.Bir şey ne kadar lokalize edilirse o kadar performansı artıtırsınız.
//props ile yukarıdan aşağıya her şeyi gönderebiliriz.
// bu sayede parent render olunca childlerda render oluyor. Ama bu durum performans kaybına yol açar bu sebeple ne kadar local de tutabiliyorsak state i o kadar iyi performans yönünden.
//*Lifting style up mutlaka mülakat sorusudur.Her şeyi app da tanımlayıp apptan dağıtma. aslında app denen en yakın parent Her şey app te toplanırsa component olmadan performasn düşer reactın anlamı kalmaz.
//TODO_LİFTİNG STATE UP(stati yukarı kaldır): eğer bir veri birden fazla componentte ihtiyaç duyuluyorsa ve ya statin hem parenttan hem de cahilden kontrol edilmesi gerekiyorsa bunu kullanıyoruz. ilgili ortak parenti bulup oradan kullanabiliyoruz. 
// static dosyalarda foto kullanmak istiyorsak public klasörüne yerleştireceğiz, çünkü static olduğundan build yapılınca src içindeki doaylar bundle edilip public klasöründe buluşuyor bu yüzden doğdurdan aynı yerde gibi çekebiliyoruz. 
//id bilgisini unique olarak oluşturmak için uuid,arayın uzunluğu,son elaman id+1 olabilir. ama en çok kullanılan new Date().getTime()=> o anki vari saniye değerini aldığı için unique değer oluyor. ya da js nin gömülü olarak sunduğu rondomUUid cyrpto bu methodu kullanabilirsin
//*crypto.randomUUID()=>böyle kullanılıyor. dikkat et web ortamında kullanılabiliyor local de kullanamazsın

//JavaScript'te "optional chaining" (opsiyonel zincirleme) özelliği, nesne zincirlerinde veya özelliklere erişirken ortaya çıkabilecek "TypeError" hatalarını önlemek için kullanılan bir özelliktir. Bu özellik, bir nesne zincirinde bir veya daha fazla özelliğe erişirken, zincirin herhangi bir noktasında değerin "null" veya "undefined" olabileceği durumlarda işe yarar.
//Geleneksel olarak, bir nesne zincirinde herhangi bir özelliğe erişirken her adımda null veya undefined olup olmadığını kontrol etmek için birden fazla if ifadesi kullanılır. Ancak, bu işlem karmaşık ve okunması zor olabilir. Optional chaining, bu durumu daha temiz ve kompakt bir şekilde ele alır.
//Optional chaining, bir nesne zincirindeki herhangi bir adımın sonuna "?." işaretini ekleyerek kullanılır. Bu işaret, zincirdeki herhangi bir noktanın null veya undefined olması durumunda JavaScript motorunun işlemi durdurmasını ve TypeError hatası üretmemesini sağlar.
//*Örnek kullanım:
//javascript
//let user = {  name: "John",  address: {    street: "123 Main St",    city: "New York",    zipCode: "10001"  }};
// Bu kod TypeError hatası üretebilir, çünkü user.address null veya undefined olabilir.
//let city = user.address.city;
// Optional chaining kullanarak bu hatayı önleyebiliriz.
let city = user.address?.city;
console.log(city); // Eğer address null veya undefined ise, city undefined olacak.

//Bu örnekte, `user` nesnesinin içinde bir `address` özelliği var. Ancak, `address` özelliği null veya undefined olabilir. Geleneksel olarak, `user.address.city` yazdığımızda eğer `address` null veya undefined ise TypeError hatası alırız. Ancak, optional chaining kullanarak `user.address?.city` yazdığımızda, eğer `address` null veya undefined ise, JavaScript bu hata yerine city değişkenine undefined atar. Bu şekilde, programın beklenmedik şekilde çökmesini önleriz.
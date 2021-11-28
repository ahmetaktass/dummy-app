# PROJE HAKKINDA 
Bu proje ile Türkçe / İngilizce çeviri , Login Modalı ve sayfalara Router vererek gezinmeyi  amaçladım. 

* Bu projede eact-router-dom kullanarak  Router, Switch uyguladım. 
* i18next kullanarak web sitesine TÜrkçe / İngilizce dil desteği eklemedim. 
* Basit bir şekilde kullanıcı giriş modadı ekledim. Gerekli bilgiler  aşağıda mevcuttur.


# KURULUM 
* git clone git@github.com:ahmetaktass/dummy-app.git
* cd dummy-app
* npm install
* npm start


![localhost_3000_ (6)](https://user-images.githubusercontent.com/56774618/143784290-f29bce5d-48bb-4942-8a3b-17d8c761f127.png)



--------------------------------------------------
# Kulalanıcı Giriş Modalı
* components/UserModal.jsx içerisinde bulunan 
 
 constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      userName: 'ahmetaktas',
    }
  }
  
  yapısını  aşağıdaki gibi değiştirin.
  
 constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true,
      userName: 'ahmetaktas',
    }
  }
--------------------------------------------------


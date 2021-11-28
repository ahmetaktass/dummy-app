
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
  
  # yapısını  aşağıdaki gibi değiştirin.
  
 constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true,
      userName: 'ahmetaktas',
    }
  }
--------------------------------------------------


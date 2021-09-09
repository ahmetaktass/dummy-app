
git clone git@github.com:ahmetaktass/dummy-app.git
cd dummy-app
npm install
npm start

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


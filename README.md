FTVEN - Likebox
========================

This project is part of [francetv zoom open source projects](https://github.com/francetv/zoom-public) (iOS, Android and Angular)

Likebox with like and dislike icon

# Get sources

```
git clone git@github.com:francetv/ftv-angular-likebox.git
```

# Required dependencies

- [npm](https://nodejs.org/)
- [gem](https://rubygems.org/)

# Installation process

```
sudo apt-get install ruby ruby-dev gem
npm install -g gulp

npm install
gem update --system
gem install compass

gulp build
```

# Development build for front web only

```
gulp build-dev-watch
```

## Demo

```
gulp build
npm install -g http-server
http-server
```

Open [demo](http://127.0.0.1:8080/demo.html)

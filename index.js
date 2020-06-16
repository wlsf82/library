class Media {
  constructor(title, isCheckedOut = false, ratings = []) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    const ratingSum = this._ratings.reduce((sum, rate) => sum + rate);
    
    return ratingSum / this.ratings.length;
  }

  addRating(rate) {
    if (rate < 1 || rate > 5) {
      return;
    }

    this._ratings.push(rate);
  }
}

module.exports = Media;

class Book extends Media {
  constructor(author, title, pages) {
    super(title);

    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);

    this._director = director;
    this._runTime = runTime;
  }

  get director() {
      return this._director;
    }

  get runtime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);

    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
      return this._artist
    }

  get songs() {
    return this._songs;
  }

  shuffle() {
    const randomSongIndex = Math.floor(Math.random() * this.songs.length);

    return this.songs[randomSongIndex];
  }
}

module.exports = CD;

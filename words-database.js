const words = [];

class Word {
    constructor(wordName, wordDescription, image = null, creationDate, author = 'Antonio Tomassini') {
        this.wordName = wordName;
        this.wordDescription = wordDescription;
        this.image = image;
        this.creationDate = creationDate;
        this.author = author;
    }
}

words.push(new Word('Scheletro Carbonioso', 'Catena di varia lunghezza di atomi di carbonio legati fra loro (e contemporaneamente ad altri elementi per raggiungere l\'ottetto)', undefined, '12/3/2023, 15:11:58'));


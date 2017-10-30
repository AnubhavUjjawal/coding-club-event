class Person {
    constructor(nme, age, birthyear){
        this.nme = nme;
        this.age = age;
        this.birthyear = birthyear;
    }
};

class Programmer extends Person{
    constructor(nme, age, birthyear, favdrink, language){
        super(nme, age, birthyear);
        this.favdrink = favdrink;
        this.language = language;
    }
};

var Anu = new Person(nme="Anurag", age=18, birthyear=1999);
var Anubhav = new Programmer(nme="Anubhav", age=18, birthyear=1999, favdrink="Tang", language="python")
console.log(Anu);
console.log(Anubhav);
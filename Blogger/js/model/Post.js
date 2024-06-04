export class Post{
    #id;
    #titol;
    #data;
    #contingut;
    
    constructor(id,titol,data,contingut){
        this.#id = id;
        this.#titol = titol;
        this.#data = data;
        this.#contingut = contingut;
    }

    get id()        {return this.#id;}
    set id(value)   {this.#id=value;}

    get titol()     {return this.#titol;}
    set titol(value){this.#titol=value;}

    get data()      {return this.#data;}
    set data(value) {this.#data=value;}

    get contingut()      {return this.#contingut;}
    set contingut(value) {this.#contingut=value;}
}
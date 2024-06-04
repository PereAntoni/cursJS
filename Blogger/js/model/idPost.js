export class IdPost{
    #id;
    #titol;
    #data;
    
    constructor(id,titol,data){
        this.#id = id;
        this.#titol = titol;
        this.#data = data;
    }

    get id()        {return this.#id;}
    set id(value)   {this.#id=value;}

    get titol()     {return this.#titol;}
    set titol(value){this.#titol=value;}

    get data()      {return this.#data;}
    set data(value) {this.#data=value;}
}
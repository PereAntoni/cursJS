
import { Post } from "../model/Post.js";
export class PostService{
    #post
    constructor(){
         this.#post; 
    }


    async getPost(){
        //console.log("El valor del token és "+ localStorage.getItem('token'));
        const peticioFetch = await fetch("https://www.googleapis.com/blogger/v3/blogs/5061924546610576807/posts",{
            method: 'get',
            headers: {
                //'Authorization': localStorage.getItem('token')
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        
        })
        const response = await peticioFetch.json();
        console.log(response);
        return response;

        
    }

    #fromJSON(json){
        return new Post(
            json.id,
            json.title,
            json.published,
            json.content
        )
    }
 

    async insertPost(){
        console.log("ENTRAT A INSERTAR......: ")
        await fetch("https://www.googleapis.com/blogger/v3/blogs/5061924546610576807/posts",{
            method: 'post',
            headers: {
                //'Authorization': localStorage.getItem('token')
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        
        })
        .then(r=>r.json())
        .then(r=>{
            
            this.#post = this.#fromJSON(r);
            console.log(this.#post)
        })
        return this.#post

    }

    
    
}
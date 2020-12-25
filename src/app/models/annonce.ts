export interface Annonce {
    annonceId?:String,
    name?:string,
    description?:string,
    prix?:string,
    images?:string,
    category?:string,
    ville?:string,
    dateAnnonce?:Date,
    user?:{
        userId?:string,
        firstName?:string,
        lastName?:string,
        email?:string,
        admin?:boolean
    }
}

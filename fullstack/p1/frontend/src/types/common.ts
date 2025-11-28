export interface SignUpType {
    userName:String,
    email:String,
    password:String
}

export interface PostType {
    userName:String,
    postImg:String,
    title:String,
    body:String,
    _id:String,
}

export interface LoginResponseType {userName:String, token:String, userId:String}
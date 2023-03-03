

export interface Post{
    postID:String;
    content:String;
    authorID:String;
    timeStamp:String;
    postImg:String;
    likes:Number;
    likedByClient:Boolean;
}


export class Post{
    postID!:String;
    content!:String;
    authorID!:String;
    timeStamp!:String;
    postImg!:String;
    likes!:Number;
    likedByClient!:Boolean;
}
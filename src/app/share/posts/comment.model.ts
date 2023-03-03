export interface Reply{
    commentID:String;
    postID:String;
    commenterID:String;
    content:String;
    likes:Number;
    likedByClient:Boolean;
}


export class Reply{
    commentID!:String;
    postID!:String;
    commenterID!:String;
    content!:String;
    likes!:Number;
    likedByClient!:Boolean;
}
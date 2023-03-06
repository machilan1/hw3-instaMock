export interface Reply{
    commentID:string;
    postID:string;
    commenterID:string;
    content:string|null|undefined,
    likes:number;
    likedByClient:boolean;
}



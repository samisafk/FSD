const user = { 
    name: 'SAM',
    imgurl: "https://avatars.githubusercontent.com/u/75417490?v=4",
    imgsize: 90
};


export default function Profile(){
    return(
        <>
            <h1>{user.name}</h1>
            <img classname="avatar"
            src={user.imgurl}
            style={{width:user.imgsize, borderRadius: "50%"}}></img>
        </>
    );
}
            
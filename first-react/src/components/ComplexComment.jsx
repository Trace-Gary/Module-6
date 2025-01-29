function ComplexComment(props) { 
    return (
        <div className="Comment componentBox">
            <div className="UserInfo"> 
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
                <div className="UserInfo-name">{props.author.name}</div>
            </div>
            <div className="Comment-text"> 
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date.toLocaleString()}
            </div>
        </div>
    );
}


// function Comment(props) {
//     return (
//         <div className="Comment componentBox">
//             <UserInfo user={props.author} /> {/* here we pass the author prop down to the UserInfo component */}
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//         <div className="Comment-date">
//             {props.date.toLocaleString()}
//         </div>
//     </div>
//     )
// }

export default ComplexComment;
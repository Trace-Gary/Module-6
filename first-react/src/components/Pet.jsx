function Pet(props) {
    let type = 'unknown'; 
    if (props.type) type = props.type; 
    return (
        <div className="Pet componentBox">
        <h2>My Pet</h2> <p>Type: {type}</p>
        {props.name ? <p>Name: {props.name}</p> : null}
        {props.colour && <p>Colour: {props.colour}</p>}
        </div>
    )
}
    
export default Pet; // render this component in App.jsx. Try out different prop values, add support for more
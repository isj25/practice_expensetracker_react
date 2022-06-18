import "./Card.css";


function Card(props)
{
    const classes = props.className;
    const classname = "card "+classes;
    return(
        
        <div className={classname}>
            {props.children}
        </div>
    );
}


export default Card;
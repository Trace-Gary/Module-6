
function FancyBox(props) {
    return (
        <div className={'FancyBox FancyBox-' + props.color}>
            {props.children}
        </div>
    );
}

function Callout(props) {
    return (
        <FancyBox color="blue">
            <h1 className="Callout-title">{props.title}</h1>
            <p className="Callout-message">{props.message}</p>
            {props.children}
        </FancyBox>
);
}

<Callout title="Nested React Component"
    message="Simple message with a fancy box applied via composition">
    <FullName first="Elon" last="Musk" />
</Callout>

export default FancyBox;
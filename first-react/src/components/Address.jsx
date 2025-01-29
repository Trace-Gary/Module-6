function City({street, state = 'NSW', zipcode = '12345',
    children}) {
    // destructuring the props.children property as well
    
    return (
        <div className="City">
            <strong>{street}</strong> is in {state}, {zipcode}
            {children}
        </div>
    )
}
export default Address;
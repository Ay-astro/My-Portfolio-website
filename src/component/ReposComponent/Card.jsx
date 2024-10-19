function card({children, proCard}) {
    return (
        <div className={`proCard ${proCard}`}>
        {children}
        </div>
    )
}

export default card

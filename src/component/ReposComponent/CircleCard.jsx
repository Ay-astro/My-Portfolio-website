function CircleCard({children, circleWidth}) {
    return (
        <div className={`circleDiv ${circleWidth}`}>
        {children}
        </div>
    )
}

export default CircleCard

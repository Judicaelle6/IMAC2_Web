const Character = (props) => {
    return (
    <div>
            <h1>
            {props.name}
            </h1>
            <h2>
            {props.job}
            </h2>
            <p>
            {props.age}
            </p>
            <p>
            {"Is" + ((props.isInPrison) ? " ":  "not") + "in prison"}
            </p>
    </div>)
};

export default Character;

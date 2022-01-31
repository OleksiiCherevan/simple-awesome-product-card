import "./style.scss";

export default function Price(props) {
    const {symbol="$", value="301.88"} = props


    return <div className="card-price">
        <div className="card-price__label">
            { `${symbol}${value}`}
        </div>
    </div>;
}

import "./style.scss";

export default function Price(props) {
    const {symbol="", amount=0} = props


    return <div className="card-price">
        <div className="card-price__label">
            { `${symbol}${amount}`}
        </div>
    </div>;
}

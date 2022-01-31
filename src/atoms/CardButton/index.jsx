import "./style.scss";

export default function CardButton(props) {
    const { symbol = "&", children = "&" } = props;

    return <div className="card-button pointer">{symbol && children}</div>;
}

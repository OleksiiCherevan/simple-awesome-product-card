import "./style.scss"
export default function CardLabel(props) {
    const {label} = props


    return (
        <div className="card-label">{label}</div>
    )
}
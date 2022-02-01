import "./style.scss";

export default function CardAttributeSize(props) {
    const { attribute = {}, value, isSelected, isDefault } = props;

    if (isDefault) {
        return (
            <div className="card-attribute-size card-attribute-size_default pointer">
                {value}
            </div>
        );
    }

    if (isSelected) {
        return (
            <div className="card-attribute-size card-attribute-size_selected pointer">
                {value}
            </div>
        );
    }   

    return <div className="card-attribute-size  pointer">{value}</div>;
}

import "./style.scss";

export default function CardAttributeColor(props) {
    const { value: color , isSelected, isDefault } = props;
    // const { value } = attribute

    if (isDefault) {
        return (
            <div
                className="card-attribute-color card-attribute-color_selected"
                style={{
                    border: `solid 1px ${color}`,
                }}
            >
                <div
                    className="card-attribute-color__inner-circle"
                    style={{
                        backgroundColor: color,
                    }}
                ></div>
            </div>
        );
    }

    if (isSelected) {
        return (
            <div
                className="card-attribute-color card-attribute-color_selected"
                style={{
                    border: `solid 1px ${color}`,
                }}
            >
                <div
                    className="card-attribute-color__inner-circle"
                    style={{
                        backgroundColor: color,
                    }}
                ></div>
            </div>
        );
    }

    return (
        <div
            className="card-attribute-color  pointer"
            style={{
                backgroundColor: color,
            }}
        ></div>
    );
}

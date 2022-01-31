import "./style.scss";
export default function CardAttribute(props) {
    const { id, attribute } = props;

    
    return (
        <div className="card-attribute">
            <input
                className="card-attribute__input"
                // onChange={() => {}}
                // onClick={() =>
                //     onClick(id, attribute)
                // }
                id={id + attribute}
                type="radio"
                checked={isChecked}
                name={id + attribute}
                value={id + attribute}
            />
            <label
                className="card-attribute__label"
                style={{
                    height: 50,
                    width: 50,
                    backgroundColor: attribute,
                }}
                htmlFor={id + attribute}
            >
                {/* {attribute} */}
            </label>
        </div>
    );
}

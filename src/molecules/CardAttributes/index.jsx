import "./style.scss";

import { useState, useEffect } from "react";
import CardAttributeColor from "../../atoms/CardAttributeColor";
import CardAttributeSize from "../../atoms/CardAttributeSize";

export default function CardAttributes(props) {
    const {
        attributes = [],
        cardAttribute = "",
        defaultIndex = 0,
        attributesCount = 10,
    } = props;

    const [selectIndex, setSelectIndex] = useState(defaultIndex);
    const [isDefault, setIsDefault] = useState(true);
    const [currentAttributes, setCurrentAttributes] = useState(attributes);

    const onLeftClick = () => {
        let index = selectIndex;
        index = index - 1 >= 0 ? index - 1 : currentAttributes.length - 1;

        let oldAttributes = [...currentAttributes];
        let shiftAttributes = oldAttributes.splice(
            oldAttributes.length - 1,
            oldAttributes.length
        );
        let newAttributes = shiftAttributes.concat(oldAttributes);

        setCurrentAttributes(newAttributes);
        setIsDefault(false);
    };

    const onRigthClick = () => {
        let index = selectIndex;
        index = selectIndex + 1 < currentAttributes.length ? index + 1 : 0;

        let oldAttributes = [...currentAttributes];
        let shiftAttributes = oldAttributes.splice(0, index);
        let newAttributes = oldAttributes.concat(shiftAttributes);

        setCurrentAttributes(newAttributes);
        setIsDefault(false);
    };

    const onAttributeClick = (index) => {
        if (index > selectIndex) {
            let oldAttributes = [...currentAttributes];
            let shiftAttributes = oldAttributes.splice(0, index);
            let newAttributes = oldAttributes.concat(shiftAttributes);
            setCurrentAttributes(newAttributes);
        } else {
            let oldAttributes = [...currentAttributes];
            let shiftAttributes = oldAttributes.splice(
                oldAttributes.length - 1,
                oldAttributes.length
            );
            let newAttributes = shiftAttributes.concat(oldAttributes);
            setCurrentAttributes(newAttributes);
        }

        setIsDefault(false);
    };

    useEffect(() => {}, [selectIndex]);

    return (
        <div className="card-attributes disable-select">
            <div
                className="card-attributes__button card-attributes__button_left pointer"
                onClick={onLeftClick}
            >
                <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.21494 2.21494L2.91494 6.50494L7.21494 10.7949C7.40325 10.9832 7.50903 11.2386 7.50903 11.5049C7.50903 11.7712 7.40325 12.0266 7.21494 12.2149C7.02664 12.4032 6.77124 12.509 6.50494 12.509C6.23864 12.509 5.98325 12.4032 5.79494 12.2149L0.794943 7.21494C0.701214 7.12198 0.626818 7.01138 0.57605 6.88952C0.525281 6.76766 0.499143 6.63695 0.499143 6.50494C0.499143 6.37293 0.525281 6.24222 0.57605 6.12036C0.626818 5.99851 0.701214 5.8879 0.794943 5.79494L5.79494 0.794943C5.88818 0.701704 5.99887 0.627742 6.12069 0.577282C6.24251 0.526822 6.37308 0.500851 6.50494 0.500851C6.6368 0.500851 6.76737 0.526822 6.88919 0.577282C7.01101 0.627742 7.1217 0.701704 7.21494 0.794943C7.30818 0.888182 7.38214 0.998871 7.4326 1.12069C7.48306 1.24252 7.50903 1.37308 7.50903 1.50494C7.50903 1.6368 7.48306 1.76737 7.4326 1.88919C7.38214 2.01101 7.30818 2.1217 7.21494 2.21494Z"
                        fill="white"
                        fill-opacity="0.79"
                    />
                </svg>
            </div>

            <div className="card-attributes__items">
                {currentAttributes.map((attribute, index) => {
                    return (
                        <div onClick={() => onAttributeClick(index)}>
                            {cardAttribute === "color" ? (
                                <CardAttributeColor
                                    key={attribute}
                                    value={attribute}
                                    isDefault={
                                        index === defaultIndex && isDefault
                                    }
                                    isSelected={index === selectIndex}
                                />
                            ) : cardAttribute === "size" &&
                              index < attributesCount ? (
                                <CardAttributeSize
                                    key={attribute}
                                    value={attribute}
                                    isDefault={
                                        index === defaultIndex && isDefault
                                    }
                                    isSelected={index === selectIndex}
                                />
                            ) : null}
                        </div>
                    );
                })}
            </div>

            <div
                className="card-attributes__button card-attributes__button_right pointer"
                onClick={onRigthClick}
            >
                <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.785058 2.21494L5.08506 6.50494L0.785058 10.7949C0.596754 10.9832 0.490967 11.2386 0.490967 11.5049C0.490967 11.7712 0.596754 12.0266 0.785058 12.2149C0.973362 12.4032 1.22876 12.509 1.49506 12.509C1.76136 12.509 2.01675 12.4032 2.20506 12.2149L7.20506 7.21494C7.29879 7.12198 7.37318 7.01138 7.42395 6.88952C7.47472 6.76766 7.50086 6.63695 7.50086 6.50494C7.50086 6.37293 7.47472 6.24222 7.42395 6.12036C7.37318 5.99851 7.29879 5.8879 7.20506 5.79494L2.20506 0.794943C2.11182 0.701704 2.00113 0.627742 1.87931 0.577282C1.75749 0.526822 1.62692 0.500851 1.49506 0.500851C1.3632 0.500851 1.23263 0.526822 1.11081 0.577282C0.988987 0.627742 0.878297 0.701704 0.785059 0.794943C0.69182 0.888182 0.617859 0.998871 0.567399 1.12069C0.516938 1.24252 0.490967 1.37308 0.490967 1.50494C0.490967 1.6368 0.516938 1.76737 0.567399 1.88919C0.617859 2.01101 0.69182 2.1217 0.785058 2.21494Z"
                        fill="white"
                        fill-opacity="0.79"
                    />
                </svg>
            </div>
        </div>
    );
}

import "./style.scss";

import { useState } from "react";

import CardPrice from "../../atoms/CardPrice";
import CardLabel from "../../atoms/CardLabel";

import CardButton from "../../atoms/CardButton";
import CardButtonBuy from "./../../atoms/CardButtonBuy";
import CardAttributes from "../../molecules/CardAttributes";

const DEFAULT_ATTRIBUTES_COUNT = 4;
const MAX_ATTRIBUTES_COUNT = 5;

export default function ProductCard(props) {
    const { attributes, image, name, price, isOutOfStock = false } = props;

    const [isHover, setIsHover] = useState(false);
    const [isHoverLastAttributes, setIsHoverLastAttributes] = useState(false);

    const onEnterCard = (event) => {
        setIsHover(true);
    };

    const onLeaveCard = (event) => {
        setIsHover(false);
    };

    const onEnterSize = () => {
        setIsHoverLastAttributes(true);
    };

    const onLeaveSize = () => {
        setIsHoverLastAttributes(false);
    };

    return (
        <div
            className={"product-card"}
            onMouseEnter={onEnterCard}
            onMouseLeave={onLeaveCard}
        >
            <div className="product-card__image-wrapper">
                <img
                    className="product-card__image"
                    src={image}
                    alt="short descripiton"
                />
            </div>

            <div className="product-card__gradient"></div>

            <div className="product-card__price-wrapper">
                <CardPrice {...price}></CardPrice>
            </div>

            <div className="product-card__label-wrapper">
                <CardLabel label={name}></CardLabel>
            </div>

            {isOutOfStock ? (
                <div className="product-card__out-of-stock disable-select">
                    Out of Stock
                </div>
            ) : null}

            {/* Show buttons and attributes  */}
            {isHover && !isOutOfStock ? (
                <>
                    <div className="product-card__share-wrapper">
                        <CardButton>
                            {
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.9999 11.6667C14.5075 11.6699 14.022 11.7822 13.5782 11.9955C13.1344 12.2087 12.7434 12.5176 12.4332 12.9L8.18321 10.9417C8.38304 10.3298 8.38304 9.6702 8.18321 9.05833L12.4332 7.09999C12.9346 7.70497 13.6335 8.11339 14.4067 8.25319C15.1798 8.39299 15.9776 8.25518 16.659 7.86408C17.3405 7.47298 17.8619 6.85372 18.1312 6.11561C18.4005 5.3775 18.4004 4.56798 18.131 3.82992C17.8615 3.09185 17.34 2.4727 16.6585 2.08172C15.977 1.69074 15.1792 1.55307 14.4061 1.69301C13.6329 1.83296 12.9341 2.24151 12.4328 2.84657C11.9316 3.45163 11.6602 4.21431 11.6665 4.99999C11.6691 5.19852 11.6886 5.39647 11.7249 5.59166L7.32488 7.61666C6.85578 7.15798 6.26175 6.84792 5.61722 6.72535C4.97269 6.60278 4.30631 6.67313 3.70159 6.9276C3.09687 7.18207 2.58068 7.60934 2.21771 8.15588C1.85475 8.70241 1.66113 9.34391 1.66113 9.99999C1.66113 10.6561 1.85475 11.2976 2.21771 11.8441C2.58068 12.3906 3.09687 12.8179 3.70159 13.0724C4.30631 13.3269 4.97269 13.3972 5.61722 13.2746C6.26175 13.1521 6.85578 12.842 7.32488 12.3833L11.7249 14.4083C11.6886 14.6035 11.6691 14.8015 11.6665 15C11.6665 15.6593 11.862 16.3037 12.2283 16.8519C12.5946 17.4001 13.1152 17.8273 13.7243 18.0796C14.3334 18.3319 15.0036 18.3979 15.6502 18.2693C16.2968 18.1407 16.8907 17.8232 17.3569 17.357C17.8231 16.8908 18.1405 16.2969 18.2692 15.6503C18.3978 15.0037 18.3318 14.3335 18.0795 13.7244C17.8272 13.1153 17.3999 12.5947 16.8518 12.2284C16.3036 11.8622 15.6592 11.6667 14.9999 11.6667ZM14.9999 3.33333C15.3295 3.33333 15.6518 3.43108 15.9258 3.61421C16.1999 3.79735 16.4135 4.05764 16.5397 4.36219C16.6658 4.66673 16.6988 5.00184 16.6345 5.32514C16.5702 5.64845 16.4115 5.94542 16.1784 6.1785C15.9453 6.41159 15.6483 6.57033 15.325 6.63464C15.0017 6.69894 14.6666 6.66594 14.3621 6.53979C14.0575 6.41365 13.7972 6.20003 13.6141 5.92594C13.431 5.65186 13.3332 5.32963 13.3332 4.99999C13.3332 4.55797 13.5088 4.13404 13.8214 3.82148C14.1339 3.50892 14.5579 3.33333 14.9999 3.33333ZM4.99988 11.6667C4.67025 11.6667 4.34801 11.5689 4.07393 11.3858C3.79985 11.2026 3.58623 10.9423 3.46008 10.6378C3.33394 10.3333 3.30093 9.99815 3.36524 9.67484C3.42955 9.35154 3.58828 9.05457 3.82137 8.82148C4.05446 8.5884 4.35143 8.42966 4.67473 8.36535C4.99803 8.30104 5.33314 8.33405 5.63769 8.46019C5.94223 8.58634 6.20253 8.79996 6.38566 9.07404C6.5688 9.34812 6.66655 9.67036 6.66655 9.99999C6.66655 10.442 6.49095 10.8659 6.17839 11.1785C5.86583 11.4911 5.44191 11.6667 4.99988 11.6667ZM14.9999 16.6667C14.6702 16.6667 14.348 16.5689 14.0739 16.3858C13.7998 16.2026 13.5862 15.9423 13.4601 15.6378C13.3339 15.3333 13.3009 14.9981 13.3652 14.6748C13.4295 14.3515 13.5883 14.0546 13.8214 13.8215C14.0545 13.5884 14.3514 13.4297 14.6747 13.3654C14.998 13.301 15.3331 13.334 15.6377 13.4602C15.9422 13.5863 16.2025 13.8 16.3857 14.074C16.5688 14.3481 16.6665 14.6704 16.6665 15C16.6665 15.442 16.491 15.8659 16.1784 16.1785C15.8658 16.4911 15.4419 16.6667 14.9999 16.6667Z"
                                        fill="white"
                                        fillOpacity="0.97"
                                    />
                                </svg>
                            }
                        </CardButton>
                    </div>

                    <div className="product-card__favorite-wrapper">
                        <CardButton>
                            {
                                <svg
                                    width="18"
                                    height="16"
                                    viewBox="0 0 18 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.8001 2.16666C14.9167 1.281 13.7457 0.740446 12.4987 0.642637C11.2516 0.544829 10.0107 0.896217 9.00007 1.63333C7.93978 0.844693 6.62006 0.487088 5.30667 0.632527C3.99327 0.777965 2.78377 1.41564 1.92171 2.41715C1.05966 3.41866 0.609085 4.7096 0.660734 6.03001C0.712383 7.35042 1.26242 8.60222 2.20007 9.53333L7.37507 14.7167C7.80842 15.1431 8.39206 15.3822 9.00007 15.3822C9.60808 15.3822 10.1917 15.1431 10.6251 14.7167L15.8001 9.53333C16.7731 8.55438 17.3192 7.23022 17.3192 5.85C17.3192 4.46977 16.7731 3.14561 15.8001 2.16666ZM14.6251 8.38333L9.45007 13.5583C9.39118 13.6178 9.32109 13.665 9.24385 13.6972C9.16661 13.7294 9.08375 13.746 9.00007 13.746C8.91638 13.746 8.83352 13.7294 8.75628 13.6972C8.67904 13.665 8.60896 13.6178 8.55007 13.5583L3.37507 8.35833C2.72153 7.69028 2.35558 6.79288 2.35558 5.85833C2.35558 4.92377 2.72153 4.02637 3.37507 3.35833C4.04103 2.70082 4.93921 2.33214 5.87507 2.33214C6.81092 2.33214 7.7091 2.70082 8.37507 3.35833C8.45254 3.43644 8.5447 3.49843 8.64625 3.54074C8.7478 3.58305 8.85672 3.60483 8.96673 3.60483C9.07674 3.60483 9.18567 3.58305 9.28721 3.54074C9.38876 3.49843 9.48093 3.43644 9.5584 3.35833C10.2244 2.70082 11.1225 2.33214 12.0584 2.33214C12.9943 2.33214 13.8924 2.70082 14.5584 3.35833C15.2209 4.01762 15.5989 4.91015 15.6114 5.84473C15.6238 6.77931 15.2698 7.68161 14.6251 8.35833V8.38333Z"
                                        fill="white"
                                        fillOpacity="0.97"
                                    />
                                </svg>
                            }
                        </CardButton>
                    </div>


                    {/* Show buttons and attributes  */}
                    <div className="product-card__attributes-wrapper">
                        {attributes.map((attribute, index) => (
                            // Check is it the last attributes?
                            <>
                                {/* If it isn`t the last element we`ll show default attributes and if it`s w`ll show attributes with buy button */}
                                {index !== attributes.length - 1 ? (
                                    <div className="product-card__attribute-items-wrapper">
                                        <CardAttributes
                                            cardAttribute={attribute.id}
                                            attributes={attribute.items}
                                        ></CardAttributes>
                                    </div>
                                ) : (
                                    <>
                                        {/* I check does mouse enter the last elemnt */}
                                        {!isHoverLastAttributes ? (
                                            <div className="product-card__attribute-items-wrapper">
                                                <div
                                                    className="product-card__attribute-items-buy"
                                                    onMouseEnter={onEnterSize}
                                                    onMouseLeave={onLeaveSize}
                                                >
                                                    <CardAttributes
                                                        cardAttribute={
                                                            attribute.id
                                                        }
                                                        attributes={
                                                            attribute.items
                                                        }
                                                        attributesCount={
                                                            DEFAULT_ATTRIBUTES_COUNT
                                                        }
                                                    ></CardAttributes>
                                                </div>
                                                <CardButtonBuy></CardButtonBuy>
                                            </div>
                                        ) : (
                                            <div className="product-card__attribute-items-wrapper">
                                                <div
                                                    className="product-card__attribute-items-buy"
                                                    onMouseEnter={onEnterSize}
                                                    onMouseLeave={onLeaveSize}
                                                >
                                                    <CardAttributes
                                                        cardAttribute={
                                                            attribute.id
                                                        }
                                                        attributes={
                                                            attribute.items
                                                        }
                                                        attributesCount={
                                                            MAX_ATTRIBUTES_COUNT
                                                        }
                                                    ></CardAttributes>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </>
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    );
}

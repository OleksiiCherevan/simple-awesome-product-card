import "./style.scss";

import CardPrice from "./../../atoms/CardPrice";
import CardLabel from "../../atoms/CardLabel";

import productImg from "./../../assets/img/Example.png";

export default function ProductCard() {
    return (
        <div className="product-card">
            <div className="product-card__image-wrapper">
                <img className="product-card__image" src={productImg} alt="short descripiton" />
            </div>
            <div className="product-card__price-wrapper">
                <CardPrice></CardPrice>
            </div>
            <div className="product-card__label-wrapper">
                <CardLabel label={'Soho Coat'}></CardLabel>
            </div>
        </div>
    );
}

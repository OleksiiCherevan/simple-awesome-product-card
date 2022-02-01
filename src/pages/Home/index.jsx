import "./style.scss";


import ProductCard from "../../organisms/ProductCard";

import productImg from "./../../assets/img/Example.png";

const product = {
    image: productImg,
    name: 'soho coat',
    attributes: [
        {
            id: "color",
            items: ["red", "tomato", "blue", "green", "white"],
        },
        {
            id: "size",
            items: ["XS", "S", "M", "L", "XL"],
        },
    ],
    price: {
        symbol: '$',
        amount: '301.88'
    },
    isOutOfStock: false,
}

const Home = () => {
    return (
        <div className="home">
            <ProductCard {...product}></ProductCard>
            <ProductCard {...product} isOutOfStock={true}></ProductCard>
        </div>
    );
};

export default Home;

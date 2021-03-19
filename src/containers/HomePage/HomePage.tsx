import Card1 from "components/Card1/Card1";
import { Card2Props } from "components/Card2/Card2";
import SectionHero1 from "components/SectionHero1/SectionHero1";
import p2Img from "images/p2.png";
import p3Img from "images/p3.png";
import React from "react";
import SectionDeal from "./SectionDeal";
import SectionLogoClounds from "./SectionLogoClounds";
import SectionTrens from "./SectionTrens";
import p5 from "images/p5.png";
import p6 from "images/p6.png";
import p7 from "images/p7.png";
import p8 from "images/p8.png";
import p9 from "images/p9.png";
import p10 from "images/p10.png";
import p11 from "images/p11.png";
import p13 from "images/p13.png";
import p15 from "images/p15.png";
import p16 from "images/p16.png";
import Header from "components/Header/Header";
export const CARD_DATA: Card2Props[] = [
  {
    id: "tren1_card2_1",
    price: "$144",
    oldPrice: "$244",
    saleUp: "12%",
    name: "Women Wool Runner",
    img: p5,
    img2: p15,
  },
  {
    id: "tren1_card2_2",
    price: "$244",
    name: "Two Colure Hoodie",
    img: p7,
    img2: p6,
  },
  {
    id: "tren1_card2_3",
    price: "$164",
    name: "Beautifull Stylish Handbag",
    img: p16,
  },
  {
    id: "tren1_card2_4",
    price: "$224",
    oldPrice: "$333",
    saleUp: "11%",
    name: "Shadedeye Gold Sunglasses",
    img: p8,
    img2: p9,
  },

  {
    id: "tren1_card2_5",
    price: "$322",
    name: "Stylish Smart Watch",
    img: p13,
  },
  {
    id: "tren1_card2_6",
    price: "$844",
    oldPrice: "$944",
    saleUp: "10%",
    name: "Gray Fitness T-Shirt",
    img: p10,
    img2: p11,
  },
  {
    id: "tren1_card2_7",
    price: "$244",
    name: "Two Colure Hoodie",
    img: p7,
    img2: p6,
  },
  {
    id: "tren1_card2_8",
    price: "$164",
    name: "Beautifull Stylish Handbag",
    img: p16,
  },
];
export const CARD2_DATA: Card2Props[] = [
  {
    id: "tren1_card2_11",
    price: "$144",
    oldPrice: "$244",
    saleUp: "12%",
    name: "Women Wool Runner",
    img: p5,
    img2: p15,
  },
  {
    id: "tren1_card2_21",
    price: "$244",
    name: "Two Colure Hoodie",
    img: p7,
    img2: p6,
  },
  {
    id: "tren1_card2_31",
    price: "$164",
    name: "Beautifull Stylish Handbag",
    img: p16,
  },
  {
    id: "tren1_card2_41",
    price: "$224",
    oldPrice: "$333",
    saleUp: "11%",
    name: "Shadedeye Gold Sunglasses",
    img: p8,
    img2: p9,
  },

  {
    id: "tren1_card2_51",
    price: "$322",
    name: "Stylish Smart Watch",
    img: p13,
  },
  {
    id: "tren1_card2_61",
    price: "$844",
    oldPrice: "$944",
    saleUp: "10%",
    name: "Gray Fitness T-Shirt",
    img: p10,
    img2: p11,
  },
  {
    id: "tren1_card2_71",
    price: "$244",
    name: "Two Colure Hoodie",
    img: p7,
    img2: p6,
  },
  {
    id: "tren1_card2_81",
    price: "$164",
    name: "Beautifull Stylish Handbag",
    img: p16,
  },
];

export default function HomePage() {
  return (
    <div className="pb-14 bg-white dark:bg-gray-800">
      {/*  */}
      <Header />
      {/*  */}
      <SectionHero1 />
      <section className="py-8 md:py-14 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card1 name="New Arrival" />
            <Card1 name="Running shoes" img={p2Img} />
            <Card1 name="New Arrival" img={p3Img} />
          </div>
        </div>
      </section>
      <SectionTrens cards={CARD_DATA} />
      <SectionDeal />
      <SectionTrens cards={CARD2_DATA} />
      <SectionLogoClounds />
    </div>
  );
}

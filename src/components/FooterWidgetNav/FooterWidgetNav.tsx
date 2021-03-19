import React from "react";

export interface FooterWidgetNavProps {
  dataIndex?: number;
}

const FooterWidgetNav: React.FC<FooterWidgetNavProps> = ({ dataIndex = 0 }) => {
  const data = [
    [
      "Phone: 888-999-000-1425",
      "Email: zango@mail.com",
      "Address: 22/1 natinoal city austria,dreem land, Huwai",
    ],
    [
      "About us",
      "Best services",
      "Recent insight",
      "Shipping guid",
      "Privacy policy",
    ],
    [
      "Payment method",
      "Tearms of use",
      "Shipping policy",
      "Shipping guide",
      "Return policy",
    ],
    ["Facebook", "Twitter", "Linkedin", "Pinterest", "Instagram"],
  ];
  const title = ["contact info", "Company", "Payment & Shipping", "Follow us"];

  const _renderItem = (item: string) => {
    return (
      <li key={item}>
        <a
          href="#root"
          className="inline-block py-2 capitalize hover:text-white"
        >
          {item}
        </a>
      </li>
    );
  };
  return (
    <div>
      <h2 className="uppercase text-gray-300 mb-6 text-base">
        {title[dataIndex]}
      </h2>
      <ul className="text-gray-400 text-sm font-LibreFranklin">
        {data[dataIndex].map((item) => _renderItem(item))}
      </ul>
    </div>
  );
};

export default FooterWidgetNav;

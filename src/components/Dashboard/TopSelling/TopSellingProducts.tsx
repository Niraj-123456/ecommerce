import React from "react";
import Image from "next/image";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const TopSellingProducts = () => {
  return (
    <div className="w-[40%] p-10">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">Top selling products</h1>
        <div className="text-md font-semibold">
          See all
          <span>
            <ChevronRightIcon />
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-5 mt-8">
          <div className="text-[#7979B2]">1</div>
          <div className="w-[54px] h-[54px] custom__border__radius__md relative overflow-hidden">
            <Image
              src="/images/tshirt-1.png"
              alt="t-shirt"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p>Tshirt Levis</p>
            <p className="font-bold">$ 49.99</p>
          </div>
        </div>
        <div className="flex items-center gap-5 mt-8">
          <div className="text-[#7979B2]">2</div>
          <div className="w-[54px] h-[54px] custom__border__radius__md relative overflow-hidden">
            <Image
              src="/images/tshirt-2.jpg"
              alt="t-shirt"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p>Long jeans jacket</p>
            <p className="font-bold">$ 49.99</p>
          </div>
        </div>
        <div className="flex items-center gap-5 mt-8">
          <div className="text-[#7979B2]">3</div>
          <div className="w-[54px] h-[54px] custom__border__radius__md relative overflow-hidden">
            <Image
              src="/images/tshirt-3.webp"
              alt="t-shirt"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p>Fullcap</p>
            <p className="font-bold">$ 49.99</p>
          </div>
        </div>
        <div className="flex items-center gap-5 mt-8">
          <div className="text-[#7979B2]">4</div>
          <div className="w-[54px] h-[54px] custom__border__radius__md relative overflow-hidden">
            <Image
              src="/images/tshirt-4.avif"
              alt="t-shirt"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p>Addidas pants</p>
            <p className="font-bold">$ 49.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;

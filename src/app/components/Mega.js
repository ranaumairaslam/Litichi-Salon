"use client";

import Link from "next/link";
import { megaMenuData } from "../data/megaMenuData";

export default function Mega({ isOpen, category }) {
  if (!isOpen) return null;

  // Filter data based on category if provided, otherwise show all
  const displayData = category 
    ? megaMenuData.filter(item => item.id === category)
    : megaMenuData;

  // If category is specified but not found, show all
  const finalData = displayData.length > 0 ? displayData : megaMenuData;

  return (
    <div className="absolute left-0 top-full mt-4 w-[800px] bg-white border p-6 rounded-xl shadow-xl z-50">
      <div className="grid grid-cols-3 gap-6">
        {finalData.map((categoryItem) => (
          <div key={categoryItem.id}>
            <h3 className="font-bold mb-3" style={{ color: "#C9A14A" }}>
              {categoryItem.name}
            </h3>
            <ul className="space-y-2">
              {categoryItem.services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.link} 
                    className="block py-1 hover:text-gold transition-colors"
                    style={{ color: "#2A2A2A" }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

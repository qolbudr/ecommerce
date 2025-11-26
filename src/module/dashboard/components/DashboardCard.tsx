import React from "react";

interface DashboardCardProps {
    title: string;
    value: number | string;
    unit?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, unit }) => {
    return (
        <div className="w-full max-w-sm rounded-2xl bg-[#ADC9FF] p-6 relative overflow-hidden">
            <div className="absolute bottom-0 right-0">
                <div className="w-20 h-20 rounded-full bg-white opacity-30 -mb-10 -mr-10"></div>
                <div className="w-20 h-20 rounded-full bg-white opacity-30 -mb-6 -mr-6"></div>
            </div>
            <div className="relative z-10">
                <h3 className="text-m">{title}</h3>
                <div className="flex items-end gap-1">
                    <span className="text-2xl font-semibold text-[#0A215A]">{value}</span>
                    {unit && <span className="text-l text-[#0A215A]">{unit}</span>}
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;

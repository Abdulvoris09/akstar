import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const tabData = [
        {
            title: 'Dokon ):',
            content: '1',
        },
        {
            title: 'Tab 2',
            content: '2',
        },
        {
            title: 'Tab 3',
            content: '2',
        },
    ];

    return (
        <div>
            <div className="flex space-x-4">
                {tabData.map((tab, index) => (
                    <div key={index} className={`cursor-pointer ${activeTab === index ? 'text-black' : 'text-zinc-400'}`}
                        onClick={() => handleTabClick(index)}> {tab.title}
                    </div>
                ))}
            </div>
            <div className="p-4 border mt-4">{tabData[activeTab].content}</div>
        </div>
    );
};

export default Tabs;

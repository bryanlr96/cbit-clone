

export default function GetStarted() {
    return (
        <div className="flex items-center justify-between gap-6 px-2 py-6">
            <div className="flex flex-col">
                <h2 className="text-[26px] font-primary font-medium">Get Started</h2>
                <p className="text-[#414042] text-sm">Choose a pre configured blueprint that matches your use case.</p>
            </div>
            <button className="flex gap-2 items-center text-[#5183f0]">
                See all blueprints
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white w-8 h-8 bg-[#5183f0] rounded-full">
                    <path d="M5.83301 14.1663L14.1663 5.83301" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.83301 5.83301H14.1663V14.1663" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    )
}

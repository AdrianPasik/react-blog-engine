export default function LinkCard({ name, experience, svgPath }: { name: string, experience: string, svgPath: string }) {
    return (
        <>
            <div className='opacity-50 flex flex-1 gap-5 p-2.5 rounded-xl border border-[#FAFAFA] dark:border-dark-200 bg-[#FAFAFA] dark:bg-dark-200 hover:bg-[#F2F2F2] dark:hover:bg-dark-300 hover:border-[#E0E0E0] dark:hover:border-dark-700 transition-colors duration-200' style={{cursor: "pointer", pointerEvents: "none"}}>
                <div className='p-3 bg-transparent rounded-lg w-fit'>
                    <img alt="React" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className="size-8 " style={{ color: 'transparent' }} src={svgPath} />
                </div>
                <div>
                    <h4 className="text-lg font-medium font-sans text-gray-700">{name}</h4>
                    <p className="text-dark-200/70 text-sm">{experience}
                    </p>
                </div>
            </div>
        </>
    )
}
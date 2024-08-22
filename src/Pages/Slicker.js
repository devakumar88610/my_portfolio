import ImageSlick from "../Components/ImageSlick"

const Slicker = () => {
    return (
        <div className='bg-white/50 dark:bg-primarydark py-5 rounded-2xl border border-white backdrop-blur-md '>
            {/* Skills Icon list */}
            <div className="container">
                <div className='relative '>

                    <ImageSlick />

                </div>
            </div>
        </div>
    )
}

export default Slicker
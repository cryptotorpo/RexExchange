export default function Mainpage() {
  return (
    <div className="relative overflow-hidden bg-[#1C1924] py-24 sm:py-32 text-white">
        <img src="../../img/rexellipse1.png" className='absolute top-0 left-0 md:left-32'></img>
        <div className="mx-auto w-full px-6 lg:px-40">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 xl:mx-0 xl:max-w-none xl:grid-cols-2">
                <div className="xl:pr-8 lg:pt-4 flex justify-center">
                    <div className="max-w-2xl">
                        <div className="tracking-wider mt-2 text-2xl font-semibold sm:text-3xl flex flex-row gap-3">
                            Buy and Sell
                            <p className='text-[#794CA9]'>Crypto</p>
                        </div>
                        <p className="mt-2 text-2xl tracking-wide font-semibold sm:text-3xl">Place Limit and Market Orders</p>
                        <p className="mt-2 text-2xl tracking-wide font-semibold sm:text-3xl">Use Margin</p>
                        <p className="mt-2 text-2xl tracking-wide font-semibold sm:text-3xl">No Trading Fees*</p>
                        <p className="mt-6 text-lg leading-8">
                            All spot trades incur no trading fees. Only takers pay gas fees.
                        </p>
                        <div className='flex flex-col sm:flex-row mt-10'>
                            {/* <div className='flex flex-row gap-5 border-white sm:border-r px-5 justify-center'>
                                <div className='font-medium text-3xl'>2K+</div>
                                <div className='text-[#7C778A] text-base flex justify-center items-center'>ACTIVE USERS</div>
                            </div>
                            <div className='flex flex-row gap-5 px-5 sm:px-7 justify-center'>
                                <div className='font-medium text-3xl'>20+</div>
                                <div className='text-[#7C778A] text-base flex justify-center items-center'>WALLET TYPES</div>
                            </div> */}
                            <button className='rounded-xl bg-[#EF587C] px-16 py-4 text-sm'>Trade Now</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <img
                        src="../../img/rexexchange01.png"
                        alt="Product screenshot"
                        className="w-full max-w-none rounded-xl sm:w-[40rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

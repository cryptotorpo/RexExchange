const tokens = [
    {
      name: 'Token Name',
      content: 'REX',
      ringColor:
        'border-[#EFAA58]',
    },
    {
        name: 'Token Soft cap',
        content: '$18.000.000',
        ringColor:
          'border-[#BFEF58]',
    },
    {
        name: 'ICO Pre-sale starts in',
        content: 'Dec 15-30, 2023',
        ringColor:
          'border-[#58DDEF]',
    },
    {
        name: 'Total Supply',
        content: '250.000.000 Token',
        ringColor:
            'border-[#EF58CE]',
    },
    {
        name: 'Pre ICO price',
        content: '1 ETH = 2,682 Token',
        ringColor:
            'border-[#5882EF]',
    },
    {
        name: 'Price in ICO',
        content: '1 ETH = 2,182 Token',
        ringColor:
            'border-[#EF587C]',
    },
    {
        name: 'Sold Tokens',
        content: '49,828,000 Token',
        ringColor:
            'border-[#58EFB0]',
    },
    {
        name: 'Remaining Tokens',
        content: '200,182,000 Token',
        ringColor:
            'border-[#58EF67]',
    },
]
  

export default function TokenInfo() {
    return (
      <div id="tokenomics" className="bg-[#1C1924] py-24 sm:py-28 text-white relative">
        <img src="../../img/rexellipse1.png" className='absolute top-0 right-0 md:right-32'></img>
        <div className="text-center mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-[#9A6FC7] text-base font-medium">About Our Token</div>
            <div className="text-3xl font-medium">Our Token Info</div>
            <div className="w-full flex justify-center">
                <div className="max-w-xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</div>
            </div>

            <div className="mt-10 mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className='w-full justify-center items-center flex'>
                    <img
                        src="../../img/rexexchange4.png"
                        alt="Product screenshot"
                        className="w-full max-w-none rounded-xl md:w-[28rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>

                <div className="lg:pl-8 lg:pt-4 text-left flex justify-center">
                    <div className="text-white max-w-2xl grid grid-cols-2 gap-x-16 gap-y-10 lg:gap-y-0">
                        {tokens.map((token) => (
                            <div>
                                <div className="sm:text-xl flex text-lg flex-row gap-3">
                                    <div className={`border-4 rounded-full p-2 sm:p-3 w-3 h-3 bg-transparent ${token.ringColor}`}></div>
                                    {token.name}
                                </div>
                                <div className="text-[#BCB2B2] mt-2 sm:text-base text-sm text-center">{token.content}</div>
                            </div>
                        ))}                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

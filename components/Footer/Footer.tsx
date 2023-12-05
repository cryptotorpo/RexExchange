import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';

export default function Footer() {
    return (
      <div className="border-t border-[#3D3551] overflow-hidden bg-[#1C1924] text-white py-12 sm:py-16">
        <div className="mx-auto px-6 lg:px-40">
          <div className='text-white text-center mb-7 gap-3 justify-center items-center flex flex-row'>
            Supported by <img src="https://assets-global.website-files.com/637359c81e22b715cec245ad/63dc31f8817a4a509d7635a7_Logo.svg"></img>
          </div>
            <div className='flex flex-row gap-5 justify-center'>
                <div className='p-2 rounded-full bg-[#9A6FC7]'><FaDiscord className='w-8 h-8'/></div>
                <div className='p-2 rounded-full bg-[#9A6FC7]'><FaTelegramPlane className='w-8 h-8'/></div>
                <div className='p-2 rounded-full bg-[#9A6FC7]'><FaTwitter className='w-8 h-8'/></div>
                <div className='p-2 rounded-full bg-[#9A6FC7]'><HiOutlineClipboardDocumentList className='w-8 h-8'/></div>
            </div>
            <div className='mt-10 text-center text-sm'>Copyright © 2023 We Have and You HaveAll rights reserved</div>           
        </div>
      </div>
    )
  }

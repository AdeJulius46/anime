import React from 'react'
import { Button } from "../../components/ui/button";
const Header = () => {
  return (
    <div>
          <header className="absolute fixed top-0 left-0 w-full h-[58px] z-[12] overflow-hidden">
          <div className=" w-full  h-[350px] backdrop-blur-[21px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(21px)_brightness(100%)] bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]" />

          <Button
            // variant="ghost"
            className="absolute top-[calc(50.00%_-_12px)] left-[1390px] w-[42px] h-auto p-0"
            aria-label="Menu"
          >
            <div className="w-[42px] h-2 flex flex-col gap-[7px]">
              <img
                className="w-[42px] -mt-px h-px object-cover"
                alt="Line"
                src="/line-8.svg"
              />
              <img
                className="ml-[7.9px] w-[34.05px] h-px object-cover"
                alt="Line"
                src="/line-9.svg"
              />
            </div>
          </Button>
        </header>
    </div>
  )
}

export default Header
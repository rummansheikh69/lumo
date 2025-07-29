import { FaXTwitter } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import { MdOutlineDone } from "react-icons/md";

function App() {
  const address = "25Y9nsE4TM66yuuwfqNjCaEKYGt1iLpeQm49HV5kbonk";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className=" text-white overflow-hidden">
      {/* hero */}
      <div className=" w-full h-screen bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753796991/image_7_1_ryt7gs.jpg')] text-white">
        {/* navbar  */}
        <div className=" w-full px-5 md:px-32">
          <div className=" w-full py-4 flex items-center justify-between">
            <h1 className=" text-2xl next font-semibold">LUMO</h1>
            <div className=" hidden md:flex items-center gap-5 px-10 py-2.5 border border-white rounded-full">
              <a href="/" className=" text-white text-sm">
                Home
              </a>
              <a href="#about" className=" text-white text-sm">
                About
              </a>
              <a href="#howtobuy" className=" text-white text-sm">
                How To Buy
              </a>
              <a href="#tokenomics" className=" text-white text-sm">
                Tokenomics
              </a>
            </div>
            <div className=" flex items-center gap-4">
              <a
                href="https://x.com/lumo_solana"
                className=" p-2 border border-white rounded-full bg-thunder"
              >
                <FaXTwitter className=" text-black" />
              </a>
              <a
                href="https://letsbonk.fun/token/FBRdo29auC835yx8NgRTN7CpQRPW1A9aWGbb4Bgtbonk"
                className=" px-5 py-2 border border-white rounded-full bg-thunder"
              >
                <p className=" text-black text-base next font-semibold leading-none">
                  BUY
                </p>
              </a>
            </div>
          </div>
        </div>
        {/* navbar ends */}
        {/* hero  */}
        <div className="mt-20  px-5 md:px-32 ">
          <div className="">
            <p className=" text-thunder text-9xl hero">
              READY TO <br /> FLEX?
            </p>
          </div>
          <div className=" flex items-center gap-5 mt-10">
            <div className=" px-5 py-2 rounded-full border-2 border-white shadow-[2px_3px_0px_0px_#ffffff] bg-yellow-400">
              <a
                href="https://letsbonk.fun/token/FBRdo29auC835yx8NgRTN7CpQRPW1A9aWGbb4Bgtbonk"
                target="_blank"
              >
                <p className=" text-zinc-800 text-sm whitespace-nowrap md:text-base next font-semibold leading-none">
                  BUY $LUMO
                </p>
              </a>
            </div>
            <div className=" px-5 py-2 rounded-full border-2 border-white shadow-[2px_3px_0px_0px_#ffffff] bg-main">
              <a href="https://x.com/i/communities/1950056164789457293">
                <p className=" text-sm whitespace-nowrap text-zinc-200 md:text-base next font-semibold leading-none">
                  JOIN COMMUNITY
                </p>
              </a>
            </div>
          </div>
        </div>
        {/* hero ends */}
      </div>
      {/* hero end */}

      <div className=" w-full py-4 border-y-2 border-zinc-200 px-5 md:px-10 bg-main">
        <div className=" flex items-center gap-14">
          <p className=" text-2xl font-medium ex text-white">$LUMO</p>
          <p className=" text-2xl font-medium ex text-white">$LUMO</p>
          <p className=" text-2xl font-medium ex text-white">$LUMO</p>
          <p className=" text-2xl font-medium ex text-white">$LUMO</p>
          <p className=" text-2xl font-medium ex text-white">$LUMO</p>
          <p className=" text-2xl font-medium ex text-white">$LUMO</p>
          <p className=" text-2xl font-medium ex text-white">$LUMO</p>
          <p className=" text-2xl font-medium ex text-white">$LUMO</p>
          <p className=" text-2xl font-medium ex text-white">$LUMO</p>
          <p className=" text-2xl font-medium ex text-white">$LUMO</p>
        </div>
        <div className=" flex items-center justify-center">
          <div className=" border-b-2 border-zinc-200 my-5 w-1/2"></div>
        </div>

        <div className=" flex items-center justify-center">
          <div className=" w-96 px-5 py-2 rounded-full border-2 border-white shadow-[2px_3px_0px_0px_#ffffff] bg-main flex items-center gap-3 justify-between">
            <p className=" ex truncate select-all">{address}</p>
            <button
              onClick={handleCopy}
              className="text-thunder hover:text-thunder/60 transition"
            >
              {copied ? (
                <MdOutlineDone size={20} className=" text-green-500" />
              ) : (
                <FiCopy size={20} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="about"
        className=" w-full h-screen bg-[url('https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753802202/image_2_1_g9sm3x.jpg')] bg-center bg-cover bg-no-repeat"
      >
        <div className=" w-full h-full flex items-center justify-center">
          <div className=" p-5 md:w-1/3 w-full rounded-xl backdrop-blur-sm bg-white/20 border border-zinc-300">
            <p className=" text-center leading-7 text-xl text-thunder next">
              When night falls, LUMO awakens. He doesn't wait for silence — he
              runs toward the storm. Raindrops blur the jungle leaves as he
              leaps over rivers, opens glowing portals with his hands, and reads
              forgotten books beneath his lantern’s soft hum. The world sleeps.
              LUMO explores. Not a meme, not a myth — but a beacon of wonder
              cast into the dark. LUMO is the frog who turned the night into his
              playground. And now, he’s lighting up Solana.
            </p>
          </div>
        </div>
      </div>

      {/* how to buy  */}
      <div className=" px-5 md:px-32 w-full min-h-screen bg-main py-20">
        <h1 className=" text-center text-5xl md:text-7xl next font-extrabold">
          HOW TO BUY
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-2 mt-14 gap-5 md:gap-10">
          <div className=" w-full md:w-72 rounded-3xl border-thunder p-3 border-2 h-80">
            <div className=" h-1/3 w-full flex items-center justify-center">
              <h1 className=" text-center hero text-2xl ">
                1. Download Phantom wallet
              </h1>
            </div>
            <div className=" h-2/3 flex items-center justify-center px-2 md:px-4 w-full bg-thunder rounded-2xl">
              <p className=" text-center text-black">
                Download Phantom Wallet or any Solana wallet.
              </p>
            </div>
          </div>
          <div className=" w-full">
            <div className=" md:float-end  w-full md:w-72 rounded-3xl border-thunder p-3 border-2 h-80">
              <div className=" h-1/3 w-full flex items-center justify-center">
                <h1 className=" text-center hero text-2xl">2. Get SOL</h1>
              </div>
              <div className=" h-2/3 flex items-center justify-center px-2 md:px-4 w-full bg-thunder rounded-2xl">
                <p className=" text-center text-black">
                  If you don't have SOL yet, you can purchase from any CEX, and
                  send it to your SOL wallet.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full mt-10">
            <div className="  md:float-end  w-full md:w-72 rounded-3xl border-thunder p-3 border-2 h-80">
              <div className=" h-1/3 w-full flex items-center justify-center">
                <h1 className=" text-center hero text-2xl">3. Go To Bonk</h1>
              </div>
              <div className=" h-2/3 flex items-center justify-center px-2 md:px-4 w-full bg-thunder rounded-2xl">
                <p className=" text-center text-black">
                  After you get your SOL in your wallet, you can head to
                  Bonk.fun.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full mt-10">
            <div className="  md:float-start  w-full md:w-72 rounded-3xl border-thunder p-3 border-2 h-80">
              <div className=" h-1/3 w-full flex items-center justify-center">
                <h1 className=" text-center hero text-2xl ">4. Swap $LUMO</h1>
              </div>
              <div className=" h-2/3 flex items-center justify-center px-2 md:px-4 w-full bg-thunder rounded-2xl">
                <p className=" text-center text-black">
                  Click and select $LUMO token or paste the Token Contract
                  Address into Bonk and swap SOL for $LUMO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* how to buy end */}

      {/* tokenomics  */}
      <div className=" relative py-20 px-5 md:px-32 w-full h-screen bg-center bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753801694/image_8_1_1_nfyade.jpg')]">
        <h1 className=" text-center text-5xl md:text-7xl next font-extrabold">
          Tokenomics
        </h1>

        <div className=" absolute top-40 left-1/2 transform -translate-x-1/2 bg-thunder rounded-full px-8 py-3 text-black ">
          <div>
            <h1 className=" ex text-2xl">Total Supply</h1>
            <h1>1,000,000,000</h1>
          </div>
        </div>
        <div className=" absolute right-40 top-1/2 transform -translate-y-1/2 bg-thunder rounded-full px-8 py-3 text-black ">
          <div>
            <h1 className=" ex text-2xl">Tax</h1>
            <h1>0%</h1>
          </div>
        </div>
        <div className=" absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-thunder rounded-full px-8 py-3 text-black ">
          <div>
            <h1 className=" ex text-2xl">LP</h1>
            <h1>Burnt</h1>
          </div>
        </div>
        <div className=" absolute left-10 md:left-20 top-2/3 md:top-1/2 transform -translate-y-1/2 bg-thunder rounded-full px-8 py-3 text-black ">
          <div>
            <h1 className=" ex text-2xl">Foundation</h1>
            <h1>10%</h1>
          </div>
        </div>
      </div>
      {/* tokenomics end */}
      {/* memes  */}
      <div className=" py-10 px-5 md:px-32 min-h-screen bg-main grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        <div className=" w-full h-72 rounded-3xl overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753774268/froggif1_nvjb9h.gif"
            alt=""
          />
        </div>

        <div className=" w-full h-72 rounded-3xl overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753774246/image_5_vsete9.webp"
            alt=""
          />
        </div>
        <div className=" w-full h-72 rounded-3xl overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753774265/froggif2_pvtsfr.gif"
            alt=""
          />
        </div>
        <div className=" w-full h-72 rounded-3xl overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753774247/image_1_e55khw.webp"
            alt=""
          />
        </div>
        <div className=" w-full h-72 rounded-3xl overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753774247/image_4_vdsu9b.webp"
            alt=""
          />
        </div>
        <div className=" w-full h-72 rounded-3xl overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753774248/image_3_vtxqfw.webp"
            alt=""
          />
        </div>
        <div className=" w-full h-72 rounded-3xl overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753774249/image_6_qpnros.webp"
            alt=""
          />
        </div>

        <div className=" w-full h-72 rounded-3xl overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753774251/image_yrzbhi.webp"
            alt=""
          />
        </div>
      </div>
      {/* memes end */}
      <div className=" py-10 bg-main flex flex-col items-center">
        <p className=" text-center next text-2xl mb-3">
          {" "}
          © {new Date().getFullYear()} LUMO
        </p>
        <div className=" flex items-center gap-3">
          <a
            href="https://x.com/lumo_solana"
            target="_blank"
            className=" text-zinc-300 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://x.com/i/communities/1950056164789457293"
            target="_blank"
            className=" text-zinc-300 hover:underline"
          >
            Community
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

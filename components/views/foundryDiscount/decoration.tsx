import LeafBottom1Png from 'images/foundry/discount/leaf-bottom-1.png';
import LeafBottom2Png from 'images/foundry/discount/leaf-bottom-2.png';
import LeafLeftPng from 'images/foundry/discount/leaf-left.png';
import LeafRightPng from 'images/foundry/discount/leaf-right.png';
import TournesolLeftPng from 'images/foundry/discount/tournesol-left.png';
import TournesolRightPng from 'images/foundry/discount/tournesol-right.png';
import Image from 'next/image';

export default function FoundryDiscountDecoration() {
  return (
    <>
      <Image
        src={LeafBottom1Png}
        alt="chat"
        className="absolute bottom-0 left-[20%] w-[119px] origin-bottom animate-[animation-leaf_15s_ease-in-out_infinite]"
      />
      <Image
        src={LeafBottom2Png}
        alt="chat"
        className="absolute bottom-0 right-[20%] w-[87px] origin-bottom-left animate-[animation-leaf_12s_ease-in-out_infinite]"
      />
      <Image
        src={LeafLeftPng}
        alt="chat"
        className="absolute left-0 top-[5%] w-[110px] origin-bottom-left animate-[animation-leaf_20s_ease-in-out_infinite] laptop:top-[10%] laptop:block laptop:w-[206px]"
      />
      <Image
        src={LeafRightPng}
        alt="chat"
        className="absolute right-0 top-[5%] w-[90px] origin-right animate-[animation-leaf_18s_ease-in-out_infinite] laptop:top-[10%] laptop:block laptop:w-[182px]"
      />
      <Image
        src={TournesolLeftPng}
        alt="chat"
        className="absolute bottom-[20%] left-0 hidden w-[192px] origin-bottom-left animate-[animation-leaf_23s_ease-in-out_infinite] laptop:block"
      />
      <Image
        src={TournesolRightPng}
        alt="chat"
        className="absolute bottom-[25%] right-0 hidden w-[202px] origin-bottom-right animate-[animation-leaf_25s_ease-in-out_infinite] laptop:block"
      />
    </>
  );
}

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
        className="absolute bottom-0 left-[20%] w-[119px]"
      />
      <Image
        src={LeafBottom2Png}
        alt="chat"
        className="absolute bottom-0 right-[20%] w-[87px]"
      />
      <Image
        src={LeafLeftPng}
        alt="chat"
        className="absolute left-0 top-[10%] hidden w-[206px] laptop:block"
      />
      <Image
        src={LeafRightPng}
        alt="chat"
        className="absolute right-0 top-[10%] hidden w-[182px] laptop:block"
      />
      <Image
        src={TournesolLeftPng}
        alt="chat"
        className="absolute bottom-[20%] left-0 hidden w-[192px] laptop:block"
      />
      <Image
        src={TournesolRightPng}
        alt="chat"
        className="absolute bottom-[25%] right-0 hidden w-[202px] laptop:block"
      />
    </>
  );
}

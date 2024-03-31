import UIIconsCross from 'components/ui/icons/cross';
import { closeModal } from 'flux/modal/reducer';
import { useAppDispatch } from 'flux/store';
import RightArrowSvg from 'icons/right-arrow.svg';
import { ModalEnum } from 'types/modal';

export default function FoundryDiscountRulesView() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative h-full w-screen max-w-[820px] bg-[#CBCBCB] text-[16px] font-light text-[#383838] laptop:text-[15px]">
      <div
        className="targeting-action absolute right-[16px] top-[24px] -m-[10px] p-[10px]"
        onClick={() => {
          dispatch(closeModal(ModalEnum.FoundryDiscountRules));
        }}
      >
        <UIIconsCross className="rotate-45" classNameLines="bg-[#383838]" />
      </div>

      <div className="flex h-dvh flex-col px-[16px] py-[18px] laptop:px-[30px] laptop:py-[30px]">
        <div className="flex h-[36px] w-full laptop:h-[90px]">
          <h2 className="self-baseline font-romie text-[19px] laptop:text-[54px]">
            Rul<span className="ss01">e</span>s of th
            <span className="ss01">e</span> <span className="ss01">G</span>am
            <span className="ss01">e</span>
          </h2>
        </div>

        <div className="flex max-w-[700px] flex-1 flex-col overflow-y-scroll pt-[20px]">
          <div className="flex items-center uppercase">
            <RightArrowSvg className="w-[15px]" />
            <p className="ml-[6px] text-[16px]">Objective of the Game</p>
          </div>
          <p className="mt-[25px] text-[12px] laptop:text-[15px] laptop:leading-[18px]">
            Once the reels stop, the illustrations will be displayed. If you
            land three identical illustrations aligned on the payline, you win
            the promo code corresponding to that illustration.
            <br />
            <br />
            In case of a win, the promotional code will appears on the screen.
            You can then use it in the foundry, in your cart.
          </p>

          <div className="mt-[25px] flex items-center uppercase">
            <RightArrowSvg className="w-[15px]" />
            <p className="ml-[6px] text-[16px]">How the Game Works</p>
          </div>
          <p className="mt-[25px] text-[12px] leading-[14px] laptop:text-[15px] laptop:leading-[18px]">
            The game is entirely free. Players can press the spin button to
            start the reels without having to wager any money.
            <br />
            <br />
            The slot machine's reels contain custom illustrations realized by
            the talented Erika Garcia*. Each associated with a different prize.
            To win, the player must land three identical illustrations aligned
            on the payline.
            <br />
            <br />
            Each illustration has a specific prize, which comes in the form of a
            unique promo code. Winnings can vary depending on the rarity of the
            illustration. The rarer the illustration, the more advantageous the
            font promo code.
          </p>

          <div className="mt-[25px] flex items-center uppercase">
            <RightArrowSvg className="w-[15px]" />
            <p className="ml-[6px] text-[16px]">Gameplay Process</p>
          </div>
          <p className="mt-[25px] text-[12px] laptop:text-[15px] laptop:leading-[18px]">
            To play, click on the spin button. The reels will spin randomly.
            <br />
            <br />
            Once the reels stop, the illustrations will be displayed. If you
            land three identical illustrations aligned on the payline, you win
            the promo code corresponding to that illustration.
            <br />
            <br />
            In case of a win, the player must enter his or her email address in
            the corresponding field, and will receive the promotional code in
            his or her mailbox. They can then use it in the foundry.
          </p>

          <p className="mt-[35px] max-w-[500px] text-[10px]">
            *Special thanks to{' '}
            <a
              href="https://www.instagram.com/erikagrc/"
              target="_blank"
              className="underline"
            >
              Erika Garcia
            </a>
            , the incredibly talented artist behind these illustrations, who
            brought my idea to life in an extraordinary way.
          </p>
        </div>
      </div>
    </div>
  );
}

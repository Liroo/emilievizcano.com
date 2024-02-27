import FoundryFaqQuestion from './question';

const FAQ = [
  {
    question: 'Who should buy the licenses, the client or the designer?',
    answer:
      'A license is required for anyone using the fonts. If only the designer has access to the fonts, then only the designer needs to obtain a license. However, if the client also needs to use the fonts, both the designer and the client must possess a license. When the designer is creating materials for a client, only the client needs to acquire the necessary licenses.',
  },
  {
    question: 'How many licenses do I need to purchase?',
    answer:
      'A license is required for anyone using the fonts.Our licensing is simple, we offer 3 types of licenses: Print, Web/Socials/Apps and Full branding. The pricing is based on the company size, it means the TOTAL number of people who work in your organization – not how many users will use our fonts in your company.',
  },
  {
    question: 'When should I buy a Print License?',
    answer:
      'The Print license (formerly Desktop license) is needed for any non-embedded material (except for a logo, see below) like printed art work, posters, apparel, album cover, etc... This license allows you to make unlimited copies of that specific project. The license coverage should reflect the total amount of workstations that will have the font installed.',
  },
  {
    question: 'When should I buy a Web License?',
    answer:
      'The Web license is needed for any website, microsite,subdomain, social media or apps, where the font is embedded. You will need the license to reflect the anticipated total monthly pageviews of all domains, microsites and/or subdomains for this specific client or campaign.',
  },
  {
    question: 'When should I buy a Full Brand License?',
    answer:
      'The Full Brand license is needed for anyone wanted the both Print/Desktop and Web/Socials/Apps purposes (see above). You will need the license to reflect the anticipated total monthly pageviews of all domains, microsites and/or subdomains for this specific client or campaign. The license coverage should reflect the total amount of workstations that will have the font installed.',
  },
  {
    question: 'How can we share fonts with outside contractors?',
    answer:
      'You can’t. Freelancers, design studios, advertising agencies and other suppliers are all independent entities and therefore all require a license to use the font files.',
  },
  {
    question: 'Do you offer a custom typeface design service?',
    answer:
      'Yes I do. If you want us to work with me on a custom typeface for yourself, your company or your client, please contact us with an overview of your project along with an idea of your timetable and your budget. Keep in mind that type design is a very long process so it is better to plan ahead, and think the budget in consequences.',
  },
  {
    question: 'Can I make modifications to the font once I buy a license?',
    answer:
      'No, you can’t customize the font file itself or use the contours you’ve created to generate a new version of the font file, or the font itself. Very minor modifications are tolerated, but in general, if you plan on modifying the font I do advise you to send me an email with what you plan to do and I will be able to help you.',
  },
  {
    question: 'What are trial licenses?',
    answer:
      'Trial licenses can be downloaded on the typeface’s page which enables customers to test the font for the purpose of creating test documents, visuals, and web pages, as well as presenting them to clients or other interested parties. Our font files are not containing all the glyphs. If the user wants to use the font for himself or a client, he has to buy the corresponding licensing.',
  },
];

export default function FoundryFaqView() {
  return (
    <div className="mx-auto mt-[20px] flex w-full flex-col justify-center px-[16px] pb-[44px] text-[14px] leading-[18px] laptop:pb-[72px] laptop:text-[15px] laptop:leading-[20px]">
      <div className="flex w-full flex-1 flex-col items-center justify-center pt-[60px] text-center text-black">
        <p className="font-romie text-[40px] leading-[45px] text-[#383838] laptop:text-[55px] laptop:leading-[55px]">
          Frequently Asked Questions
        </p>
        <div className="mt-auto w-full max-w-[700px] select-none pt-[40px] laptop:pt-[80px]">
          {FAQ.map((faq, index) => (
            <FoundryFaqQuestion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

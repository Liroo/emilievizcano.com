import ChatPng from 'images/foundry/discount/chat.png';
import DragonPng from 'images/foundry/discount/dragon.png';
import GameboyPng from 'images/foundry/discount/gameboy.png';
import PhoPng from 'images/foundry/discount/pho.png';
import Sinnoh1Png from 'images/foundry/discount/sinnoh-1.png';
import Sinnoh2Png from 'images/foundry/discount/sinnoh-2.png';
import VasePng from 'images/foundry/discount/vase.png';

export enum DiscountSymbols {
  Chat = 'chat',
  Dragon = 'dragon',
  Gameboy = 'gameboy',
  Pho = 'pho',
  Sinnoh1 = 'sinnoh1',
  Sinnoh2 = 'sinnoh2',
  Vase = 'vase',
}

export const CONSTANT_DISCOUNT_SETTINGS = {
  symbols: {
    [DiscountSymbols.Chat]: ChatPng,
    [DiscountSymbols.Dragon]: DragonPng,
    [DiscountSymbols.Gameboy]: GameboyPng,
    [DiscountSymbols.Pho]: PhoPng,
    [DiscountSymbols.Sinnoh1]: Sinnoh1Png,
    [DiscountSymbols.Sinnoh2]: Sinnoh2Png,
    [DiscountSymbols.Vase]: VasePng,
  },
};

export const CONSTANT_FORMAT_LICENSES = {
  Print: {
    xs: 'XS Independent & Freelance',
    s: 'S license (1-5 employees)',
    m: 'M license (6-9 employees)',
    l: 'L license (10-20 employees)',
    xl: 'XL license (> 20 employees)',
  },
  Web: {
    xs: 'Up to 10k Pageviews/months',
    s: 'Up to 25k Pageviews/months',
    m: 'Up to 50k Pageviews/months',
    l: 'Up to 100k Pageviews/months',
    xl: 'Up to 250k Pageviews/months',
  },
  // App: {
  //   xs: 'Up to 10k Active users/months',
  //   s: 'Up to 25k Active users/months',
  //   m: 'Up to 50k Active users/months',
  //   l: 'Up to 100k Active users/months',
  //   xl: 'Up to 250k Active users/months',
  // },
  // 'Social Media': {
  //   xs: 'Up to 10k Followers/months',
  //   s: 'Up to 25k Followers/months',
  //   m: 'Up to 50k Followers/months',
  //   l: 'Up to 100k Followers/months',
  //   xl: 'Up to 250k Followers/months',
  // },
  Branding: {
    xs: 'XS Independent & Freelance',
    s: 'S license (1-5 employees)',
    m: 'M license (6-9 employees)',
    l: 'L license (10-20 employees)',
    xl: 'XL license (> 20 employees)',
  },
};

export const CONSTANT_FAQ = [
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

export const CONSTANT_SERVICES = [
  'Art direction',
  'Branding 360°',
  'Custom typefaces',
  'Custom logotypes',
  'UX/UI',
  'Websites',
  'Creative coding',
  'Book design',
  'Consulting',
];

export const CONSTANT_SOFTWARES = [
  'Figma',
  'Adobe Suite',
  'Jira',
  'Asana',
  'Notion',
  'Slack',
  'Glyphs',
  'Fontlab',
];

export const CONSTANT_KOROSU_GLYPHS = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'()*+,-./:;<=>?@[\]^_{|}~¡¢£¥¦§©«¬®°±¶·»¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĊċČčĎďĐđĒēĖėĘęĚěĞğĠġĢģĦħĨĩĪīĮįİıĶķĹĺĻļĽľŁłŃńŅņŇňŊŋŌōŐőŒœŔŕŖŗŘřŚśŞşŠšŢţŤťŦŧŨũŪūŮůŰűŲųŴŵŶŷŸŹźŻżŽžǸǹȘșȚțȦȧȮȯ̧̨̦̀́̂̃̄̆̇̈̊̋̌ẀẁẂẃẄẅẞẼẽỲỳ –—‘’‚“”„†‡•…‰‹›⁄€™∂∏∑−√∞∫≈≠≤`;
export const CONSTANT_TANGERINE_GLYPHS = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'()*+,-./:;<=>?@[\]^_{|}~ ¡¢£¤¥¦§©«¬®°±¶·»¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĮįİıĲĳĴĵĶķĹĺĻļĽľŁłŃńŅņŇňŌōŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžƏȘșȚțȷə̧̨̦̀́̂̃̄̆̇̈̊̋̌̒฿ḠḡẀẁẂẃẄẅẞẼẽỲỳỸỹ –—‘’‚“”„†‡•…‰‹›€₴₹₽™∂∏∑−√∞∫≈≠≤≥`;
export const CONSTANT_LAPICIDE_GLYPHS = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'()*+,-./:;<=>?@[\]^_{|}~¡¢£¥§©«®°±¶·»¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖ×ÙÚÛÜÝÞßàáâãäåæçèéêëìíîïñòóôõö÷ùúûüýþÿĂăĊċĞğĠĨĩıŒœŨũŴŵŶŷŸȷ̧̀́̂̃̆̇̈̊ẀẁẂẃẄẅẼẽỲỳ –—‘’‚“”„•…‰‹›⁄€™∂∅∏∑−√≈≠≤≥`;

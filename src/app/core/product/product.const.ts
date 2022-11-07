import { IProduct } from './product.model';
import { EBrand } from './productBrand.enum';
import { ELevel } from './productLevel.enum';
import { EType } from './productType.enum';

export const products: IProduct[] = [
  {
    name: 'Yamaha YTS-26 Tenor',
    brand: EBrand.Yamaha,
    level: ELevel.Beginner,
    type: EType.Tenor,
    imageUrl: '../../../assets/img/Yamaha26.png',
    description:
      'A redesigned neck receiver promotes a quick response and ease of play while also increasing the durability of the mechanism. An improved mechanism from low B-C# ensures the consistent closing of the low C# key and promotes a clear response from notes in the low range of the instrument. All Yamaha saxophones feature an adjustable thumb-rest to allow for precise and comfortable hand and fingering position. The Nickel-plated keys are durable and resistant to wear.',
    price: 1899,
  },
  {
    name: 'Yamaha YBS-480 Intermediate Baritone Sax',
    brand: EBrand.Yamaha,
    level: ELevel.Intermediate,
    type: EType.Baritone,
    imageUrl: '../../../assets/img/YamahaYBS-480.png',
    description:
      'Players around the world know Yamaha baritone saxophones for their outstanding sound. In the YBS-480 Yamaha refreshes the traditional image of these instruments with powerful yet delicate tone and exceptional playability. The bell configuration and key layout have been revised for more comfortable hold and stable pitch that will be an advantage for first-time baritone sax players.',
    price: 8699,
  },
  {
    name: 'Selmer Intermediate Series 32 Alto Sax',
    brand: EBrand.Selmer,
    level: ELevel.Intermediate,
    type: EType.Alto,
    imageUrl: '../../../assets/img/Selmer32AltoSax.png',
    description:
      'Selmer Intermediate Series 32 Alto Sax. The Selmer AS32 Alto Saxophone marks a first ever collaboration between Henri Selmer Paris and Selmer USA on a intemediate saxophone. Featuring a post to body construction, leather pads with metal resonators and hand engraving – the body for the AS32 is ready for the advancing player, but it also comes with a neck designed and manufactured by Selmer Paris for this instrument, as well as a mouthpiece from Selmer Paris specially made for the advancing player. This makes the AS32 the most unique instrument in its class and price range, and the only one that can boast a genuine Henri Selmer Paris neck and mouthpiece. Yellow brass, post to body construction, hand engraved, backpack style case, genuine Selmer Paris neck and mouthpiece, metal resonators, High F# key, adjustment screws.',
    price: 2499,
  },
  {
    name: 'Jupiter Performance Alto Sax',
    brand: EBrand.Jupiter,
    level: ELevel.Professional,
    type: EType.Alto,
    imageUrl: '../../../assets/img/JupiterPerformanceAltoSax.png',
    description:
      'The JAS1100 gold lacquered alto saxophone is a perfect example of the classic hand-crafted design practices that reside alongside state-of-the-art manufacturing processes. The JAS1100 is the perfect step-up alto saxophone for the committed student or practicing professional.',
    price: 3699,
  },
];

import { OfferService } from './offer.service';
import { Offer } from './offer.entity';
export declare class OfferController {
    private readonly offerService;
    constructor(offerService: OfferService);
    createOffer(offer: Offer): Promise<Offer | any>;
    getAllOffers(): Promise<Offer[]>;
    getOffersByTitle(title: string): Promise<Offer[] | any>;
}

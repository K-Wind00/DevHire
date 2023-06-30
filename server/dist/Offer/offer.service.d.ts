import { Offer } from './offer.entity';
import { Repository } from 'typeorm';
export declare class OfferService {
    private offerRepository;
    constructor(offerRepository: Repository<Offer>);
    createOffer(offerData: Offer): Promise<Offer | any>;
    getOffersByTitle(offerTitle: string): Promise<Offer[] | any>;
    getAllOffers(): Promise<Offer[]>;
}

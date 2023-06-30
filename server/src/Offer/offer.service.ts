import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Offer } from './offer.entity'
import { Repository } from 'typeorm'

@Injectable()
export class OfferService {
	constructor(
		@InjectRepository(Offer) private offerRepository: Repository<Offer>
	) {}

	async createOffer(offerData: Offer): Promise<Offer | any> {
		const offer = this.offerRepository.create(offerData)
		return await this.offerRepository.save(offer)
	}

	async getOffersByTitle(offerTitle: string): Promise<Offer[] | any> {
		const offers = await this.offerRepository.find({
			where: { offerTitle: offerTitle },
		})
		return offers
	}

    async getAllOffers() {
        return await this.offerRepository.find()
    }
}

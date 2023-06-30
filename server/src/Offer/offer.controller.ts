import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OfferService } from './offer.service';
import { Offer } from './offer.entity';

@Controller()
export class OfferController {
    constructor(private readonly offerService: OfferService) {}

    @Post('/new')
    async createOffer(@Body() offer: Offer): Promise<Offer | any> {
        return await this.offerService.createOffer(offer);
    }

    @Get('/offers')
    async getAllOffers() {
        return await this.offerService.getAllOffers();
    }

    @Get('/:title')
    async getOffersByTitle(@Param('title') title: string): Promise<Offer[] | any> {
        return await this.offerService.getOffersByTitle(title);
    }
}



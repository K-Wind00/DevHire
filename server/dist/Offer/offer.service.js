"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const offer_entity_1 = require("./offer.entity");
const typeorm_2 = require("typeorm");
let OfferService = exports.OfferService = class OfferService {
    constructor(offerRepository) {
        this.offerRepository = offerRepository;
    }
    async createOffer(offerData) {
        const offer = this.offerRepository.create(offerData);
        return await this.offerRepository.save(offer);
    }
    async getOffersByTitle(offerTitle) {
        const offers = await this.offerRepository.find({
            where: { offerTitle: offerTitle },
        });
        return offers;
    }
    async getAllOffers() {
        return await this.offerRepository.find();
    }
};
exports.OfferService = OfferService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(offer_entity_1.Offer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OfferService);
//# sourceMappingURL=offer.service.js.map
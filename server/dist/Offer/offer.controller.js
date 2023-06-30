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
exports.OfferController = void 0;
const common_1 = require("@nestjs/common");
const offer_service_1 = require("./offer.service");
const offer_entity_1 = require("./offer.entity");
let OfferController = exports.OfferController = class OfferController {
    constructor(offerService) {
        this.offerService = offerService;
    }
    async createOffer(offer) {
        return await this.offerService.createOffer(offer);
    }
    async getAllOffers() {
        return await this.offerService.getAllOffers();
    }
    async getOffersByTitle(title) {
        return await this.offerService.getOffersByTitle(title);
    }
};
__decorate([
    (0, common_1.Post)('/new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [offer_entity_1.Offer]),
    __metadata("design:returntype", Promise)
], OfferController.prototype, "createOffer", null);
__decorate([
    (0, common_1.Get)('/offers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OfferController.prototype, "getAllOffers", null);
__decorate([
    (0, common_1.Get)('/:title'),
    __param(0, (0, common_1.Param)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OfferController.prototype, "getOffersByTitle", null);
exports.OfferController = OfferController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [offer_service_1.OfferService])
], OfferController);
//# sourceMappingURL=offer.controller.js.map
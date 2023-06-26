"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./User/user.entity");
const offer_entity_1 = require("./Offer/offer.entity");
const offer_controller_1 = require("./offer/offer.controller");
const offer_service_1 = require("./offer/offer.service");
const offer_module_1 = require("./offer/offer.module");
const auth_module_1 = require("./auth/auth.module");
const app_controller_1 = require("./app.controller");
const auth_service_1 = require("./auth/auth.service");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'DevHire',
                entities: [user_entity_1.User, offer_entity_1.Offer],
                synchronize: true,
            }),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            (0, common_1.forwardRef)(() => offer_module_1.OfferModule),
        ],
        controllers: [user_controller_1.UserController, offer_controller_1.OfferController, app_controller_1.AppController],
        providers: [user_service_1.UserService, offer_service_1.OfferService, auth_service_1.AuthService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
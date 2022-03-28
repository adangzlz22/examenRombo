"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prospectoController = void 0;
const database_1 = __importDefault(require("../database"));
class ProspectoController {
    prospecto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prospectos = yield database_1.default.query('SELECT * FROM prospecto');
            res.json(prospectos);
        });
    }
    oneProspecto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const prospectos = yield database_1.default.query('SELECT * FROM prospecto WHERE id = ?', [id]);
            res.json(prospectos);
            res.status(404).json({ text: "El prospecto no existe o acaba de ser eliminado" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO prospecto set ?', [req.body]);
            res.json({ message: 'El prospecto fue Agregado. ' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const prospectos = yield database_1.default.query('UPDATE prospecto set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'El prospecto fue Actualizado. ' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const prospectos = yield database_1.default.query('DELETE FROM prospecto WHERE id = ?', [id]);
            res.json({ message: 'El prospecto fue Eliminado. ' });
        });
    }
}
exports.prospectoController = new ProspectoController();

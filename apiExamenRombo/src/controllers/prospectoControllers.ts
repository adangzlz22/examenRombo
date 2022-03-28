import {Request, Response} from 'express';

import db from '../database'

class ProspectoController {
    public async prospecto (req:Request, res:Response) {
        const prospectos = await db.query('SELECT * FROM prospecto');
        res.json(prospectos);
    }

    public async oneProspecto (req:Request, res:Response) : Promise<void> {
        const {id} = req.params;
        const prospectos = await db.query('SELECT * FROM prospecto WHERE id = ?', [id]);
        res.json(prospectos);
        res.status(404).json({text:"El prospecto no existe o acaba de ser eliminado"});
    }

    public async create (req:Request, res:Response) : Promise<void> {
        console.log(req.body)
        await db.query('INSERT INTO prospecto set ?', [req.body]);
        res.json({message:'El prospecto fue Agregado. ' });
    }

    public async update (req:Request, res:Response) : Promise<void> {
        const {id} = req.params;
        const prospectos = await db.query('UPDATE prospecto set ? WHERE id = ?', [req.body,id]);
        res.json({message:'El prospecto fue Actualizado. ' });
    }
  
    public async delete (req:Request, res:Response) : Promise<void> {
        const {id} = req.params;
        const prospectos = await db.query('DELETE FROM prospecto WHERE id = ?', [id]);
        res.json({message:'El prospecto fue Eliminado. ' });
    }

}

export const prospectoController = new ProspectoController(); 
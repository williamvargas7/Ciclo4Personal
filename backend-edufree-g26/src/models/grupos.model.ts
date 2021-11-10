import {Entity, model, property, hasMany} from '@loopback/repository';
import {Usuario} from './usuario.model';
import {UsuarioporGrupo} from './usuariopor-grupo.model';

@model()
export class Grupos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
  })
  codigo?: number;

  @property({
    type: 'number',
    required: true,
  })
  capacidad: number;

  @hasMany(() => Usuario, {through: {model: () => UsuarioporGrupo}})
  usuarios: Usuario[];

  constructor(data?: Partial<Grupos>) {
    super(data);
  }
}

export interface GruposRelations {
  // describe navigational properties here
}

export type GruposWithRelations = Grupos & GruposRelations;

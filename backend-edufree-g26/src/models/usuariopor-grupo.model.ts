import {Entity, model, property} from '@loopback/repository';

@model()
export class UsuarioporGrupo extends Entity {
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
  idGrupo: string;

  @property({
    type: 'string',
    required: true,
  })
  idEstudiante: string;

  @property({
    type: 'number',
    required: true,
  })
  calificacion: number;

  @property({
    type: 'string',
  })
  gruposId?: string;

  @property({
    type: 'string',
  })
  usuarioId?: string;

  constructor(data?: Partial<UsuarioporGrupo>) {
    super(data);
  }
}

export interface UsuarioporGrupoRelations {
  // describe navigational properties here
}

export type UsuarioporGrupoWithRelations = UsuarioporGrupo & UsuarioporGrupoRelations;

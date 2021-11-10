import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {UsuarioporGrupo, UsuarioporGrupoRelations} from '../models';

export class UsuarioporGrupoRepository extends DefaultCrudRepository<
  UsuarioporGrupo,
  typeof UsuarioporGrupo.prototype.id,
  UsuarioporGrupoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(UsuarioporGrupo, dataSource);
  }
}

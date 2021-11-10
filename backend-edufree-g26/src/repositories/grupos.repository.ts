import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Grupos, GruposRelations, Usuario, UsuarioporGrupo} from '../models';
import {UsuarioporGrupoRepository} from './usuariopor-grupo.repository';
import {UsuarioRepository} from './usuario.repository';

export class GruposRepository extends DefaultCrudRepository<
  Grupos,
  typeof Grupos.prototype.id,
  GruposRelations
> {

  public readonly usuarios: HasManyThroughRepositoryFactory<Usuario, typeof Usuario.prototype.id,
          UsuarioporGrupo,
          typeof Grupos.prototype.id
        >;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('UsuarioporGrupoRepository') protected usuarioporGrupoRepositoryGetter: Getter<UsuarioporGrupoRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Grupos, dataSource);
    this.usuarios = this.createHasManyThroughRepositoryFactoryFor('usuarios', usuarioRepositoryGetter, usuarioporGrupoRepositoryGetter,);
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
  }
}

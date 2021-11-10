import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {UsuarioporGrupo} from '../models';
import {UsuarioporGrupoRepository} from '../repositories';

export class UsuarioporGrupoController {
  constructor(
    @repository(UsuarioporGrupoRepository)
    public usuarioporGrupoRepository : UsuarioporGrupoRepository,
  ) {}

  @post('/usuariopor-grupos')
  @response(200, {
    description: 'UsuarioporGrupo model instance',
    content: {'application/json': {schema: getModelSchemaRef(UsuarioporGrupo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioporGrupo, {
            title: 'NewUsuarioporGrupo',
            exclude: ['id'],
          }),
        },
      },
    })
    usuarioporGrupo: Omit<UsuarioporGrupo, 'id'>,
  ): Promise<UsuarioporGrupo> {
    return this.usuarioporGrupoRepository.create(usuarioporGrupo);
  }

  @get('/usuariopor-grupos/count')
  @response(200, {
    description: 'UsuarioporGrupo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UsuarioporGrupo) where?: Where<UsuarioporGrupo>,
  ): Promise<Count> {
    return this.usuarioporGrupoRepository.count(where);
  }

  @get('/usuariopor-grupos')
  @response(200, {
    description: 'Array of UsuarioporGrupo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UsuarioporGrupo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UsuarioporGrupo) filter?: Filter<UsuarioporGrupo>,
  ): Promise<UsuarioporGrupo[]> {
    return this.usuarioporGrupoRepository.find(filter);
  }

  @patch('/usuariopor-grupos')
  @response(200, {
    description: 'UsuarioporGrupo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioporGrupo, {partial: true}),
        },
      },
    })
    usuarioporGrupo: UsuarioporGrupo,
    @param.where(UsuarioporGrupo) where?: Where<UsuarioporGrupo>,
  ): Promise<Count> {
    return this.usuarioporGrupoRepository.updateAll(usuarioporGrupo, where);
  }

  @get('/usuariopor-grupos/{id}')
  @response(200, {
    description: 'UsuarioporGrupo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UsuarioporGrupo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UsuarioporGrupo, {exclude: 'where'}) filter?: FilterExcludingWhere<UsuarioporGrupo>
  ): Promise<UsuarioporGrupo> {
    return this.usuarioporGrupoRepository.findById(id, filter);
  }

  @patch('/usuariopor-grupos/{id}')
  @response(204, {
    description: 'UsuarioporGrupo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioporGrupo, {partial: true}),
        },
      },
    })
    usuarioporGrupo: UsuarioporGrupo,
  ): Promise<void> {
    await this.usuarioporGrupoRepository.updateById(id, usuarioporGrupo);
  }

  @put('/usuariopor-grupos/{id}')
  @response(204, {
    description: 'UsuarioporGrupo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuarioporGrupo: UsuarioporGrupo,
  ): Promise<void> {
    await this.usuarioporGrupoRepository.replaceById(id, usuarioporGrupo);
  }

  @del('/usuariopor-grupos/{id}')
  @response(204, {
    description: 'UsuarioporGrupo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioporGrupoRepository.deleteById(id);
  }
}

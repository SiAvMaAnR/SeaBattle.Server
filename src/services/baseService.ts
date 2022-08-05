import IEntity from "../interfaces/models/IEntity";
import IService from "../interfaces/services/IService"

abstract class BaseService<TEntity extends IEntity> implements IService<TEntity> {
        
}


export default BaseService;
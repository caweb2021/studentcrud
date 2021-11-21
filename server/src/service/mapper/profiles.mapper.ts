import { Profiles } from '../../domain/profiles.entity';
import { ProfilesDTO } from '../dto/profiles.dto';

/**
 * A Profiles mapper object.
 */
export class ProfilesMapper {
    static fromDTOtoEntity(entityDTO: ProfilesDTO): Profiles {
        if (!entityDTO) {
            return;
        }
        let entity = new Profiles();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach((field) => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: Profiles): ProfilesDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new ProfilesDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach((field) => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}

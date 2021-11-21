import { Subjects } from '../../domain/subjects.entity';
import { SubjectsDTO } from '../dto/subjects.dto';

/**
 * A Subjects mapper object.
 */
export class SubjectsMapper {
    static fromDTOtoEntity(entityDTO: SubjectsDTO): Subjects {
        if (!entityDTO) {
            return;
        }
        let entity = new Subjects();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach((field) => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: Subjects): SubjectsDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new SubjectsDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach((field) => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}

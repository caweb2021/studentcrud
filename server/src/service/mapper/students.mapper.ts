import { Students } from '../../domain/students.entity';
import { StudentsDTO } from '../dto/students.dto';

/**
 * A Students mapper object.
 */
export class StudentsMapper {
    static fromDTOtoEntity(entityDTO: StudentsDTO): Students {
        if (!entityDTO) {
            return;
        }
        let entity = new Students();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach((field) => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: Students): StudentsDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new StudentsDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach((field) => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

/**
 * A Students.
 */
@Entity('students')
export class Students extends BaseEntity {
    @Column({ name: 'student_identifier', unique: true })
    studentIdentifier: string;

    @Column({ name: 'student_first_name' })
    studentFirstName: string;

    @Column({ name: 'student_last_name' })
    studentLastName: string;

    @Column({ type: 'date', name: 'date_of_birth', nullable: true })
    dateOfBirth: any;

    @Column({ name: 'school_year', nullable: true })
    schoolYear: string;

    @Column({ name: 'class_name', nullable: true })
    className: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}

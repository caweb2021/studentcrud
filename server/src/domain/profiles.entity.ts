/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

/**
 * A Profiles.
 */
@Entity('profiles')
export class Profiles extends BaseEntity {
    @Column({ name: 'profile_identifier', unique: true })
    profileIdentifier: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}

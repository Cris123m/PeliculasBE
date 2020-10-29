import {MigrationInterface, QueryRunner} from "typeorm";

export class fixDates1603936037866 implements MigrationInterface {
    name = 'fixDates1603936037866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `movies` DROP FOREIGN KEY `FK_cf3f214b7bdb6bc5e641930ee6b`");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `genre_id` `genre_id` int NULL");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `movies` ADD CONSTRAINT `FK_cf3f214b7bdb6bc5e641930ee6b` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `movies` DROP FOREIGN KEY `FK_cf3f214b7bdb6bc5e641930ee6b`");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `updated_at` `updated_at` timestamp(0) NOT NULL DEFAULT ''0000-00-00 00:00:00''");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `created_at` `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `genre_id` `genre_id` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `updated_at` `updated_at` timestamp(0) NOT NULL DEFAULT ''0000-00-00 00:00:00''");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `created_at` `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `movies` ADD CONSTRAINT `FK_cf3f214b7bdb6bc5e641930ee6b` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}

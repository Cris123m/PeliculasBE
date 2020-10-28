import {MigrationInterface, QueryRunner} from "typeorm";

export class genreMigration1603918922872 implements MigrationInterface {
    name = 'genreMigration1603918922872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `genres` (`id` int NOT NULL AUTO_INCREMENT, `nameGenre` varchar(25) NOT NULL, `status` varchar(8) NOT NULL DEFAULT 'ACTIVE', `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL, UNIQUE INDEX `IDX_d7aeb06b61c386eb07e37033a1` (`nameGenre`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `movies` ADD `genre_id` int NULL");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `created_at` `created_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `updated_at` `updated_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `created_at` `created_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `updated_at` `updated_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `movies` ADD CONSTRAINT `FK_cf3f214b7bdb6bc5e641930ee6b` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `movies` DROP FOREIGN KEY `FK_cf3f214b7bdb6bc5e641930ee6b`");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `updated_at` `updated_at` timestamp NOT NULL DEFAULT ''0000-00-00 00:00:00''");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `created_at` `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `updated_at` `updated_at` timestamp NOT NULL DEFAULT ''0000-00-00 00:00:00''");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `created_at` `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `movies` DROP COLUMN `genre_id`");
        await queryRunner.query("DROP INDEX `IDX_d7aeb06b61c386eb07e37033a1` ON `genres`");
        await queryRunner.query("DROP TABLE `genres`");
    }

}

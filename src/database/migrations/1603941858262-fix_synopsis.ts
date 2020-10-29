import {MigrationInterface, QueryRunner} from "typeorm";

export class fixSynopsis1603941858262 implements MigrationInterface {
    name = 'fixSynopsis1603941858262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_fb3048434bde0806618d1ea760` ON `movies`");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `sysnopsis` `synopsis` text NOT NULL");
        await queryRunner.query("ALTER TABLE `movies` DROP FOREIGN KEY `FK_cf3f214b7bdb6bc5e641930ee6b`");
        await queryRunner.query("ALTER TABLE `movies` ADD UNIQUE INDEX `IDX_c24885923a89c503b27c3c719e` (`synopsis`)");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `genre_id` `genre_id` int NULL");
        await queryRunner.query("ALTER TABLE `movies` ADD CONSTRAINT `FK_cf3f214b7bdb6bc5e641930ee6b` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `movies` DROP FOREIGN KEY `FK_cf3f214b7bdb6bc5e641930ee6b`");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `genre_id` `genre_id` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movies` DROP INDEX `IDX_c24885923a89c503b27c3c719e`");
        await queryRunner.query("ALTER TABLE `movies` ADD CONSTRAINT `FK_cf3f214b7bdb6bc5e641930ee6b` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `synopsis` `sysnopsis` text NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_fb3048434bde0806618d1ea760` ON `movies` (`sysnopsis`)");
    }

}

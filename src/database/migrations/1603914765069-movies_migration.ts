import {MigrationInterface, QueryRunner} from "typeorm";

export class moviesMigration1603914765069 implements MigrationInterface {
    name = 'moviesMigration1603914765069'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `movies` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(100) NOT NULL, `duration` int NOT NULL, `sysnopsis` text NOT NULL, `status` varchar(8) NOT NULL DEFAULT 'ACTIVE', `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL, UNIQUE INDEX `IDX_3a794f850bd3e432c46b3faa91` (`name`), UNIQUE INDEX `IDX_fb3048434bde0806618d1ea760` (`sysnopsis`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_fb3048434bde0806618d1ea760` ON `movies`");
        await queryRunner.query("DROP INDEX `IDX_3a794f850bd3e432c46b3faa91` ON `movies`");
        await queryRunner.query("DROP TABLE `movies`");
    }

}

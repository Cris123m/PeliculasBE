import {MigrationInterface, QueryRunner} from "typeorm";

export class actorsMigration1603917237286 implements MigrationInterface {
    name = 'actorsMigration1603917237286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `actors` (`id` int NOT NULL AUTO_INCREMENT, `names` varchar(100) NOT NULL, `age` int NOT NULL, `photoURL` text NOT NULL, `status` varchar(8) NOT NULL DEFAULT 'ACTIVE', `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL, UNIQUE INDEX `IDX_b3caf4b16b81ef2932fe33d6f5` (`names`), UNIQUE INDEX `IDX_405de21b4701eced0cf56386a5` (`photoURL`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `movie_actors` (`moviesId` int NOT NULL, `actorsId` int NOT NULL, INDEX `IDX_9cece9fdb698e5c4f98c613de3` (`moviesId`), INDEX `IDX_0e5267847734b6af68dbecf46f` (`actorsId`), PRIMARY KEY (`moviesId`, `actorsId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `created_at` `created_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `updated_at` `updated_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `movie_actors` ADD CONSTRAINT `FK_9cece9fdb698e5c4f98c613de36` FOREIGN KEY (`moviesId`) REFERENCES `movies`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `movie_actors` ADD CONSTRAINT `FK_0e5267847734b6af68dbecf46f0` FOREIGN KEY (`actorsId`) REFERENCES `actors`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `movie_actors` DROP FOREIGN KEY `FK_0e5267847734b6af68dbecf46f0`");
        await queryRunner.query("ALTER TABLE `movie_actors` DROP FOREIGN KEY `FK_9cece9fdb698e5c4f98c613de36`");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `updated_at` `updated_at` timestamp NOT NULL DEFAULT ''0000-00-00 00:00:00''");
        await queryRunner.query("ALTER TABLE `movies` CHANGE `created_at` `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()");
        await queryRunner.query("DROP INDEX `IDX_0e5267847734b6af68dbecf46f` ON `movie_actors`");
        await queryRunner.query("DROP INDEX `IDX_9cece9fdb698e5c4f98c613de3` ON `movie_actors`");
        await queryRunner.query("DROP TABLE `movie_actors`");
        await queryRunner.query("DROP INDEX `IDX_405de21b4701eced0cf56386a5` ON `actors`");
        await queryRunner.query("DROP INDEX `IDX_b3caf4b16b81ef2932fe33d6f5` ON `actors`");
        await queryRunner.query("DROP TABLE `actors`");
    }

}

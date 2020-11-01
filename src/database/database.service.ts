import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from '../config/config.keys';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        //ssl: true, //Quitar comentario en caso de usar una conexión segura con ssl
        type: 'mysql' as 'mysql', //Dato quemado mysql, cambiar en caso de usar con otra base de datos por ejemplo (postgresql)
        host: config.get(Configuration.HOST),
        port: 3306, //Puerto de conexión a la base de datos, cambiar de ser necesario
        database: config.get(Configuration.DATABASE),
        username: config.get(Configuration.USERNAME),
        password: config.get(Configuration.PASSWORD),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];

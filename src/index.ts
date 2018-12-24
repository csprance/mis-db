import { ConnectionOptions, createConnection, getConnection } from 'typeorm';

import Characters from './entities/Characters';
import ClanMembers from './entities/ClanMembers';
import Clans from './entities/Clans';
import Entities from './entities/Entities';
import Items from './entities/Items';
import ServerAccountData from './entities/ServerAccountData';
import StructureParts from './entities/StructureParts';
import Structures from './entities/Structures';
import Vehicles from './entities/Vehicles';
import Version from './entities/Version';

/*
  Connect to the Miscreated.db Sqlite Database
   */
export const connect = async (dbPath: string) => {
  const opts: ConnectionOptions = {
    type: 'sqlite',
    database: dbPath,
    entities: [
      Characters,
      ClanMembers,
      Clans,
      Entities,
      Items,
      ServerAccountData,
      StructureParts,
      Structures,
      Vehicles,
      Version
    ],
    synchronize: false,
    logging: false
  };
  try {
    await createConnection(opts);
  } catch (e) {
    const connection = getConnection();
    await connection.close();
    await createConnection(opts);
  }
};

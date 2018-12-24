import { getConnection } from 'typeorm';
import Vehicles from '../entities/Vehicles';

export default async () => {
  const db = await getConnection();
  return db.getRepository(Vehicles).find();
};

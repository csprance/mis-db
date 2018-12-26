import { getConnection } from 'typeorm';
import Vehicles from '../entities/Vehicles';
import { Vec3 } from '../types';
import { VehicleClasses } from '../types/VehicleTypes';

export const getVehicles = async () => {
  const db = await getConnection();
  return db.getRepository(Vehicles).find();
};

/*
Sets a single vehicle position, rotation by it's vehicle class
 */
export const setVehiclePositionByType = async (
  vehicleClass: VehicleClasses,
  pos: Vec3,
  rot: Vec3 = [0, 0, 0]
) => {
  const [posX, posY, posZ] = pos;
  const [rotX, rotY, rotZ] = rot;
  const db = await getConnection();
  const vehicleRepo = await db.getRepository(Vehicles);
  const vehicle = await vehicleRepo.findOneOrFail({ ClassName: vehicleClass });
  vehicle.PosX = posX;
  vehicle.PosY = posY;
  vehicle.PosZ = posZ;
  vehicle.RotX = rotX;
  vehicle.RotY = rotY;
  vehicle.RotZ = rotZ;
  await vehicleRepo.save(vehicle);
  return vehicle;
};

export const setVehicleInventory = () => {};

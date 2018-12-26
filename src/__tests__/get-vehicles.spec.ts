import * as vehicleUtils from '../utils/vehicle-utils';
import { connect } from '../index';
import { getConnection } from 'typeorm';

beforeAll(async done => {
  await connect('miscreated.db');
  done();
});

afterAll(async done => {
  const connection = getConnection();
  await connection.close();
  done();
});

describe('Vehicles', () => {
  it('Can Find All Vehicles', async () => {
    const vehicles = await vehicleUtils.getVehicles();
    expect(vehicles).toBeDefined();
  });

  it('Can set the position of a vehicle by a vehicle class', async () => {
    const vehicle = await vehicleUtils.setVehiclePositionByType('bicycle', [
      0,
      0,
      0
    ]);
    expect(vehicle.PosX).toEqual(0);
    expect(vehicle.PosY).toEqual(0);
    expect(vehicle.PosZ).toEqual(0);
  });

  // it('Set the inventory of a vehicle', async () => {
  //
  // })
});

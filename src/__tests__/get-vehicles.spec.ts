import getVehicles from '../utils/get-vehicles';
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

describe('Get Vehicles', () => {
  it('Can Find All Vehicles', async () => {
    const vehicles = await getVehicles();
    expect(vehicles).toBeDefined();
  });
});

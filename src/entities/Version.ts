import { Entity, PrimaryColumn} from 'typeorm';

@Entity()
export default class Version {
  @PrimaryColumn() public Version!: number;
}

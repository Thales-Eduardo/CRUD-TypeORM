import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterProductNotNull1628690130083 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE products ALTER COLUMN category_id DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE products ALTER COLUMN category_id SET NOT NULL`,
    );
  }
}

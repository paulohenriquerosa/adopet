import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterImageFieldToNullable1598045760629
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('posts', 'image');

    await queryRunner.addColumn(
      'posts',
      new TableColumn({
        name: 'image',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('posts', 'image');

    await queryRunner.addColumn(
      'posts',
      new TableColumn({
        name: 'image',
        type: 'varchar',
      }),
    );
  }
}

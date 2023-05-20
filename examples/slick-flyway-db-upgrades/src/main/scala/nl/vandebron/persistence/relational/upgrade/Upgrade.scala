package nl.vandebron.persistence.relational.upgrade

import org.flywaydb.core.Flyway
import org.flywaydb.core.api.output.MigrateResult
import slick.jdbc

object Upgrade {

  private val DEFAULT_SCHEMA_HISTORY_TABLE: String = "flyway_schema_history"
  /**
   * Execute each step of your db.migration folder.
   * If schema already exists, baseline is not executed. If not exists, schema is created with baseline.
   *
   * @param db The datasource
   * @param dbName The name of the database managed by this flyway migration
   */
  def executeMigration(db: jdbc.JdbcBackend.DatabaseDef, dbName: String): MigrateResult =
    createConfig(db, dbName)
      .table(DEFAULT_SCHEMA_HISTORY_TABLE)
      .load()
      .migrate()

  private def createConfig(db: jdbc.JdbcBackend.DatabaseDef, dbName: String) =
    Flyway
      .configure()
      .locations("db/migration", s"db/$dbName")
      .dataSource(new FlywayDatasource(db))
      .baselineOnMigrate(true) //because flyway activated on an existing database

}

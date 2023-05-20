package nl.vandebron.nl.persistence.relational.slick

import nl.vandebron.nl.persistence.relational.upgrade.SchemaRoundtripSpecs
import nl.vandebron.persistence.relational.slick.{ Connection, Tables }
import nl.vandebron.persistence.relational.upgrade.Upgrade
import slick.lifted.TableQuery
import slick.relational.RelationalProfile

class ChargePointUpgradeSpecs
    extends SchemaRoundtripSpecs(
      db = Connection.db,
      toCreate = Tables.queries.map(_.asInstanceOf[TableQuery[RelationalProfile#Table[_]]]),
      createDatabase = () => 0,
      executeMigration = () => Upgrade.executeMigration(db = Connection.db, dbName = "TESTDB")
    ) {}

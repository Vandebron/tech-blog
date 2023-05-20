package nl.vandebron.persistence.relational.slick

import slick.jdbc.JdbcBackend

object Connection {
  val db: JdbcBackend.DatabaseDef = JdbcBackend.Database.forConfig("h2mem")
}

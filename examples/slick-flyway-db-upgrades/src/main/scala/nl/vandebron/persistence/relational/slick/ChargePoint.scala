package nl.vandebron.persistence.relational.slick

import slick.lifted.{ Rep, Tag }

import java.time.LocalDate
import slick.jdbc.H2Profile.api._

case class ChargePoint(
    id: Long,
    brand: String,
    powerInKwh: Double,
    installationDate: Option[LocalDate]
)

class ChargePointTable(tag: Tag) extends Table[ChargePoint](tag, None, "charge_point") {
  override def * = (id, brand, powerInKwh, installationDate) <> (ChargePoint.tupled, ChargePoint.unapply)

  val id: Rep[Long]                            = column[Long]("id", O.AutoInc, O.PrimaryKey)
  val brand: Rep[String]                       = column[String]("brand")
  val powerInKwh: Rep[Double]                  = column[Double]("power_in_kwh")
  val installationDate: Rep[Option[LocalDate]] = column[Option[LocalDate]]("installation_date")
}

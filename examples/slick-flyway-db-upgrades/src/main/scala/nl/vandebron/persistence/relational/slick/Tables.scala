package nl.vandebron.persistence.relational.slick

import slick.lifted.{ Rep, TableQuery, Tag }

import java.time.LocalDate
import slick.jdbc.H2Profile.api._

object Tables {
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

  implicit val chargePointQuery = TableQuery[ChargePointTable]

  case class Customer(
      id: Long,
      homeCharger: Long
  )

  class CustomerTable(tag: Tag) extends Table[Customer](tag, None, "customer") {
    override def * = (id, homeCharger) <> (Customer.tupled, Customer.unapply)

    val id: Rep[Long]          = column[Long]("id", O.AutoInc, O.PrimaryKey)
    val homeCharger: Rep[Long] = column[Long]("home_charger")

    def chargePoint = foreignKey("CUSTOMER_CHARGE_POINT_FK", id, chargePointQuery)(_.id, onDelete = ForeignKeyAction.Cascade)

  }

  implicit val customerQuery = TableQuery[CustomerTable]

  val queries = Seq(chargePointQuery, customerQuery)
}

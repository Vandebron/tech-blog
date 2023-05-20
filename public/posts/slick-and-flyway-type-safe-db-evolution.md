---
title: Type safe database evolution
description: How can we evolve our databases without losing type safety
createdAt: 2022-05-07
coverImage: images/spin-up-kubernetes-on-macbook.jpg
imageSource: https://pixabay.com/it/users/mari_sparrow-13090456/
tags: Scala, Slick, Flyway
author: Sam Theisens
---

## The problem

Slick  

Wish list
 * Near-zero downtime during database upgrades 
 * Guaranteed consistency between Slick models and database schema
 * 

```scala
case class ChargePoint(
    id: Long,
    brand: String,
    powerInKwh: Double,
    installationDate: Option[LocalDate]
)
```


```scala
class ChargePointTable(tag: Tag) extends Table[ChargePoint](tag, None, "charge_point") {
  override def * = (id, brand, powerInKwh, installationDate) <> (ChargePoint.tupled, ChargePoint.unapply)

  val id: Rep[Long]                            = column[Long]("id", O.AutoInc, O.PrimaryKey)
  val brand: Rep[String]                       = column[String]("brand")
  val powerInKwh: Rep[Double]                  = column[Double]("power_in_kwh")
  val installationDate: Rep[Option[LocalDate]] = column[Option[LocalDate]]("installation_date")
}
```

## The solution



lazy val root = (project in file(".")).settings(
  libraryDependencies ++= Libraries.scalatest ++ Libraries.slick ++ Libraries.database ++ Libraries.flywayDependencies ++ Libraries.logging
)


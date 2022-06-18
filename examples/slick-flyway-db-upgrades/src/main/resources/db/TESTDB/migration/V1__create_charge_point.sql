create table if not exists "charge_point" (
    "id" BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    "brand" VARCHAR NOT NULL,
    "power" DOUBLE NOT NULL,
    "installation_date" DATE
)

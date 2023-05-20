create table if not exists "charge_point"
(
    "id"                BIGINT  NOT NULL AUTO_INCREMENT,
    "brand"             VARCHAR NOT NULL,
    "power"             DOUBLE  NOT NULL,
    "installation_date" DATE,
    CONSTRAINT charge_point_pk PRIMARY KEY ("id")
);

create table if not exists "customer"
(
    "id"           BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    "home_charger" BIGINT NOT NULL
);

ALTER TABLE "customer" ADD CONSTRAINT
    "CUSTOMER_CHARGE_POINT_FK" FOREIGN KEY ("id") REFERENCES
        PUBLIC."charge_point"("id") ON DELETE CASCADE ON UPDATE RESTRICT;
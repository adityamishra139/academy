-- CreateTable
CREATE TABLE "Gem" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "team" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,

    CONSTRAINT "Gem_pkey" PRIMARY KEY ("id")
);

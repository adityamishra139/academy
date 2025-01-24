-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "phone" VARCHAR(10),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inquiry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phone" VARCHAR(10) NOT NULL,

    CONSTRAINT "Inquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coach" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(10),

    CONSTRAINT "Coach_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "chosen" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gem" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "team" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,

    CONSTRAINT "Gem_pkey" PRIMARY KEY ("id")
);

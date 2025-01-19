-- DropIndex
DROP INDEX "Feedback_email_key";

-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "chosen" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

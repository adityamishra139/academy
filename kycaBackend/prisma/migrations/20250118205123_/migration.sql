/*
  Warnings:

  - You are about to drop the column `team` on the `Coach` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Feedback_email_key";

-- AlterTable
ALTER TABLE "Coach" DROP COLUMN "team",
ADD COLUMN     "phone" VARCHAR(10);

/*
  Warnings:

  - You are about to alter the column `departureDate` on the `travels` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `returnDate` on the `travels` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `travels` MODIFY `departureDate` DATETIME(3) NOT NULL,
    MODIFY `returnDate` DATETIME(3) NOT NULL;

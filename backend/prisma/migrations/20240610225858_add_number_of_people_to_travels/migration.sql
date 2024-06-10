/*
  Warnings:

  - Added the required column `numberOfPeople` to the `Travels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `travels` ADD COLUMN `numberOfPeople` INTEGER NOT NULL;

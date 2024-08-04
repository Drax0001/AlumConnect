/*
  Warnings:

  - You are about to drop the column `academicProgramId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `AcademicProgram` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_academicProgramId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "academicProgramId",
ADD COLUMN     "department" TEXT,
ADD COLUMN     "faculty" TEXT;

-- DropTable
DROP TABLE "AcademicProgram";

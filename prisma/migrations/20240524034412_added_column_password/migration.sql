-- AlterTable
ALTER TABLE "Alumni" ADD COLUMN     "password" TEXT NOT NULL DEFAULT 'tempPassword';

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "password" TEXT NOT NULL DEFAULT 'tempPassword';

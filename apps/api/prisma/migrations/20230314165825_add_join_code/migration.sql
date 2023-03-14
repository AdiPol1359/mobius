-- CreateTable
CREATE TABLE "team_join_code" (
    "id" SERIAL NOT NULL,
    "team_id" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "team_join_code_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "team_join_code_code_key" ON "team_join_code"("code");

-- AddForeignKey
ALTER TABLE "team_join_code" ADD CONSTRAINT "team_join_code_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

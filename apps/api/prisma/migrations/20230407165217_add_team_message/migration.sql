-- CreateTable
CREATE TABLE "team_message" (
    "id" SERIAL NOT NULL,
    "team_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_message_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "team_message" ADD CONSTRAINT "team_message_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_message" ADD CONSTRAINT "team_message_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

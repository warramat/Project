BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "tbl_user" (
	"user_id"	INTEGER,
	"user_name"	TEXT,
	"user_contact"	TEXT,
	"user_address"	TEXT,
	PRIMARY KEY("user_id" AUTOINCREMENT)
);
INSERT INTO "tbl_user" VALUES (1,'User1','9999','demo address1');
INSERT INTO "tbl_user" VALUES (2,'User2','8888','demo address2');
INSERT INTO "tbl_user" VALUES (3,'User3','7777','demo address3');
COMMIT;

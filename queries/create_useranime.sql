-- atulixer_animebio.`useranime` definition

CREATE TABLE atulixer_animebio.useranime (
	user_fk INT NOT NULL,
	anime_fk INT NOT NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;
CREATE INDEX useranime_user_fk_IDX USING BTREE ON atulixer_animebio.useranime (user_fk,anime_fk);

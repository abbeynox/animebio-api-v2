-- atulixer_animebio.`anime` definition

CREATE TABLE atulixer_animebio.anime (
	id INT auto_increment NOT NULL,
	anime_mal_id INT NOT NULL,
	saved_at DATETIME DEFAULT current_timestamp() NOT NULL,
	CONSTRAINT anime_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

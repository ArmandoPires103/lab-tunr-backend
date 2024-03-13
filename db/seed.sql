-- db/seed.sql

\c songs_dev;

INSERT INTO songs (name, artist, album, title, is_favorite)
VALUES
    ('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', 'Rock', true),
    ('Hotel California', 'Eagles', 'Hotel California', 'Rock', true),
    ('Stairway to Heaven', 'Led Zeppelin', 'Led Zeppelin IV', 'Rock', true);

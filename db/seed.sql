-- db/seed.sql

\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite)
VALUES
    ('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', '4', true),
    ('Hotel California', 'Eagles', 'Hotel California', '4', true),
    ('Stairway to Heaven', 'Led Zeppelin', 'Led Zeppelin IV', '4', true);
